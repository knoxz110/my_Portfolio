
import { Skill, ExperienceItem } from './types';

export const SKILLS: Skill[] = [
  { name: 'HTML5', level: 'Expert', percentage: 95, category: 'Frontend' },
  { name: 'CSS3', level: 'Expert', percentage: 95, category: 'Frontend' },
  { name: 'React', level: 'Intermediate', percentage: 75, category: 'Frontend' },
  { name: 'TypeScript', level: 'Intermediate', percentage: 70, category: 'Frontend' },
  { name: 'AWS (EC2)', level: 'Intermediate', percentage: 70, category: 'Cloud' },
  { name: 'Linux CLI', level: 'Intermediate', percentage: 80, category: 'DevOps' },
  { name: 'Docker', level: 'Intermediate', percentage: 75, category: 'DevOps' },
  { name: 'CI/CD Pipeline', level: 'Intermediate', percentage: 70, category: 'DevOps' },
  { name: 'Git', level: 'Intermediate', percentage: 85, category: 'DevOps' },
  { name: 'Bash', level: 'Intermediate', percentage: 75, category: 'DevOps' },
  { name: 'MongoDB', level: 'Intermediate', percentage: 65, category: 'Backend' },
  { name: 'Python', level: 'Entry', percentage: 40, category: 'Backend' },
  { name: 'Kubernetes', level: 'Entry', percentage: 35, category: 'DevOps' },
  { name: 'Networking', level: 'Entry', percentage: 45, category: 'Cloud' },
  { name: 'Terraform', level: 'Entry', percentage: 30, category: 'Cloud' },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: 'Cloud Engineer Intern',
    company: 'Gallery of Code',
    period: '2025 - Present',
    isCloud: true,
    description: [
      'Managing AWS EC2 instances and optimizing cloud infrastructure costs.',
      'Implementing Dockerized environments for dev teams.',
      'Maintaining automated CI/CD pipelines for production deployments.',
      'Providing 24/7 on-call support for critical Linux-based infrastructure.'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Gallery of Code',
    period: '2021 - 2024',
    isCloud: false,
    description: [
      'Developed high-performance web applications using React and TypeScript.',
      'Led the migration of legacy CSS to modern responsive frameworks.',
      'Collaborated with cross-functional teams to deliver scalable MongoDB solutions.',
      'Mentored junior developers in Git workflows and code quality standards.'
    ]
  }
];

import { CandidateInfo } from './types';

export const CANDIDATE_DATA: CandidateInfo = {
  name: "Ehijie Pleasant",
  previousRole: "Software Developer (3+ Years)",
  currentRole: "Junior Cloud Engineer (1 Year)",
  skills: [
    "HTML5/CSS3",
    "React",
    "TypeScript",
    "MongoDB",
    "AWS EC2",
    "Linux/Bash",
    "Docker",
    "CI/CD Pipelines"
  ],
  learning: [
    "Python",
    "Kubernetes",
    "Networking",
    "Terraform"
  ],
  summary: "Transitioning from full-stack development to Cloud/DevOps with a strong foundation in building scalable applications and managing infrastructure."
};

export const COLORS = {
  primary: '#00302E', // Deep Emerald
  accent: '#D4AF37',  // Elegant Gold
  bg: '#F8FAFC'      // Slate 50
};
