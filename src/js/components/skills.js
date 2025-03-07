const skills = document.querySelectorAll(".skill");

skills.forEach((skill) => {
  skill.addEventListener("pointerdown", function () {
    this.classList.toggle("flipped");
  });

  skill.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      this.classList.toggle("flipped");
    }
  });
});
