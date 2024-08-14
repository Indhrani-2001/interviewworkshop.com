document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const submittedMessage = document.getElementById('submitted-message');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Collect form data
        const formData = new FormData(form);
        
        // Convert form data to JSON
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // Send data to Google Script
        fetch('https://script.google.com/macros/s/AKfycbxPiU_LnNbvsrgdcVq9Tb0-EYjuAyKsMxnoLT_R0ChESye1bmf8zbCV5f8InB_QbvyK/exec', {
            method: 'POST',
            body: new URLSearchParams(data)
        })
        .then(response => {
            if (response.ok) {
                // Show success message
                submittedMessage.style.display = 'block';
                
                // Redirect to main.html in the HTML folder after a short delay
                setTimeout(() => {
                    window.location.href = 'HTML/main.html';
                }, 2000); // Adjust the delay as needed
            } else {
                alert('Failed to submit the form.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred.');
        });
    });
});
