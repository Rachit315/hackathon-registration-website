// Animate language cards on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated', 'animate__fadeInUp');
    }
  });
}, { threshold: 0.1 });

const languageCards = document.querySelectorAll('.pro');
languageCards.forEach(card => {
  observer.observe(card);
});

// Check if email input is empty
const gmail = document.getElementById("mail");
const submitButton = document.getElementById("submit"); // Assuming you have a submit button

submitButton.addEventListener("click", (event) => {
  if (!gmail.value) { // Check if the input is empty
    alert("Please enter your email");
    event.preventDefault(); // Prevent the form submission
    
  }
});
