// script.js

document.addEventListener("DOMContentLoaded", () => {
  // ---- Service Card Animation ----
  const serviceCards = document.querySelectorAll(".service-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // stop observing after visible
      }
    });
  }, { threshold: 0.2 });

  serviceCards.forEach((card) => {
    observer.observe(card);
  });

  // ---- Hamburger Menu ----
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");
  const navItems = navLinks.querySelectorAll("a");

  // Toggle menu and animate burger
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active"); // show/hide menu
    burger.classList.toggle("toggle");   // animate hamburger to X
  });

  // Close menu when clicking a nav link
  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      burger.classList.remove("toggle");
    });
  });
});

// ---- Request Assistance Button Scroll ----
function scrollToContact() {
  const contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
}