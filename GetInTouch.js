

document.addEventListener('DOMContentLoaded', () => {
  // Initialize EmailJS
  emailjs.init('service_vim0e4o'); // Replace with your EmailJS user ID

  // Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

    const form = event.target;

      // Send the email using EmailJS
    emailjs.send("service_vim0e4o","template_72jgt8c")
        .then(function(response) {
    alert('Your message has been sent successfully!');
              form.reset(); // Reset the form
    }, function(error) {
    alert('There was an error sending your message. Please try again later.');
        console.error('EmailJS error:', error);
        });
});

  // Initialize Google Maps
function initMap() {
      const location = { lat: -34.397, lng: 150.644 }; // Replace with your location
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: location
    });
    new google.maps.Marker({
        position: location,
        map: map
    });
}

const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
script.async = true;
document.head.appendChild(script);
});
