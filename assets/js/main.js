(() => {
  const burger = document.querySelector("[data-burger]");
  const nav = document.querySelector("[data-navlinks]");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("mobile");
      burger.setAttribute("aria-expanded", nav.classList.contains("mobile") ? "true" : "false");
    });
  }

  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-navlinks] a").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === current) a.classList.add("active");
  });
})();
