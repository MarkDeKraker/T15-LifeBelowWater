import { StyledButton } from "../buttons/StyledButton";
import { useQuizBuilder } from "../../context/QuizBuilderContext";
import AddIcon from "../icons/AddIcon";
import SaveIcon from "../icons/SaveIcon";
import Container from "../Layout/Container";
import FormInput from "../form/FormInput";

function MockQuiz() {
  const { questions, addQuestions, updateQuestion, saveQuiz, setTitle } =
    useQuizBuilder();

  return (
    <>
      <Container>
        <div className="p-5 border rounded-lg font-custom">
          <div className="quiz-title">
            <FormInput
              name="title"
              type="text"
              placeholder="Voer titel in"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {questions.map((question, index) => (
            <div
              key={index}
              className="flex flex-col p-8 my-4 border shadow rounded-custom bg-primary/5"
            >
              <FormInput
                name="question"
                type="text"
                className={`block w-full`}
                placeholder="Voer vraag in"
                value={question.question}
                onChange={(e) =>
                  updateQuestion(index, "question", e.target.value)
                }
              />
              <div className="my-3 border border-1"></div>
              {question.answers.map((answer) => (
                <div
                  className="flex items-center justify-center space-y-2"
                  key={answer._id}
                >
                  <FormInput
                    name="answer"
                    type="text"
                    className={` border rounded-l-2xl rounded-r-none`}
                    placeholder={`Antwoord ${answer._id}`}
                    value={answer.answer}
                    onChange={(e) =>
                      updateQuestion(
                        index,
                        "answers",
                        e.target.value,
                        answer._id
                      )
                    }
                  />
                  <button
                    className={`p-2 py-3 rounded-r-2xl text-white font-bold ${
                      answer.isCorrect ? "bg-green-500/80" : "bg-red-500/60"
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
              Quiz Opslaan
            </StyledButton>
          </div>
        </div>
      </Container>
    </>
  );
}

export default MockQuiz;
