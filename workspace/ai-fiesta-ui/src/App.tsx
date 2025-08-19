import { useState } from 'react'
import './fiesta.css'

const MODEL_NAMES = [
  'ChatGPT 5',
  'Gemini 2.5 Pro',
  'DeepSeek',
  'Perplexity Sonar Pro',
  'Claude Sonnet 4.1',
  'Llama 3.1 405B',
  'Mistral Large'
]

function App() {
  const [activeModel, setActiveModel] = useState<string>(MODEL_NAMES[0])
  const [message, setMessage] = useState<string>('')

  return (
    <div className="fiesta-app">
      <aside className="sidebar">
        <div className="brand">AI Fiesta</div>
        <button className="new-chat-btn">+ New Chat</button>

        <div className="sidebar-section">
          <div className="section-title">Projects</div>
          <div className="placeholder">No projects yet</div>
        </div>

        <div className="spacer" />

        <div className="plan-card">
          <div className="plan-name">Free Plan</div>
          <div className="plan-usage">2 / 3 messages used</div>
          <button className="upgrade-btn">Upgrade Plan</button>
        </div>

        <button className="settings-btn">Settings</button>
      </aside>

      <main className="main">
        <header className="model-tabs" role="tablist" aria-label="Models">
          {MODEL_NAMES.map((modelName) => (
            <button
              key={modelName}
              role="tab"
              aria-selected={activeModel === modelName}
              className={
                'model-tab' + (activeModel === modelName ? ' is-active' : '')
              }
              onClick={() => setActiveModel(modelName)}
            >
              {modelName}
            </button>
          ))}
        </header>

        <section className="chat-window" aria-label="Chat window">
          <div className="empty-state">
            <div className="empty-title">Ask me anything…</div>
            <div className="empty-subtitle">
              You are chatting with <strong>{activeModel}</strong>
            </div>
          </div>
        </section>

        <footer className="composer" aria-label="Message composer">
          <input
            className="prompt-input"
            placeholder="Ask me anything..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="composer-actions">
            <button className="secondary-btn">Generate Image</button>
            <button className="secondary-btn">Upload Image</button>
            <button className="send-btn" disabled={!message.trim()}>
              Send
            </button>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
