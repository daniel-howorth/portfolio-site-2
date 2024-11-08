import "../css/styles.css";

const headerMenuBtn = document.querySelector("#header-menu-btn");

headerMenuBtn.addEventListener("click", () => {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  dropdownMenu.style.willChange = "max-height";
  dropdownMenu.classList.toggle("active");

  dropdownMenu.addEventListener(
    "transitionend",
    () => {
      dropdownMenu.style.willChange = "auto";
    },
    { once: true }
  );
});
