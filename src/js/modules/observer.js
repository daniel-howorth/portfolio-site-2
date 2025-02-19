/* 
Using an IntersectionObserver to observe when elements are intersecting the viewport (are in view).
When an observed element is in view, add the in-view class.
Stop observing once the element is in view.
*/
document.addEventListener("DOMContentLoaded", function () {
  // const observer = new IntersectionObserver(
  //   (entries, observer) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         const el = entry.target;

  //         // add will-change just before animation
  //         const willChange = el.dataset.willChange;
  //         if (willChange) {
  //           el.style.willChange = willChange;
  //         }

  //         entry.target.classList.add("in-view");

  //         // reset will-change after animation and remove listener
  //         if (willChange) {
  //           el.addEventListener(
  //             "transitionend",
  //             function handleTransitionEnd() {
  //               el.style.willChange = "auto";
  //               el.removeEventListener("transitionend", handleTransitionEnd);
  //             }
  //           );
  //         }

  //         observer.unobserve(entry.target);
  //       }
  //     });
  //   },
  //   { threshold: 0.1 }
  // );

  let initialScrollY = window.scrollY;
  const initialFadeUpElements = document.querySelectorAll(".fade-up");

  // If elements start at or above the intial scroll point, remove fade up animation.
  initialFadeUpElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const elementBottom = rect.bottom + window.scrollY;
    if (initialScrollY >= elementBottom) {
      el.classList.remove("fade-up");
    }
  });

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
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

  // Observe jump elements
  const jumpElements = document.querySelectorAll(".jump");
  jumpElements.forEach((element) => {
    observer.observe(element);
  });
});
