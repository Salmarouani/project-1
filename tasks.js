// Retrieve user's name from localStorage and display it
const userName = localStorage.getItem('username');
document.getElementById('username').textContent = userName || 'Guest';

// Task-related elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const startSessionButton = document.getElementById('start-session');

// Array to store tasks
let tasks = [];

// Event listener for adding tasks
taskForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        // Add task to the array and display it
        tasks.push(taskText);
        displayTask(taskText);

        // Enable "Start Study Session" button
        startSessionButton.disabled = false;

        // Clear input field
        taskInput.value = '';

        // Save tasks to localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});

// Function to display a task in the list
function displayTask(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    // Add a delete button to each task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', () => {
        // Remove task from the list
        taskList.removeChild(li);
        tasks = tasks.filter(task => task !== taskText);

        // Update localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Disable button if no tasks remain
        if (tasks.length === 0) {
            startSessionButton.disabled = true;
        }
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
}

// Prepopulate tasks from localStorage (if any)
window.addEventListener('DOMContentLoaded', () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = savedTasks;
    tasks.forEach(displayTask);

    // Enable button if tasks exist
    if (tasks.length > 0) {
        startSessionButton.disabled = false;
    }
});

// Event listener for "Start Study Session" button
startSessionButton.addEventListener('click', () => {
    // Redirect to the timer page
    window.location.href = 'timer.html';
});
