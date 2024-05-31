import { StyledButton } from "../buttons/StyledButton";
import { useQuizBuilder } from "../../context/QuizBuilderContext";
import { useEffect } from "react";
import AddIcon from "../icons/AddIcon";
import SaveIcon from "../icons/SaveIcon";

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
  const { questions, addQuestions, updateQuestion, saveQuiz } =
    useQuizBuilder();

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  const focusStyle =
    "focus:outline-none focus:ring-1 focus:ring-primary focus:ring-opacity-50";

  const inputPadding = "p-2 py-3";

  return (
    <>
      <div className="p-5 border rounded-lg font-custom">
        {questions.map((question, index) => (
          <div
            key={index}
            className="p-8 my-4 border shadow rounded-2xl bg-primary/5"
          >
            <input
              type="text"
              className={`block w-full mb-8 border rounded-2xl ${inputPadding} ${focusStyle}`}
              placeholder="Voer vraag in"
              value={question.question}
              onChange={(e) =>
                updateQuestion(index, "question", e.target.value)
              }
            />
            {question.answers.map((answer) => (
              <div
                className="flex items-center justify-center m-2"
                key={answer._id}
              >
                <input
                  type="text"
                  className={`w-11/12 transition duration-200 ease-in-out border active:shadow-md  rounded-l-2xl ${inputPadding} ${focusStyle}`}
                  placeholder={`Antwoord ${answer._id}`}
                  value={answer.answer}
                  onChange={(e) =>
                    updateQuestion(index, "answers", e.target.value, answer._id)
                  }
                />
                <button
                  className={`ml-2 px-4 py-2 rounded-r-2xl text-white font-bold ${
                    answer.isCorrect ? "bg-green-500" : "bg-red-500/80"
                  }`}
                  onClick={() =>
                    updateQuestion(index, "isCorrect", true, answer._id)
                  }
                >
                  {answer.isCorrect ? "Correct" : "Onjuist"}
                </button>
              </div>
            ))}
          </div>
        ))}
        <div className="flex justify-between">
          <StyledButton
            buttonStyle="tertiary"
            onClick={addQuestions}
            icon={<AddIcon />}
          >
            Voeg vraag toe
          </StyledButton>
          <StyledButton
            buttonStyle="tertiary"
            onClick={saveQuiz}
            icon={<SaveIcon />}
          >
            Opslaan
          </StyledButton>
        </div>
      </div>
    </>
  );
}

export default MockQuiz;
