
export enum ContentType {
  PARAGRAPH = 'PARAGRAPH',
  LIST = 'LIST',
  ORDERED_LIST = 'ORDERED_LIST',
  TABLE = 'TABLE',
  IMAGE = 'IMAGE',
  INFO_BOX = 'INFO_BOX',
  CHART_PIE = 'CHART_PIE',
  CHART_BAR = 'CHART_BAR',
}

export interface TableRow {
  [key: string]: string | number;
}

export interface ContentBlock {
  type: ContentType;
  title?: string;
  text?: string;
  items?: string[];
  tableHeaders?: string[];
  tableData?: TableRow[];
  imageUrl?: string;
  imageCaption?: string;
  chartData?: any[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
  explanation: string;
}

export interface Section {
  id: string;
  title: string;
  icon?: string;
  content: ContentBlock[];
  quiz?: QuizQuestion[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}
