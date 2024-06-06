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
export type Question = {
  question: string;
  answers: AnswerType[];
  id: string;
};

export type AnswerType = {
  answer: string;
  isCorrect: boolean;
  _id: string;
};
