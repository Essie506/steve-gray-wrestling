const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

const revealElements = document.querySelectorAll(
  '#MainContent > .shopify-section, #MainContent .group-block'
);

if (prefersReducedMotion) {
  revealElements.forEach((element) => {
    element.classList.add('scroll-reveal-visible');
  });
} else {
  const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-reveal-visible');
      } else {
        entry.target.classList.remove('scroll-reveal-visible');
      }
    });
  },
  {
    threshold: 0.01,
    rootMargin: '0px',
  }
);

  revealElements.forEach((element, index) => {
    if (index === 0) {
      element.classList.add('scroll-reveal-visible');
      return;
    }

    element.classList.add('scroll-reveal');
    observer.observe(element);
  });
}