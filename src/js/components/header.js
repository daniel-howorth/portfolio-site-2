import Dropdown from "../modules/dropdown.js";
import { elementsExist } from "../modules/helpers.js";

const headerMenuBtn = document.querySelector("#header-menu-btn");
const headerDropdownMenu = document.querySelector(".dropdown-menu");

const closeDropdownElements = document.querySelectorAll(
  ".closeDropdownOnClick"
);

if (elementsExist(headerMenuBtn, headerDropdownMenu)) {
  headerMenuBtn.addEventListener("click", () => {
    Dropdown.handleDropdownBtnClick(headerMenuBtn, headerDropdownMenu);
  });

  closeDropdownElements.forEach((element) => {
    element.addEventListener("click", () => {
      Dropdown.handleCloseDropdown(headerMenuBtn, headerDropdownMenu);
    });
  });
}
