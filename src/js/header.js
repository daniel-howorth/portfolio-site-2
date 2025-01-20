const homeBtn = document.querySelector("#home-btn");
const headerMenuBtn = document.querySelector("#header-menu-btn");
const headerDropdownMenu = document.querySelector(".dropdown-menu");
const headerDropdownMenuNavLinks = document.querySelectorAll(
  "#header-dropdown-menu nav.dropdown-nav li"
);

headerMenuBtn.addEventListener("click", () =>
  handleDropdownBtnClick(headerMenuBtn, headerDropdownMenu)
);
headerDropdownMenuNavLinks.forEach((navLink) =>
  navLink.addEventListener("click", () =>
    handleCloseDropdown(headerMenuBtn, headerDropdownMenu)
  )
);
homeBtn.addEventListener("click", () =>
  handleCloseDropdown(headerMenuBtn, headerDropdownMenu)
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

function handleCloseDropdown(dropdownBtn, dropdown) {
  closeDropdown(dropdown);
  setDropdownBtnStateNotActive(dropdownBtn);
}

function closeDropdown(dropdown) {
  dropdown.style.willChange = "max-height";

  dropdown.classList.remove("active");

  // unset will-change property to release GPU resources
  dropdown.addEventListener(
    "transitionend",
    () => {
      dropdown.style.willChange = "auto";
    },
    { once: true }
  );
}

function setDropdownBtnStateNotActive(dropdownBtn) {
  dropdownBtn.classList.remove("active");
  // set aria-expanded to false to notify screen-readers of dropdown state
  dropdownBtn.setAttribute("aria-expanded", false);
}
