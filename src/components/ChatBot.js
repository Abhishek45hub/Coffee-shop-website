import React, { useState } from 'react';
import { FaCommentDots } from 'react-icons/fa';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you today?' }
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');
      
      // Add basic chatbot responses
      setTimeout(() => {
        const responses = {
          'hello': 'Hello! How can I assist you?',
          'order': 'You can place an order by clicking the Order Now button on the homepage.',
          'coffee': 'We offer a variety of coffees including espresso, cappuccino, and latte.'
        };
        
        const userMessage = input.toLowerCase();
        const response = responses[userMessage] || 'Sorry, I didn\'t understand that. Could you please rephrase?';
        setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: response }]);
      }, 1000);
    }
  };

  return (
    <div className={`chatbot ${isOpen ? 'open' : ''}`}>
      <div className="chatbot-icon" onClick={toggleChat}>
        <FaCommentDots size={30} />
      </div>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input 
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
