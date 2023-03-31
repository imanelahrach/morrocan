const form = document.querySelector('.php-email-form');
const spinner = document.querySelector('.spinner-border');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  spinner.classList.remove('d-none');
  fetch('forms/sendmail.php', {
    method: 'POST',
    body: new FormData(form)
  })
  .then((response) => {
    if (response.ok) {
      // Display success message
      document.getElementById('alert-message').innerHTML = '<div class="alert alert-success">Email sent successfully</div>';
      setTimeout(() => {
        document.getElementById('alert-message').innerHTML = '';
    }, 1000);
      // Reset the form
      form.reset();
     
    } else {
      // Display error message
      document.getElementById('alert-message').innerHTML = '<div class="alert alert-danger">Error sending email</div>';
    }
  })
  .finally(() => {
    spinner.classList.add('d-none');
  })
  .catch((error) => {
    // Display error message
    document.getElementById('alert-message').innerHTML = '<div class="alert alert-danger">Error sending email</div>';
  
  });
});