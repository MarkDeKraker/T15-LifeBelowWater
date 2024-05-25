export interface QuizType {
  _id: string;
  _slug: string;
  title: string;
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
