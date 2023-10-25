emailjs.init('YOUR_USER_ID');

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(event.target);

  // Prepare email parameters
  const emailParams = {
    to_name: formData.get('fullName'),
    from_name: formData.get('email'),
    message: formData.get('message'),
  };

  // Send email using EmailJS service
  emailjs
    .send('YOUR_EMAIL_SERVICE_ID', 'YOUR_EMAIL_TEMPLATE_ID', emailParams)
    .then(
      function (response) {
        console.log('Email sent successfully:', response);
        // You can redirect the user to a success page or show a success message here
      },
      function (error) {
        console.error('Email failed to send:', error);
        // Handle email sending failure (e.g., show an error message to the user)
      }
    );
});
