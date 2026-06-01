document.addEventListener("DOMContentLoaded", function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  // ── Theme ──
  var saved = localStorage.getItem("theme")
  var preferred = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
  document.documentElement.setAttribute("data-theme", saved || preferred)

  document.querySelector(".theme-toggle").addEventListener("click", function () {
    var next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light"
    document.documentElement.setAttribute("data-theme", next)
    localStorage.setItem("theme", next)
  })

  // ── Profile image loading ──
  var img = document.getElementById("hero-image")
  var wrap = document.getElementById("hero-image-wrap")
  if (img && wrap) {
    var done = function () { wrap.classList.remove("is-loading") }
    if (img.complete) done()
    else {
      img.addEventListener("load", done, { once: true })
      img.addEventListener("error", done, { once: true })
    }
  }

  // ── Stat cards entrance ──
  var cards = document.querySelector(".about-cards")
  if (cards) {
    if (reduceMotion) {
      cards.classList.add("is-visible")
    } else {
      new IntersectionObserver(function (entries, observer) {
        if (entries[0].isIntersecting) {
          cards.classList.add("is-visible")
          observer.disconnect()
        }
      }, { threshold: 0.2 }).observe(cards)
    }
  }

  // ── Project accordion ──
  function initAccordion(items, opts) {
    function clearCollapseListener(item) {
      if (item._collapseTransEl && item._collapseEnd) {
        item._collapseTransEl.removeEventListener("transitionend", item._collapseEnd)
      }
      item._collapseTransEl = null
      item._collapseEnd = null
    }

    function setExpanded(item, open) {
      if (open) item.classList.remove("is-collapsed")
      item.setAttribute("aria-expanded", open ? "true" : "false")
      var btn = item.querySelector(".hit-expand")
      var pane = item.querySelector(opts.pane)
      var lab = item.querySelector(opts.label)
      if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false")
      if (pane) pane.setAttribute("aria-hidden", open ? "false" : "true")
      if (lab) lab.textContent = open ? opts.shut : opts.open
    }

    function settleCollapsed(item) {
      if (item.getAttribute("aria-expanded") === "true") return
      item.classList.add("is-collapsed")
    }

    function markCollapsing(item) {
      clearCollapseListener(item)
      if (item._collapseTimer) {
        clearTimeout(item._collapseTimer)
        item._collapseTimer = null
      }
      if (reduceMotion) {
        settleCollapsed(item)
        return
      }
      var trans = item
      var finished = false
      function finish() {
        if (finished) return
        finished = true
        if (item._collapseTimer) {
          clearTimeout(item._collapseTimer)
          item._collapseTimer = null
        }
        clearCollapseListener(item)
        settleCollapsed(item)
      }
      function onEnd(e) {
        if (e.target !== trans || e.propertyName !== "grid-template-rows") return
        finish()
      }
      item._collapseTransEl = trans
      item._collapseEnd = onEnd
      trans.addEventListener("transitionend", onEnd)
      item._collapseTimer = setTimeout(finish, 400)
    }

    function toggle(item) {
      var open = item.getAttribute("aria-expanded") !== "true"
      if (!open) markCollapsing(item)
      setExpanded(item, open)
    }

    items.forEach(function (item) {
      var btn = item.querySelector(".hit-expand")
      if (btn) btn.addEventListener("click", function () { toggle(item) })
      setExpanded(item, false)
      item.classList.add("is-collapsed")
    })
  }

  // ── Experience: timeline segment + milestone accordion ──
  var roadmap = document.querySelector(".roadmap")
  var milestones = document.querySelectorAll(".milestone")

  function resetSegment() {
    roadmap.style.setProperty("--wk-seg-alpha", "0")
    roadmap.style.setProperty("--wk-seg-h", "0px")
    roadmap.style.setProperty("--wk-seg-t", "0px")
  }

  function updateRoadmapSegment() {
    if (!roadmap || !milestones.length) return

    var active = roadmap.querySelector(".milestone.is-line-active")
    if (!active) {
      resetSegment()
      return
    }

    var node = active.querySelector(".hit-node")
    if (!node) {
      resetSegment()
      return
    }

    var rBox = roadmap.getBoundingClientRect()
    var msRect = active.getBoundingClientRect()
    var b = node.getBoundingClientRect()
    var cy = b.top + b.height / 2 - rBox.top
    var segTop = Math.max(0, cy)
    var hUse = msRect.bottom - rBox.top - segTop
    if (!isFinite(hUse)) hUse = 6
    else hUse = Math.max(6, hUse)
    hUse = Math.min(hUse, Math.max(0, rBox.height - segTop))

    roadmap.style.setProperty("--wk-seg-t", segTop + "px")
    roadmap.style.setProperty("--wk-seg-h", hUse + "px")
    roadmap.style.setProperty("--wk-seg-alpha", "0.92")
  }

  var segGeomQueued = false
  function scheduleSegmentGeometry() {
    if (segGeomQueued) return
    segGeomQueued = true
    requestAnimationFrame(function () {
      segGeomQueued = false
      updateRoadmapSegment()
    })
  }

  function pickLineActiveMilestone() {
    if (!milestones.length) return

    var bandTop = 72
    var bandBot = window.innerHeight - 72
    var mid = window.innerHeight * 0.45

    function distToMid(rect) {
      return Math.abs((rect.top + rect.bottom) / 2 - mid)
    }

    function pickFrom(filter) {
      var best = null
      var bestDist = Infinity
      milestones.forEach(function (m) {
        var rect = m.getBoundingClientRect()
        if (filter && !filter(rect)) return
        var dist = distToMid(rect)
        if (dist < bestDist) {
          bestDist = dist
          best = m
        }
      })
      return best
    }

    var best = pickFrom(function (rect) {
      return rect.bottom >= bandTop && rect.top <= bandBot
    })

    if (!best) {
      best = pickFrom(function (rect) {
        return rect.bottom > 0 && rect.top < window.innerHeight
      })
    }

    if (!best && roadmap) {
      var rb = roadmap.getBoundingClientRect()
      if (rb.bottom > 0 && rb.top < window.innerHeight) {
        best = pickFrom(null)
      }
    }

    if (!best) {
      milestones.forEach(function (m) { m.classList.remove("is-line-active") })
      updateRoadmapSegment()
      return
    }

    milestones.forEach(function (m) {
      m.classList.toggle("is-line-active", m === best)
    })
    updateRoadmapSegment()
  }

  var glowScheduled = false
  function scheduleLineUpdate() {
    if (glowScheduled) return
    glowScheduled = true
    requestAnimationFrame(function () {
      glowScheduled = false
      pickLineActiveMilestone()
    })
  }

  window.addEventListener("scroll", scheduleLineUpdate, { passive: true })
  window.addEventListener("resize", scheduleLineUpdate)

  if (roadmap && typeof ResizeObserver !== "undefined") {
    new ResizeObserver(scheduleSegmentGeometry).observe(roadmap)
  }

  milestones.forEach(function (ms) {
    ms.addEventListener("transitionend", function (e) {
      if (e.propertyName === "grid-template-rows") scheduleSegmentGeometry()
    })
  })
  pickLineActiveMilestone()

  var OPEN_CTA = "View work"
  var SHUT_CTA = "Hide"

  function closeMilestone(ms) {
    ms.setAttribute("aria-expanded", "false")
    var btn = ms.querySelector(".hit-expand")
    var pane = ms.querySelector(".pane")
    var lab = ms.querySelector(".hit-cta-label")
    if (btn) btn.setAttribute("aria-expanded", "false")
    if (pane) pane.setAttribute("aria-hidden", "true")
    if (lab) lab.textContent = OPEN_CTA
  }

  function openMilestone(ms) {
    ms.setAttribute("aria-expanded", "true")
    var btn = ms.querySelector(".hit-expand")
    var pane = ms.querySelector(".pane")
    var lab = ms.querySelector(".hit-cta-label")
    if (btn) btn.setAttribute("aria-expanded", "true")
    if (pane) pane.setAttribute("aria-hidden", "false")
    if (lab) lab.textContent = SHUT_CTA
  }

  function toggleMilestone(ms) {
    var isOpen = ms.getAttribute("aria-expanded") === "true"
    if (isOpen) closeMilestone(ms)
    else openMilestone(ms)
    scheduleSegmentGeometry()
  }

  milestones.forEach(function (ms) {
    var btn = ms.querySelector(".hit-expand")
    if (btn) {
      btn.addEventListener("click", function () {
        toggleMilestone(ms)
      })
    }
    closeMilestone(ms)
  })

  initAccordion(document.querySelectorAll(".proj"), {
    open: "Details",
    shut: "Hide",
    label: ".proj-expand-label",
    pane: ".proj-pane",
  })

  // Move focus to in-page section targets after hash navigation
  function focusHashTarget() {
    var id = window.location.hash.slice(1)
    if (!id) return
    var target = document.getElementById(id)
    if (target) target.focus({ preventScroll: false })
  }

  window.addEventListener("hashchange", focusHashTarget)
  if (window.location.hash) focusHashTarget()
})
