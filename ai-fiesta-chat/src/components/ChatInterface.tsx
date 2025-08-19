import React, { useState } from 'react';
import { Send, Paperclip, Mic } from 'lucide-react';
import { AIModel } from '../types';

interface ChatInterfaceProps {
  selectedModel?: AIModel;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ selectedModel }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chat-interface">
      <div className="chat-header">
        <div className="model-info">
          {selectedModel && (
            <>
              <div className="model-indicator">
                <div className={`model-dot ${selectedModel.isActive ? 'active' : ''}`} />
                <span className="model-name">{selectedModel.name}</span>
              </div>
              <div className="model-toggle">
                <label className="toggle-switch">
                  <input type="checkbox" checked={selectedModel.isActive} readOnly />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="chat-content">
        <div className="empty-state">
          <div className="welcome-message">
            <h2>Welcome to AI Fiesta</h2>
            <p>Select an AI model and start chatting!</p>
          </div>
        </div>
      </div>

      <div className="chat-input-section">
        <div className="input-container">
          <div className="input-wrapper">
            <button className="attach-btn" title="Upload Image">
              <Paperclip size={20} />
            </button>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              className="chat-input"
              rows={1}
            />
            <button className="voice-btn" title="Voice Input">
              <Mic size={20} />
            </button>
            <button 
              className="send-btn" 
              onClick={handleSendMessage}
              disabled={!message.trim()}
              title="Send Message"
            >
              <Send size={20} />
            </button>
          </div>
          <div className="input-actions">
            <button className="action-btn">Generate Image</button>
            <button className="action-btn">Upload Image</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;