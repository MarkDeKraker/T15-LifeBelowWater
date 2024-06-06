import { AnimatePresence, motion } from "framer-motion";

import { useAnimationContext } from "../../context/AnimationContext";
import { AnswerType, QuestionType } from "../../context/QuizBuilderContext";
import FormInput from "../form/FormInput";
import Container from "../Layout/Container";
import { StyledSubmitButton } from "../buttons/StyledSubmitButton";
import SaveIcon from "../icons/SaveIcon";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useAlert } from "../../context/AlertContext";
import axios from "axios";
import { StyledButton } from "../buttons/StyledButton";
import AddIcon from "../icons/AddIcon";

function QuizBuilderEdit() {
  const navigate = useNavigate();
  const { getTokenBearer } = useAuth();
  const { addAlert } = useAlert();

  const location = useLocation();
  const previous = location.state;

  const [questions, setQuestions] = useState<QuestionType[] | []>([]);

  if (questions.length === 0) {
    setQuestions(previous.quiz.questions);
  }

  const [editTitle, setTitle] = useState<string>(previous.quiz.title);
  const [password, setPassword] = useState<string>(previous.quiz.password);

  const { routeVariants } = useAnimationContext();

  const addQuestions = () => {
    setQuestions([
      ...questions,
      {
        id: crypto.randomUUID(), // creates a unique id, so we can delete the question, and don't get issues with order
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
    const payload = {
      title: editTitle,
      slug: getSlug(editTitle),
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

  const getSlug = (title: string) => title.toLowerCase().replace(/\s/g, "-");

  const deleteQuestion = (resourceId: string) => {
    const updatedQuestions = questions.filter(
      (question) => question.id !== resourceId
    );
    setQuestions(updatedQuestions);
  };

  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="mt-8"
    >
      <Container>
        <div className="p-5 border rounded-lg font-custom">
          <form className="flex flex-col space-y-4 quiz-fields">
            <FormInput
              type="text"
              name="title"
              placeholder="Voer titel in"
              defaultValue={previous.quiz.title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <FormInput
              type="text"
              name="password"
              placeholder="Wachtwoord"
              defaultValue={previous.quiz.password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </form>

          {/* Copied from <Questions/>, so It would not conflict*/}
          <AnimatePresence>
            {questions.map((question: QuestionType, index: number) => (
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.2 }}
                key={question.id}
                className="flex flex-col p-8 my-4 shadow rounded-custom bg-primary/5"
              >
                <FormInput
                  name="question"
                  type="text"
                  className={`block w-full`}
                  placeholder="Voer vraag in"
                  defaultValue={question.question}
                  onChange={(e) =>
                    updateQuestion(index, "question", e.target.value)
                  }
                />
                <div className="mt-6 mb-4 border border-1"></div>
                <Answers
                  items={question.answers}
                  updateQuestion={updateQuestion}
                  index={index}
                />

                <button
                  className="p-2 mt-4 text-white transition-all transform bg-red-300 hover:bg-red-500 rounded-custom w-fit duration-250"
                  onClick={() => deleteQuestion(question.id)}
                >
                  Verwijder vraag
                </button>
              </motion.div>
            ))}
          </AnimatePresence>

          <div className="flex justify-between">
            <StyledButton
              buttonStyle="tertiary"
              onClick={addQuestions}
              icon={<AddIcon />}
            >
              Voeg vraag toe
            </StyledButton>
            <StyledSubmitButton
              buttonStyle="tertiary"
              onClick={saveQuiz}
              className="self-end text-gray-800 border-0 hover:underline-offset-2"
              icon={<SaveIcon />}
            >
              Quiz Opslaan
            </StyledSubmitButton>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}

function Answers({
  items,
  index,
  updateQuestion,
}: {
  items: AnswerType[];
  index: number;
  updateQuestion: (
    index: number,
    field: "question" | "isCorrect" | "answers",
    value: string | boolean,
    answerId?: string
  ) => void;
}) {
  return (
    <>
      {items.map((answer) => {
        return (
          <div className="flex items-center justify-center " key={answer._id}>
            <FormInput
              name="answer"
              type="text"
              className="px-2 py-3 border border-r-0 border-collapse rounded-r-none first:mt-0 first:mb-0 rounded-l-2xl"
              placeholder={`Antwoord ${answer._id}`}
              defaultValue={answer.answer}
              onChange={(e) =>
                updateQuestion(index, "answers", e.target.value, answer._id)
              }
            />
            <button
              type="button"
              className={`transform transition-all ease-in duration-150  p-2 py-3 my-1 rounded-r-2xl text-white font-bold ${
                answer.isCorrect ? "bg-green-500/80" : "bg-red-500/60"
              }`}
              onClick={() =>
                updateQuestion(index, "isCorrect", true, answer._id)
              }
            >
              {answer.isCorrect ? "Correct" : "Onjuist"}
            </button>
          </div>
        );
      })}
    </>
  );
}

export default QuizBuilderEdit;
