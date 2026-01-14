export type RankTier = 'unranked' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'master';

export interface Rank {
  tier: RankTier;
  name: string;
  minScore: number;
  color: string;
  icon: string;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Subtopic {
  id: string;
  name: string;
  chapterNumber: number;
  description: string;
  questions: Question[];
}

export interface Topic {
  id: string;
  name: string;
  category: string;
  description: string;
  subtopics: Subtopic[];
  // Kept for backward compatibility - flatten all subtopic questions
  questions?: Question[];
}

export interface UserProgress {
  topicId: string;
  currentRank: RankTier;
  bestScore: number;
  attempts: number;
  lastAttempt?: Date;
}

export interface QuizResult {
  score: number;
  total: number;
  passed: boolean;
  newRank?: RankTier;
  answers: {
    questionId: string;
    selectedAnswer: number;
    correct: boolean;
  }[];
}