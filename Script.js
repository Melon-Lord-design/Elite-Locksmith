// Scroll to contact
function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Dynamic Year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('formMessage');

  if (!name || !email || !message) {
    feedback.textContent = "Please fill in all fields.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = "Thank you! We'll get back to you soon.";
  feedback.style.color = "limegreen";
  this.reset();
});
