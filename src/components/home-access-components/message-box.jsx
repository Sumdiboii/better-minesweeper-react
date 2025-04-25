import React from 'react';
import './message-box.css';

const MessageBox = () => {
  return (
    <div className="message-container">
      
      <textarea placeholder="Type your message here..."></textarea>
      <button>Send</button>
    </div>
  );
};

export default MessageBox;
