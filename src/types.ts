
export interface Skill {
  name: string;
  level: 'Expert' | 'Intermediate' | 'Entry';
  percentage: number;
  category: 'Cloud' | 'Frontend' | 'Backend' | 'DevOps';
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  isCloud?: boolean;
}

// Added ChatMessage interface to resolve import error in components/AIChat.tsx
export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export interface CandidateInfo {
  name: string;
  previousRole: string;
  currentRole: string;
  skills: string[];
  learning: string[];
  summary: string;
}