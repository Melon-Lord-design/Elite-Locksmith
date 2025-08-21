// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Select all service cards
  const serviceCards = document.querySelectorAll(".service-card");

  // Create an IntersectionObserver to watch when elements appear in view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the "visible" class when the card is in view
        entry.target.classList.add("visible");

        // Once visible, stop observing (optional, for performance)
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 }); // trigger when 20% of the card is visible

  // Tell the observer to watch each service card
  serviceCards.forEach(card => {
    observer.observe(card);
  });
});
