export interface QuizType {
  _id?: string;
  slug?: string;
  title: string;
  password: string;
  questions?: Question[];
  totalQuestions?: number;
  __v?: number;
}
export interface SaveQuizType {
  slug?: string;
  title: string;
  password: string;
  questions?: Question[];
}
export interface Question {
  _id: string;
  question: string;
  answers: Answer;
}
export interface Answer {
  A: Option;
  B: Option;
  C: Option;
  D: Option;
}
export interface Option {
  answer: string;
  isCorrect: boolean;
}
