import React, { useState } from "react";

interface QuizContextType {
  questions: QuestionType[]; // Replace 'any' with the type of your quiz data
  setQuestions: React.Dispatch<React.SetStateAction<QuestionType[]>>;
  saveQuiz: () => void;
  addQuestions: () => void;
  updateQuestion: (
    index: number,
    field: "question" | "isCorrect" | "answers",
    value: string | boolean,
    answerId?: string
  ) => void;
}

const QuizContext = React.createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [questions, setQuestions] = useState<QuestionType[] | []>([]);

  const addQuestions = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        answers: [
          { _id: "A", answer: "", isCorrect: true },
          { _id: "B", answer: "", isCorrect: false },
          { _id: "C", answer: "", isCorrect: false },
          { _id: "D", answer: "", isCorrect: false },
        ],
      },
    ]);
  };

  const updateQuestion = (
    index: number,
    field: "question" | "isCorrect" | "answers",
    value: string | boolean,
    answerId?: string
  ) => {
    const updatedQuestions = questions.map((question, i) => {
      if (i === index) {
        switch (field) {
          case "question":
            // Update the question text
            return { ...question, question: value as string };

          case "answers":
            // Update the text of a specific answer
            return {
              ...question,
              answers: question.answers.map((answer) => {
                if (answer._id === answerId) {
                  return { ...answer, answer: value as string };
                }
                return answer;
              }),
            };

          case "isCorrect":
            // Toggle the correctness of a specific answer
            return {
              ...question,
              answers: question.answers.map((answer) => {
                if (answer._id === answerId) {
                  return { ...answer, isCorrect: true };
                } else {
                  return { ...answer, isCorrect: false };
                }
              }),
            };

          default:
            // In case an unknown field is used
            return question;
        }
      }
      return question;
    });
    setQuestions(updatedQuestions);
  };

  const saveQuiz = () => {
    // Implement your logic to submit the quiz
    const quizData = questions;
    console.log("Quiz data to be saved: ", quizData);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        setQuestions,
        addQuestions,
        updateQuestion,
        saveQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizBuilder = () => {
  const context = React.useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
// THESE INTERFACES ARE FOR THE QUESTIONS THAT ARE BEING CREATED TO SEND TO THE API
// THAT IS WHY THE QUESTIONTYPE DOESN'T HAVE A _ID

export type QuestionType = {
  question: string;
  answers: AnswerType[];
};
export type AnswerType = {
  answer: string;
  isCorrect: boolean;
  _id: string;
};
