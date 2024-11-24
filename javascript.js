// script.js

document.getElementById('send-btn').addEventListener('click', function () {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return; // Don't send empty messages
  
    addUserMessage(userInput);
    document.getElementById('user-input').value = ''; // Clear input
  
    setTimeout(() => {
      const botReply = generateBotResponse(userInput);
      addBotMessage(botReply);
    }, 1000); // Delay for bot response
  });
  
  // Function to add user message to the chat box
  function addUserMessage(message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', 'user-message');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
  }
  
  // Function to add bot message to the chat box
  function addBotMessage(message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', 'bot-message');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
  }
  
  // Basic function to generate bot responses based on user input
  function generateBotResponse(input) {
    const lowerCaseInput = input.toLowerCase();
    if (lowerCaseInput.includes('hello') || lowerCaseInput.includes('hi')) {
      return 'Hi! How can I help you today?';
    } else if (lowerCaseInput.includes('how are you')) {
      return 'I\'m just a bot, but I\'m doing great! How can I assist you?';
    } else if (lowerCaseInput.includes('bye')) {
      return 'Goodbye! Have a great day!';
    } else {
      return 'I\'m sorry, I didn\'t understand that.';
    }
  }

  