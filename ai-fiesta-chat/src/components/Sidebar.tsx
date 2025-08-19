import React from 'react';
import { Plus, Settings, Zap } from 'lucide-react';
import { AIModel } from '../types';

interface SidebarProps {
  models: AIModel[];
  onModelSelect: (modelId: string) => void;
  selectedModel: string;
}

const Sidebar: React.FC<SidebarProps> = ({ models, onModelSelect, selectedModel }) => {
  const getModelIcon = (modelId: string) => {
    switch (modelId) {
      case 'chatgpt':
        return '🤖';
      case 'gemini':
        return '💎';
      case 'deepseek':
        return '🔍';
      case 'perplexity':
        return '🌐';
      case 'claude':
        return '🧠';
      default:
        return '🤖';
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo-section">
          <Zap className="logo-icon" />
          <h1 className="app-title">AI Fiesta</h1>
        </div>
        <button className="new-chat-btn">
          <Plus size={16} />
          New Chat
        </button>
      </div>

      <div className="ai-models-section">
        <div className="model-tabs">
          {models.map((model) => (
            <button
              key={model.id}
              className={`model-tab ${model.isActive ? 'active' : ''}`}
              onClick={() => onModelSelect(model.id)}
            >
              <span className="model-icon">{getModelIcon(model.id)}</span>
              <span className="model-name">{model.name}</span>
              {model.isActive && <div className="active-indicator" />}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-section">
        <div className="section-header">
          <span className="section-title">Projects</span>
          <div className="project-count">1</div>
        </div>
      </div>

      <div className="today-section">
        <div className="section-title">Today</div>
        <div className="chat-item">
          <span className="chat-title">Hi which GPT are you ?</span>
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="plan-info">
          <div className="plan-badge">Free Plan</div>
          <div className="usage-info">2 / 3 messages used</div>
        </div>
        <button className="upgrade-btn">
          <Zap size={16} />
          Upgrade Plan
        </button>
        <button className="settings-btn">
          <Settings size={16} />
          Settings
        </button>
      </div>
    </div>
  );
};

export default Sidebar;