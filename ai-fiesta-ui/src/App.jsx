import React from 'react';
import Sidebar from './components/Sidebar';
import ChatTabs from './components/ChatTabs';
import ChatWindow from './components/ChatWindow';

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-area">
        <ChatTabs />
        <ChatWindow />
      </main>
    </div>
  );
};

export default App;