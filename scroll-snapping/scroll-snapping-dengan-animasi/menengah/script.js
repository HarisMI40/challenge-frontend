document.addEventListener("DOMContentLoaded", function () {
  const texts = document.querySelectorAll(".animated-text");

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && //memeriksa apakah nilai bottom dari DOMRect elemen tersebut kurang dari atau sama dengan tinggi dari viewport.
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    texts.forEach((text) => {
      if (isElementInViewport(text)) {
        text.classList.add("visible");
      }
    });
  }

  // Listen for scroll events
  window.addEventListener("scroll", handleScroll);

  // Trigger the check on page load
  handleScroll();
});
