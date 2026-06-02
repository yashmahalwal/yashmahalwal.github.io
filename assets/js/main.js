document.addEventListener("DOMContentLoaded", function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  // ── Header: translucent bg on scroll ──
  var siteHeader = document.getElementById("site-header")
  if (siteHeader) {
    var onHeaderScroll = function () {
      siteHeader.classList.toggle("is-scrolled", window.scrollY > 60)
    }
    window.addEventListener("scroll", onHeaderScroll, { passive: true })
    onHeaderScroll()
  }

  // ── Mobile menu ──
  var menuBtn = document.getElementById("site-header-toggle")
  var menuNav = document.getElementById("site-header-nav")
  if (menuBtn && menuNav) {
    function closeMenu() {
      menuBtn.setAttribute("aria-expanded", "false")
      menuBtn.setAttribute("aria-label", "Open menu")
      menuNav.classList.remove("is-open")
    }
    function openMenu() {
      menuBtn.setAttribute("aria-expanded", "true")
      menuBtn.setAttribute("aria-label", "Close menu")
      menuNav.classList.add("is-open")
    }
    menuBtn.addEventListener("click", function () {
      if (menuBtn.getAttribute("aria-expanded") === "true") closeMenu()
      else openMenu()
    })
    menuNav.querySelectorAll(".site-header-link, .site-header-nav-logo").forEach(function (link) {
      link.addEventListener("click", closeMenu)
    })
  }

  // ── Theme ──
  var saved = localStorage.getItem("theme")
  var preferred = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
  document.documentElement.setAttribute("data-theme", saved || preferred)

  document.querySelectorAll(".theme-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light"
      document.documentElement.setAttribute("data-theme", next)
      localStorage.setItem("theme", next)
    })
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
  var cards = document.querySelector(".about-band")
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
      if (pane) {
        pane.setAttribute("aria-hidden", open ? "false" : "true")
        pane.inert = !open
      }
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
    if (pane) { pane.setAttribute("aria-hidden", "true"); pane.inert = true }
    if (lab) lab.textContent = OPEN_CTA
  }

  function openMilestone(ms) {
    ms.setAttribute("aria-expanded", "true")
    var btn = ms.querySelector(".hit-expand")
    var pane = ms.querySelector(".pane")
    var lab = ms.querySelector(".hit-cta-label")
    if (btn) btn.setAttribute("aria-expanded", "true")
    if (pane) { pane.setAttribute("aria-hidden", "false"); pane.inert = false }
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

  // ── Web Vitals observers — buffered:true catches entries before registration ──
  // Must use { type } not { entryTypes } for buffered to work (MDN spec)
  var lcpMs = null
  var fcpMs = null
  var clsScore = 0
  var lcpObserver = null

  if (typeof PerformanceObserver !== "undefined") {
    try {
      lcpObserver = new PerformanceObserver(function (list) {
        var entries = list.getEntries()
        if (entries.length) lcpMs = entries[entries.length - 1].startTime
      })
      lcpObserver.observe({ type: "largest-contentful-paint", buffered: true })
    } catch (_) {}

    try {
      new PerformanceObserver(function (list) {
        list.getEntries().forEach(function (entry) {
          if (entry.name === "first-contentful-paint" && fcpMs === null) {
            fcpMs = entry.startTime
          }
        })
      }).observe({ type: "paint", buffered: true })
    } catch (_) {}

    try {
      new PerformanceObserver(function (list) {
        list.getEntries().forEach(function (entry) {
          if (!entry.hadRecentInput) clsScore += entry.value
        })
      }).observe({ type: "layout-shift", buffered: true })
    } catch (_) {}
  }

  // ── Footer: Web Vitals + resource stats ──
  function initFooterPerf() {
    var root = document.getElementById("footer-perf")
    if (!root || !window.performance) return

    function formatMs(ms) {
      if (!isFinite(ms) || ms <= 0) return null
      return Math.round(ms) + "\u00a0ms"
    }

    function formatBytes(bytes) {
      if (!isFinite(bytes) || bytes <= 0) return null
      if (bytes < 1024) return bytes + "\u00a0B"
      if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + "\u00a0KB"
      return (bytes / (1024 * 1024)).toFixed(2) + "\u00a0MB"
    }

    // good ≤ good-threshold, warn ≤ warn-threshold, else poor
    var THRESHOLDS = {
      lcp:  { good: 2500, warn: 4000 },
      fcp:  { good: 1800, warn: 3000 },
      ttfb: { good: 800,  warn: 1800 },
    }

    function setMetric(key, value) {
      var cell = root.querySelector('[data-perf="' + key + '"]')
      if (cell) cell.textContent = value || "—"
    }

    function setRatedMetric(key, rawMs, formatted) {
      setMetric(key, formatted)
      var cell = root.querySelector('[data-perf="' + key + '"]')
      var item = cell && cell.closest(".site-footer-perf-metric")
      if (item && formatted && THRESHOLDS[key]) {
        var t = THRESHOLDS[key]
        item.setAttribute("data-rating", rawMs <= t.good ? "good" : rawMs <= t.warn ? "warn" : "poor")
      }
    }

    function readMetrics() {
      var nav = performance.getEntriesByType("navigation")[0]
      if (!nav) return

      // TTFB: nav start → first byte (includes DNS, TCP, TLS — matches web-vitals library)
      var ttfbMs = nav.responseStart - nav.startTime
      setRatedMetric("ttfb", ttfbMs, formatMs(ttfbMs))

      // LCP — observer value, then takeRecords() flush, then getEntriesByType fallback
      var lcpWrap = root.querySelector('[data-perf-wrap="lcp"]')
      if (lcpWrap) {
        if (lcpObserver) {
          var pending = lcpObserver.takeRecords()
          if (pending.length) lcpMs = pending[pending.length - 1].startTime
        }
        if (lcpMs === null) {
          var lcpBuf = performance.getEntriesByType("largest-contentful-paint")
          if (lcpBuf.length) lcpMs = lcpBuf[lcpBuf.length - 1].startTime
        }
        if (lcpMs !== null) {
          var lcpFmt = formatMs(lcpMs)
          if (lcpFmt) { setRatedMetric("lcp", lcpMs, lcpFmt); lcpWrap.hidden = false }
        }
      }

      // FCP — observer value, then getEntriesByType fallback
      var fcpWrap = root.querySelector('[data-perf-wrap="fcp"]')
      if (fcpWrap) {
        if (fcpMs === null) {
          var paintBuf = performance.getEntriesByType("paint")
          for (var pi = 0; pi < paintBuf.length; pi++) {
            if (paintBuf[pi].name === "first-contentful-paint") { fcpMs = paintBuf[pi].startTime; break }
          }
        }
        if (fcpMs !== null) {
          var fcpFmt = formatMs(fcpMs)
          if (fcpFmt) { setRatedMetric("fcp", fcpMs, fcpFmt); fcpWrap.hidden = false }
        }
      }

      // CLS — accumulated by observer
      var clsWrap = root.querySelector('[data-perf-wrap="cls"]')
      if (clsWrap) {
        var clsCell = root.querySelector('[data-perf="cls"]')
        var clsItem = clsCell && clsCell.closest(".site-footer-perf-metric")
        if (clsCell) clsCell.textContent = clsScore.toFixed(3)
        if (clsItem) {
          clsItem.setAttribute("data-rating", clsScore <= 0.1 ? "good" : clsScore <= 0.25 ? "warn" : "poor")
        }
        clsWrap.hidden = false
      }

      // Transfer + requests — informational only, no rating
      var resources = performance.getEntriesByType("resource")
      var transfer = nav.transferSize || 0
      resources.forEach(function (r) { if (r.transferSize) transfer += r.transferSize })
      setMetric("transfer", formatBytes(transfer))
      setMetric("requests", String(resources.length + 1))

      root.hidden = false
    }

    function render() {
      requestAnimationFrame(function () {
        requestAnimationFrame(readMetrics)
      })
    }

    if (document.readyState === "complete") render()
    else window.addEventListener("load", render, { once: true })
  }

  initFooterPerf()
})
