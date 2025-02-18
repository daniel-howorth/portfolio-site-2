import { sendMessage } from "../modules/contact";

const contactForms = document.querySelectorAll(".contact-form");

if (contactForms.length >= 1) {
  contactForms.forEach((contactForm) =>
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      sendMessage(e.target);
    })
  );
} else {
  console.log("No contact forms found.");
}
