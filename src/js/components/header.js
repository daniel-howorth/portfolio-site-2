import Dropdown from "../modules/dropdown.js";

const homeBtn = document.querySelector("#home-btn");
const headerMenuBtn = document.querySelector("#header-menu-btn");
const headerDropdownMenu = document.querySelector(".dropdown-menu");
const headerDropdownMenuNavLinks = document.querySelectorAll(
  "#header-dropdown-menu nav.dropdown-nav li"
);

headerMenuBtn.addEventListener("click", () =>
  Dropdown.handleDropdownBtnClick(headerMenuBtn, headerDropdownMenu)
);
headerDropdownMenuNavLinks.forEach((navLink) =>
  navLink.addEventListener("click", () =>
    Dropdown.handleCloseDropdown(headerMenuBtn, headerDropdownMenu)
  )
);
homeBtn.addEventListener("click", () =>
  Dropdown.handleCloseDropdown(headerMenuBtn, headerDropdownMenu)
);
