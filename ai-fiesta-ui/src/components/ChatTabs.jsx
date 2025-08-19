import React, { useState } from 'react';

const providers = [
  'ChatGPT 5',
  'Gemini 2.5 Pro',
  'DeepSeek',
  'Perplexity Sonar Pro',
  'Claude Sonnet 4',
];

const ChatTabs = () => {
  const [active, setActive] = useState(providers[0]);

  return (
    <nav className="chat-tabs">
      {providers.map((name) => (
        <button
          key={name}
          className={`tab-btn ${active === name ? 'active' : ''}`}
          onClick={() => setActive(name)}
        >
          {name}
        </button>
      ))}
    </nav>
  );
};

export default ChatTabs;