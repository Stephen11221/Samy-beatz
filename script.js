// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your user ID
    emailjs.init('YOUR_USER_ID'); // Replace with your EmailJS user ID

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            from_name: name,
            from_email: email,
            to_email: 'otienod228@gmail.com', // Recipient email address
            message: message
        }).then((response) => {
            document.getElementById('response-message').textContent = 'Email sent successfully!';
            document.getElementById('contact-form').reset(); // Reset the form fields
        }).catch((error) => {
            document.getElementById('response-message').textContent = 'Error sending email. Please try again.';
            console.error('Error sending email:', error);
        });
    });
});
