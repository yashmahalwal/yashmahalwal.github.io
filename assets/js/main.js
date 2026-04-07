(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const hash = link.getAttribute("href");
    if (!hash || hash === "#") return;
    const id = hash.slice(1);
    const target = document.getElementById(id);
    if (!target) return;

    link.addEventListener("click", (event) => {
      event.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    });
  });

  const nav = document.querySelector(".nav-primary");
  if (!nav) return;
  const links = nav.querySelectorAll("a[href^='#']");
  const sections = [...links]
    .map((l) => document.getElementById(l.getAttribute("href").slice(1)))
    .filter(Boolean);

  const setCurrent = () => {
    const y = window.scrollY + 120;
    let current = null;
    for (const section of sections) {
      if (section.offsetTop <= y) current = section;
    }
    links.forEach((l) => l.removeAttribute("aria-current"));
    if (!current) return;
    const id = current.id;
    links.forEach((l) => {
      if (l.getAttribute("href") === `#${id}`) l.setAttribute("aria-current", "page");
    });
  };

  setCurrent();
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setCurrent();
        ticking = false;
      });
    },
    { passive: true }
  );
})();
