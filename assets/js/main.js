document.addEventListener("DOMContentLoaded", function () {
  var saved = localStorage.getItem("theme")
  var preferred = window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark"
  document.documentElement.setAttribute("data-theme", saved || preferred)

  document
    .querySelector(".theme-toggle")
    .addEventListener("click", function () {
      var next =
        document.documentElement.getAttribute("data-theme") === "light"
          ? "dark"
          : "light"
      document.documentElement.setAttribute("data-theme", next)
      localStorage.setItem("theme", next)
    })

  var img = document.getElementById("hero-image")
  var wrap = document.getElementById("hero-image-wrap")
  if (img && wrap) {
    var done = function () {
      wrap.classList.remove("is-loading")
    }
    if (img.complete) {
      done()
    } else {
      img.addEventListener("load", done, { once: true })
      img.addEventListener("error", done, { once: true })
    }
  }
})
