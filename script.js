// Scroll to contact
function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Dynamic Year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form handler with Formspree
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = this;
  const feedback = document.getElementById('formMessage');
  const data = new FormData(form);

  feedback.textContent = "";
  feedback.style.color = "";

  fetch(form.action, {
    method: "POST",
    body: data,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      feedback.textContent = "Thank you! We'll get back to you soon.";
      feedback.style.color = "limegreen";
      form.reset();
    } else {
      response.json().then(data => {
        if (data.errors) {
          feedback.textContent = data.errors.map(error => error.message).join(", ");
        } else {
          feedback.textContent = "Oops! There was a problem submitting your form.";
        }
        feedback.style.color = "red";
      });
    }
  })
  .catch(error => {
    feedback.textContent = "Oops! There was a network error.";
    feedback.style.color = "red";
  });
});
