document.addEventListener('DOMContentLoaded', function () {
  const subscrBtn = document.querySelector('button[type="submit"]');
  const successMessage = document.getElementById('success');
  const signupForm = document.getElementById('signup');
  const emailInput = document.getElementById('email');
  const invalidLabel = document.querySelector('.invalid-label');

  // Function to validate email format
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Function to handle form submission
  subscrBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // Check if email is valid
    const isValidEmail = validateEmail(emailInput.value.trim());

    if (!isValidEmail) {
      emailInput.classList.add('invalid');
      invalidLabel.style.display = 'block';
    } else {
      emailInput.classList.remove('invalid');
      invalidLabel.style.display = 'none';
      signupForm.style.display = 'none';
      successMessage.style.display = 'flex';
    }
  });

  // Dismiss button event listener
  const dismissBtn = document.querySelector('.success__card__btn');
  dismissBtn.addEventListener('click', function () {
    successMessage.style.display = 'none';
    signupForm.style.display = 'flex';
  });
});
