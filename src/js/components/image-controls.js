import { elementsExist } from "../modules/helpers.js";

const desktopImagesControl = document.querySelector(
  ".device-img-controls__control--desktop"
);

const mobileImagesControl = document.querySelector(
  ".device-img-controls__control--mobile"
);

const desktopProjectImages = document.querySelectorAll(
  ".project-image--desktop"
);

const mobileProjectImages = document.querySelectorAll(".project-image--mobile");

if (elementsExist(desktopImagesControl, mobileImagesControl)) {
  desktopImagesControl.addEventListener("click", () => {
    toggleProjectDeviceImages(desktopProjectImages, mobileProjectImages);
    toggleImageControlActiveState(desktopImagesControl, mobileImagesControl);
  });
  mobileImagesControl.addEventListener("click", () => {
    toggleProjectDeviceImages(desktopProjectImages, mobileProjectImages);
    toggleImageControlActiveState(desktopImagesControl, mobileImagesControl);
  });
}

function toggleProjectDeviceImages(desktopProjectImages, mobileProjectImages) {
  desktopProjectImages.forEach((image) => image.classList.toggle("u-hidden"));
  mobileProjectImages.forEach((image) => image.classList.toggle("u-hidden"));
}

function toggleImageControlActiveState(
  desktopImagesControl,
  mobileImagesControl
) {
  desktopImagesControl.classList.toggle("active");
  mobileImagesControl.classList.toggle("active");

  const desktopControlPressed =
    desktopImagesControl.getAttribute("aria-pressed") === "true"
      ? "false"
      : "true";

  const mobileControlPressed =
    mobileImagesControl.getAttribute("aria-pressed") === "true"
      ? "false"
      : "true";

  desktopImagesControl.setAttribute("aria-pressed", desktopControlPressed);
  mobileImagesControl.setAttribute("aria-pressed", mobileControlPressed);
}
