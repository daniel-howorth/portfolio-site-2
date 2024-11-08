import "../css/styles.css";

const headerMenuBtn = document.querySelector("#header-menu-btn");

headerMenuBtn.addEventListener("click", () => {
  const dropdownMenu = document.querySelector(".dropdown-menu");

  // set will-change on max-height to optimise animation
  dropdownMenu.style.willChange = "max-height";

  dropdownMenu.classList.toggle("active");

  // unset will-change property to release GPU resources
  dropdownMenu.addEventListener(
    "transitionend",
    () => {
      dropdownMenu.style.willChange = "auto";
    },
    { once: true }
  );

  // toggle aria-expanded attribute to notify screen-readers of dropdown state
  const isExpanded = headerMenuBtn.getAttribute("aria-expanded") === "true";
  headerMenuBtn.setAttribute("aria-expanded", !isExpanded);
});
