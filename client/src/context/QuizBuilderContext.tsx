import React, { useState } from 'react';

import axios from 'axios';

import { useAlert } from './AlertContext';
import { useAuth } from './AuthContext';

interface QuizContextType {
  questions: QuestionType[]; // Replace 'any' with the type of your quiz data
  setQuestions: React.Dispatch<React.SetStateAction<QuestionType[]>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  saveQuiz: () => void;
  addQuestions: () => void;
  updateQuestion: (
    index: number,
    field: "question" | "isCorrect" | "answers",
    value: string | boolean,
    answerId?: string
  ) => void;
  deleteQuestion: (index: number) => void;
}

const QuizContext = React.createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { getTokenBearer } = useAuth();
  const { addAlert } = useAlert();
  const [questions, setQuestions] = useState<QuestionType[] | []>([]);

  const [title, setTitle] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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

  // const addQuestionsFromAi = () => {
    
  //   const data = fetch();

  //   setQuestions([
  //     ...questions,
  //     {
  //       response
  //   ]);
  // };

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

  const getSlug = (title: string) => title.toLowerCase().replace(/\s/g, "-");

  const saveQuiz = () => {
    const payload = {
      title: title,
      slug: getSlug(title),
      password: password,
      questions: questions,
      totalQuestions: questions.length,
    };

    axios
      .post(`${import.meta.env.VITE_API_URL}/quiz`, payload, {
        headers: {
          Authorization: getTokenBearer(),
        },
      })
      .then((response) => {
        console.log(response.data);
        addAlert("Quiz is succesvol opgeslagen", "success");
      })
      .catch((error) => {
        console.error("Error:", error);
        addAlert("Er is iets misgegaan", "error");
        if (error.response.data.message === "All fields are required") {
          addAlert("Vul alle velden in", "error");
        }
        if (
          error.response.data.message ===
          "Quiz with title, slug or password already exists"
        ) {
          addAlert("Quiz met deze titel en dit wachtwoord bestaat al", "error");
        }
      });
  };

  const deleteQuestion = (index: number) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        setQuestions,
        addQuestions,
        updateQuestion,
        saveQuiz,
        setTitle,
        setPassword,
        deleteQuestion,
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
