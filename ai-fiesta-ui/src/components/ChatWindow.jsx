import React from 'react';

const ChatWindow = () => {
  return (
    <div className="chat-window">
      <div className="messages">
        {/* Messages will appear here */}
      </div>
      <div className="input-area">
        <input type="text" placeholder="Ask me anything..." />
        <button className="send-btn">Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;