export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface City {
  name: string;
  zip: string;
  region: string;
  neighborhoods?: string[];
  agentName?: string;
  localDescription?: string;  // 🔥 NOUVEAU
  avgResponseTime?: string;   // 🔥 NOUVEAU
}

export enum ChatSender {
  USER = 'user',
  BOT = 'bot'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: ChatSender;
  timestamp: Date;
}