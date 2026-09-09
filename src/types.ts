export interface CodeFile {
  name: string;
  language: string;
  code: string;
  runtime: string;
}

export interface EducationItem {
  type: string;
  duration?: string;
  title: string;
  field: string;
  institution: string;
  isCurrentlyPursuing?: boolean;
  coursework?: string[];
  standing?: {
    label: string;
    description: string;
  };
}

export interface SkillCardData {
  badgeText: string;
  iconAbbr: string;
  title: string;
  description: string;
  items: string[];
  proficiency: string;
  accentColor: string;
}

export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  primaryAction: {
    label: string;
    type: 'preview' | 'specs' | 'docs';
  };
  githubUrl: string;
  details?: {
    overview: string;
    highlights: string[];
    codeSnippet?: string;
    architectureNotes?: string;
  };
}

export interface StrengthItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ToastMessage {
  id: string;
  text: string;
  type?: 'success' | 'info' | 'error';
}
