// Select the form and input
const form = document.getElementById('user-form');
const usernameInput = document.getElementById('username');

// Add event listener for form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form behavior

    const username = usernameInput.value.trim(); // Get trimmed input value

    if (username === '') {
        alert('Please enter your name!');
    } else {
        // Save username to localStorage
        localStorage.setItem('username', username);

        // Redirect to the to-do list page (or tasks page if necessary)
        window.location.href = 'tasks.html';
    }
});
