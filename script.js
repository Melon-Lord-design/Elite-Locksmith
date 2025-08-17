// Scroll to contact
function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Dynamic Year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form handler
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // stop default submission

  const formData = new FormData(form);

  feedback.textContent = "Sending...";
  feedback.style.color = "white";

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      feedback.textContent = "Thank you! We'll get back to you soon.";
      feedback.style.color = "limegreen";
      form.reset();
    } else {
      response.json().then(data => {
        if (data.errors) {
          feedback.textContent = data.errors.map(err => err.message).join(", ");
        } else {
          feedback.textContent = "Oops! There was a problem submitting your form.";
        }
        feedback.style.color = "red";
      });
    }
  })
  .catch(() => {
    feedback.textContent = "Network error. Please try again later.";
    feedback.style.color = "red";
  });
});
