const skills = document.querySelectorAll(".skill");

skills.forEach((skill) => {
  skill.addEventListener("pointerdown", function () {
    this.classList.toggle("flipped");
  });
});
