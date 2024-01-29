document.addEventListener("DOMContentLoaded", function () {
  const animatedText = document.getElementById("animatedText");

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    if (isElementInViewport(animatedText)) {
      animatedText.classList.add("visible");
    }
  }

  // Listen for scroll events
  window.addEventListener("scroll", handleScroll);

  // Trigger the check on page load
  handleScroll();
});
