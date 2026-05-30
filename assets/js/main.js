document.addEventListener("DOMContentLoaded", function () {
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
    if (img.complete) { done() }
    else {
      img.addEventListener("load", done, { once: true })
      img.addEventListener("error", done, { once: true })
    }
  }

  // ── Stat cards entrance ──
  var cards = document.querySelector(".about-cards")
  if (cards) {
    new IntersectionObserver(function (entries, observer) {
      if (entries[0].isIntersecting) {
        cards.classList.add("is-visible")
        observer.disconnect()
      }
    }, { threshold: 0.2 }).observe(cards)
  }

  // ── Experience: timeline accent (fixed-length segment under active dot) + accordion ──
  var roadmap = document.querySelector(".roadmap")
  var milestones = document.querySelectorAll(".milestone")

  function updateRoadmapSegment() {
    if (!roadmap || !milestones.length) return

    var active = roadmap.querySelector(".milestone.is-line-active")

    if (!active) {
      roadmap.style.setProperty("--wk-seg-alpha", "0")
      roadmap.style.setProperty("--wk-seg-h", "0px")
      roadmap.style.setProperty("--wk-seg-t", "0px")
      return
    }

    var node = active.querySelector(".hit-node")
    if (!node) {
      roadmap.style.setProperty("--wk-seg-alpha", "0")
      roadmap.style.setProperty("--wk-seg-h", "0px")
      roadmap.style.setProperty("--wk-seg-t", "0px")
      return
    }

    var rBox = roadmap.getBoundingClientRect()
    var msRect = active.getBoundingClientRect()
    var b = node.getBoundingClientRect()
    var cy = b.top + b.height / 2 - rBox.top
    var segTop = Math.max(0, cy)
    var msBottom = msRect.bottom - rBox.top
    var hUse = msBottom - segTop
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

    function clearLineActive() {
      milestones.forEach(function (m) {
        m.classList.remove("is-line-active")
      })
    }

    var best = null
    var bestDist = Infinity

    milestones.forEach(function (m) {
      var rect = m.getBoundingClientRect()
      if (rect.bottom < bandTop || rect.top > bandBot) return
      var dist = distToMid(rect)
      if (dist < bestDist) {
        bestDist = dist
        best = m
      }
    })

    if (!best) {
      bestDist = Infinity
      milestones.forEach(function (m) {
        var rect = m.getBoundingClientRect()
        if (rect.bottom <= 0 || rect.top >= window.innerHeight) return
        var dist = distToMid(rect)
        if (dist < bestDist) {
          bestDist = dist
          best = m
        }
      })
    }

    if (!best && roadmap) {
      var rb = roadmap.getBoundingClientRect()
      var roadmapOnScreen = rb.bottom > 0 && rb.top < window.innerHeight
      if (roadmapOnScreen) {
        bestDist = Infinity
        milestones.forEach(function (m) {
          var rect = m.getBoundingClientRect()
          var dist = distToMid(rect)
          if (dist < bestDist) {
            bestDist = dist
            best = m
          }
        })
      }
    }

    if (!best) {
      clearLineActive()
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
    var ro = new ResizeObserver(function () {
      scheduleSegmentGeometry()
    })
    ro.observe(roadmap)
  }

  milestones.forEach(function (ms) {
    ms.addEventListener("transitionend", function (e) {
      if (e.propertyName !== "grid-template-rows") return
      updateRoadmapSegment()
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
    else {
      milestones.forEach(function (other) {
        if (other !== ms) closeMilestone(other)
      })
      openMilestone(ms)
    }
    updateRoadmapSegment()
    scheduleSegmentGeometry()
  }

  milestones.forEach(function (ms) {
    var btn = ms.querySelector(".hit-expand")
    if (btn) {
      btn.addEventListener("click", function () {
        toggleMilestone(ms)
      })
    }
  })

  milestones.forEach(function (ms) {
    closeMilestone(ms)
  })

  // ── Projects: accordion ──
  var projArticles = document.querySelectorAll(".proj")
  var PROJ_OPEN = "Details"
  var PROJ_SHUT = "Hide"

  function closeProjArticle(article) {
    article.setAttribute("aria-expanded", "false")
    var btn = article.querySelector(".hit-expand")
    var pane = article.querySelector(".proj-pane")
    var lab = article.querySelector(".proj-expand-label")
    if (btn) btn.setAttribute("aria-expanded", "false")
    if (pane) pane.setAttribute("aria-hidden", "true")
    if (lab) lab.textContent = PROJ_OPEN
  }

  function openProjArticle(article) {
    article.setAttribute("aria-expanded", "true")
    var btn = article.querySelector(".hit-expand")
    var pane = article.querySelector(".proj-pane")
    var lab = article.querySelector(".proj-expand-label")
    if (btn) btn.setAttribute("aria-expanded", "true")
    if (pane) pane.setAttribute("aria-hidden", "false")
    if (lab) lab.textContent = PROJ_SHUT
  }

  function toggleProjArticle(article) {
    var isOpen = article.getAttribute("aria-expanded") === "true"
    if (isOpen) closeProjArticle(article)
    else {
      projArticles.forEach(function (other) {
        if (other !== article) closeProjArticle(other)
      })
      openProjArticle(article)
    }
  }

  projArticles.forEach(function (article) {
    var btn = article.querySelector(".hit-expand")
    if (btn) {
      btn.addEventListener("click", function () {
        toggleProjArticle(article)
      })
    }
    closeProjArticle(article)
  })
})
