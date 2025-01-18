const headerMenuBtn = document.querySelector("#header-menu-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");
const headerDropdownMenuNavLinks = document.querySelectorAll(
  "#header-dropdown-menu nav.dropdown-nav li"
);

headerMenuBtn.addEventListener("click", handleHeaderMenuButtonClick);
headerDropdownMenuNavLinks.forEach((navLink) =>
  navLink.addEventListener("click", handleHeaderDropdownNavLinkClick)
);

function handleHeaderMenuButtonClick() {
  toggleHeaderMenuButtonState();
  toggleDropdownMenu();
}

function toggleDropdownMenu() {
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
}

function toggleHeaderMenuButtonState() {
  headerMenuBtn.classList.toggle("active");
  // toggle aria-expanded to notify screen-readers of dropdown state
  const isExpanded = headerMenuBtn.getAttribute("aria-expanded") === "true";
  headerMenuBtn.setAttribute("aria-expanded", !isExpanded);
}

function handleHeaderDropdownNavLinkClick() {
  closeHeaderDropdownMenu();
  setHeaderMenuBtnStateNotActive();
}

function closeHeaderDropdownMenu() {
  dropdownMenu.style.willChange = "max-height";

  dropdownMenu.classList.remove("active");

  // unset will-change property to release GPU resources
  dropdownMenu.addEventListener(
    "transitionend",
    () => {
      dropdownMenu.style.willChange = "auto";
    },
    { once: true }
  );
}

function setHeaderMenuBtnStateNotActive() {
  headerMenuBtn.classList.remove("active");
  // set aria-expanded to false to notify screen-readers of dropdown state
  headerMenuBtn.setAttribute("aria-expanded", false);
}
