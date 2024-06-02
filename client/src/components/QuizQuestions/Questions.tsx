import { QuestionType, useQuizBuilder } from "../../context/QuizBuilderContext";
import FormInput from "../form/FormInput";

function Questions() {
  const { questions, updateQuestion } = useQuizBuilder();

  return (
    <>
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
            onChange={(e) => updateQuestion(index, "question", e.target.value)}
          />
          <div className="my-3 border border-1"></div>
          <Answers question={question} index={index} />
        </div>
      ))}
    </>
  );
}

function Answers({
  question,
  index,
}: {
  question: QuestionType;
  index: number;
}) {
  const { updateQuestion } = useQuizBuilder();

  return (
    <>
      {question.answers.map((answer) => {
        return (
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
                updateQuestion(index, "answers", e.target.value, answer._id)
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
        );
      })}
    </>
  );
}

export default Questions;
