const navigationButtons = document.querySelectorAll(".nav-button");

navigationButtons.forEach((button) =>
  button.addEventListener("click", () => buttonNavigation(button))
);

function buttonNavigation(button) {
  const target = button.dataset.navTarget;
  window.location.href = target;
}
