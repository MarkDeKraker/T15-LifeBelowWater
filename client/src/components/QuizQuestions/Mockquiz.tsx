import { useEffect, useState } from "react";
import { StyledButton } from "../buttons/AddButton";

// THESE INTERFACES ARE FOR THE QUESTIONS THAT ARE BEING CREATED TO SEND TO THE API
// THAT IS WHY THE QUESTIONTYPE DOESN'T HAVE A _ID
export interface QuestionType {
  question: string;
  answers: AnswerType[];
}
export interface AnswerType {
  answer: string;
  isCorrect: boolean;
  _id: string;
}

function MockQuiz() {
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  const addQuestions = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        answers: [
          { _id: "A", answer: "", isCorrect: false },
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
                  return { ...answer, isCorrect: !answer.isCorrect };
                }
                return answer;
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

  return (
    <>
      <div className="p-5 border rounded-lg font-custom">
        <StyledButton buttonStyle="secondary" onClick={addQuestions}>
          Add Question
        </StyledButton>
        {questions.map((question, index) => (
          <div
            key={index}
            className="p-8 my-4 border shadow rounded-2xl bg-primary/5"
          >
            <input
              type="text"
              className="block w-full p-2 mb-8 border rounded-2x"
              placeholder="Enter question"
              value={question.question}
              onChange={(e) =>
                updateQuestion(index, "question", e.target.value)
              }
            />
            <hr className="my-4" />
            {question.answers.map((answer) => (
              <div
                className="flex items-center justify-center m-2 "
                key={answer._id}
              >
                <input
                  type="text"
                  className="w-11/12 p-2 border rounded-l-2xl"
                  placeholder={`Answer ${answer._id}`}
                  value={answer.answer}
                  onChange={(e) =>
                    updateQuestion(index, "answers", e.target.value, answer._id)
                  }
                />
                <button
                  className={`ml-2 px-4 py-2 rounded-r-2xl text-white ${
                    answer.isCorrect ? "bg-green-500" : "bg-red-500/80"
                  }`}
                  onClick={() =>
                    updateQuestion(index, "isCorrect", true, answer._id)
                  }
                >
                  {answer.isCorrect ? "Correct" : "Incorrect"}
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default MockQuiz;
