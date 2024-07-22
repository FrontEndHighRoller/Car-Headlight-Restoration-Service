document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        postcode: document.getElementById("postcode").value,
        address: document.getElementById("address").value,
        car_type: document.getElementById("car-type").value,
        battery_position: document.querySelector('input[name="user_batteryPosition"]:checked').value,
        headlights_damage: document.querySelector('input[name="user_headlightsDamage"]:checked').value,
        note: document.getElementById("note").value
    };

    const serviceID = "service_qq8msub";
    const templateID = "template_yjhsro6";

    emailjs.send(serviceID, templateID, params)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            // Track conversion in GA4
            gtag('event', 'form_submission', {
                'event_category': 'Contact Form',
                'event_label': 'Request A Quote',
                'value': 1
            });

            alert("Your message was sent successfully!");
            document.getElementById('contact-form').reset(); // Clear the form
        })
        .catch(function(error) {
            console.error('FAILED...', error);
            alert("Failed to send your message. Please try again.");
        });
});
