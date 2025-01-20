const headerMenuBtn = document.querySelector("#header-menu-btn");
const headerDropdownMenu = document.querySelector(".dropdown-menu");
const headerDropdownMenuNavLinks = document.querySelectorAll(
  "#header-dropdown-menu nav.dropdown-nav li"
);

headerMenuBtn.addEventListener("click", () =>
  handleDropdownBtnClick(headerMenuBtn, headerDropdownMenu)
);
headerDropdownMenuNavLinks.forEach((navLink) =>
  navLink.addEventListener("click", handleHeaderDropdownNavLinkClick)
);

function handleDropdownBtnClick(dropdownBtn, dropdown) {
  toggleDropdownBtnState(dropdownBtn);
  toggleDropdown(dropdown);
}

function toggleDropdown(dropdown) {
  // set will-change on max-height to optimise animation
  dropdown.style.willChange = "max-height";

  dropdown.classList.toggle("active");

  // unset will-change property to release GPU resources
  dropdown.addEventListener(
    "transitionend",
    () => {
      dropdown.style.willChange = "auto";
    },
    { once: true }
  );
}

function toggleDropdownBtnState(dropdownBtn) {
  dropdownBtn.classList.toggle("active");
  // toggle aria-expanded to notify screen-readers of dropdown state
  const isExpanded = dropdownBtn.getAttribute("aria-expanded") === "true";
  dropdownBtn.setAttribute("aria-expanded", !isExpanded);
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
