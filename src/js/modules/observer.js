/* 
Using an IntersectionObserver to observe when elements are intersecting the viewport (are in view).
When an observed element is in view, add the in-view class.
Stop observing once the element is in view.
*/
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const el = entry.target;

        el.classList.add("in-view");

        observer.unobserve(el);
      });
    },
    { threshold: 0.1 }
  );

  // Observe jump elements
  const jumpElements = document.querySelectorAll(".jump");
  jumpElements.forEach((element) => {
    observer.observe(element);
  });

  // Observe point left elements
  const pointLeftElements = document.querySelectorAll(".point-left");
  pointLeftElements.forEach((element) => {
    observer.observe(element);
  });
});
