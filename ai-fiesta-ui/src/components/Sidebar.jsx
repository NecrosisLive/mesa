import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h1 className="logo">AI Fiesta</h1>
      <button className="new-chat-btn">+ New Chat</button>

      <section className="sidebar-section">
        <h2 className="section-title">Projects</h2>
        <button className="project-item">My Project</button>
      </section>

      <section className="sidebar-section">
        <h2 className="section-title">Recent Chats</h2>
        <ul className="chat-list">
          <li className="chat-item active">Hi which GPT are you ?</li>
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;