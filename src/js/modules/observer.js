/* 
Using an IntersectionObserver to observe when elements are intersecting the viewport (are in view).
When an observed element is in view, add the in-view class.
Stop observing once the element is in view.
*/
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;

          // add will-change just before animation
          const willChangeProps = el.dataset.willChange;
          if (willChangeProps) {
            el.style.willChange = willChangeProps;
          }

          entry.target.classList.add("in-view");

          // reset will-change after animation and remove listener
          el.addEventListener("transitionend", function handleTransitionEnd() {
            el.style.willChange = "auto";
            el.removeEventListener("transitionend", handleTransitionEnd);
          });

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe fade-up elements.
  const fadeUpElements = document.querySelectorAll(".fade-up");
  fadeUpElements.forEach((element) => {
    observer.observe(element);
  });
});
