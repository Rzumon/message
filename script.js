// Load messages from localStorage when the page loads
document.addEventListener('DOMContentLoaded', function () {
    loadMessages();
});

// Function to load messages from localStorage
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.forEach(message => {
        createMessageBox(message);
    });
}

// Handle form submission
document.getElementById('messageForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the message input
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value;

    // Save message to localStorage
    saveMessage(messageText);

    // Create a new message box
    createMessageBox(messageText);

    // Clear the input
    messageInput.value = '';
});

// Function to create and display a message box
function createMessageBox(messageText) {
    const messageBox = document.createElement('div');
    messageBox.classList.add('message-box');
    messageBox.textContent = messageText;

    // Add the message box to the message wall
    document.getElementById('messageWall').appendChild(messageBox);
}

// Function to save messages to localStorage
function saveMessage(messageText) {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(messageText);
    localStorage.setItem('messages', JSON.stringify(messages));
}
