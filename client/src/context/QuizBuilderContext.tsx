import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import { useAlert } from "./AlertContext";
import { useAuth } from "./AuthContext";
import { Question } from "../types/QuizType";

interface QuizContextType {
  questions: Question[]; // Replace 'any' with the type of your quiz data
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  updateQuiz: () => void;
  saveQuiz: () => void;
  addQuestions: () => void;
  addQuestionsFromAi: (topic: string) => void;
  updateQuestion: (
    index: number,
    field: "question" | "isCorrect" | "answers",
    value: string | boolean,
    answerId?: string
  ) => void;
  deleteQuestion: (resourceId: string) => void;
}

const QuizContext = React.createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // location is needed to get the previous state of the quiz, so we can edit it
  const location = useLocation();
  const previous = location.state;

  const { getTokenBearer } = useAuth();
  const { addAlert } = useAlert();

  // If there is a previous state, use the questions from that state, also needed for editing
  const initialQuestions: Question[] | [] = previous?.quiz?.questions || [];
  const initialTitle: string = previous?.quiz?.title || "";
  const initialPassword: string = previous?.quiz?.password || "";

  // Needed to get the previous state of the quiz, so we can edit it
  const [questions, setQuestions] = useState(initialQuestions);

  const [title, setTitle] = useState(initialTitle);

  const [password, setPassword] = useState<string>(initialPassword);

  const navigate = useNavigate();

  const addQuestions = () => {
    setQuestions([
      ...questions,
      {
        _id: uuidv4(), // creates a unique id, so we can delete the question, and don't get issues with order
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

  const addQuestionsFromAi = (topic: string) => {
    if (!topic) {
      addAlert(
        "Selecteer een onderwerp voordat je een vraag genereert",
        "error"
      );
      return;
    }

    axios
      .post(`${import.meta.env.VITE_API_URL}/quiz/generate`, {
        topic,
      })
      .then((response) => {
        console.log("Success:", response.data.response);
        const newQuestion = response.data.response;
        const apiMessage = response.data.message;

        // Add unique ID to the new question
        const questionWithId = {
          _id: uuidv4(),
          ...newQuestion,
        };
        
        setQuestions((prevQuestions) => [...prevQuestions, questionWithId]);
        addAlert(`${apiMessage}`, "success");
      })
      .catch((error) => {
        console.error("Error:", error);
        addAlert("Er is iets misgegaan", "error");
      });
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
        navigate(`/quiz`);
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

  const updateQuiz = () => {
    const payload = {
      title: title,
      slug: getSlug(title),
      password: password,
      questions: questions,
      totalQuestions: questions.length,
    };

    console.log("current payload", payload);

    axios
      .put(
        `${import.meta.env.VITE_API_URL}/quiz/${previous.quiz._id}`,
        payload,
        {
          headers: {
            Authorization: getTokenBearer(),
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        addAlert("Quiz is succesvol gewijzigd", "success");
        navigate(`/quiz`);
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

  const deleteQuestion = (resourceId: string) => {
    const updatedQuestions = questions.filter(
      (question) => question._id !== resourceId
    );
    setQuestions(updatedQuestions);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        setQuestions,
        addQuestions,
        addQuestionsFromAi,
        updateQuestion,
        updateQuiz,
        saveQuiz,
        title,
        setTitle,
        password,
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
