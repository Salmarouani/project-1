// Handling the feedback submission and new session redirection

document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting and reloading the page

    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    // Show a message or alert with feedback (you can later save it or send it to a server)
    alert(`Thank you for your feedback! You rated the session: ${rating}/5.\nComments: ${comments}`);

    // Optionally, you can clear the form after submission
    document.getElementById('feedback-form').reset();
});

// Redirect to the landing page to start a new session
document.getElementById('new-session-button').addEventListener('click', function() {
    window.location.href = 'landing-page.html'; // Redirect to the landing page or wherever you want
});
