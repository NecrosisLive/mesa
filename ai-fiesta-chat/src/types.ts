export interface AIModel {
  id: string;
  name: string;
  isActive: boolean;
}

export interface ChatMessage {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export interface ChatSession {
  id: string;
  title: string;
  messages: ChatMessage[];
  lastActivity: Date;
}