export interface QuizType {
  _id: string;
  slug: string;
  title: string;
  password: string;
  questions: Question[];
  totalQuestions: number;
}

export interface Question {
  id: string;
  question: string;
  answers: Answer[];
}

export interface Answer {
  A?: Option;
  B?: Option;
  C?: Option;
  D?: Option;
}

export interface Option {
  answer: string;
  isCorrect: boolean;
}
