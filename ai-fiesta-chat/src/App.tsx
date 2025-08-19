import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import { AIModel } from './types';

const aiModels: AIModel[] = [
  { id: 'chatgpt', name: 'ChatGPT 5', isActive: false },
  { id: 'gemini', name: 'Gemini 2.5 Pro', isActive: false },
  { id: 'deepseek', name: 'DeepSeek', isActive: false },
  { id: 'perplexity', name: 'Perplexity Sonar Pro', isActive: false },
  { id: 'claude', name: 'Claude Sonnet 4', isActive: true }
];

function App() {
  const [selectedModel, setSelectedModel] = useState<string>('claude');
  const [models, setModels] = useState<AIModel[]>(aiModels);

  const handleModelSelect = (modelId: string) => {
    setSelectedModel(modelId);
    setModels(prev => prev.map(model => ({
      ...model,
      isActive: model.id === modelId
    })));
  };

  const selectedModelData = models.find(model => model.id === selectedModel);

  return (
    <div className="App">
      <div className="app-container">
        <Sidebar 
          models={models}
          onModelSelect={handleModelSelect}
          selectedModel={selectedModel}
        />
        <ChatInterface 
          selectedModel={selectedModelData}
        />
      </div>
    </div>
  );
}

export default App;