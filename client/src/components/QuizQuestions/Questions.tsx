import { AnimatePresence, motion } from "framer-motion";

import { QuestionType, useQuizBuilder } from "../../context/QuizBuilderContext";
import FormInput from "../form/FormInput";

function Questions() {
  const { questions, updateQuestion, deleteQuestion } = useQuizBuilder();

  return (
    <AnimatePresence>
      {questions.map((question, index) => (
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
            value={question.question}
            onChange={(e) => updateQuestion(index, "question", e.target.value)}
          />
          <div className="mt-6 mb-4 border border-1"></div>
          <Answers question={question} index={index} />
          <button
            className="p-2 mt-4 text-white transition-all transform bg-red-300 hover:bg-red-500 rounded-custom w-fit duration-250"
            onClick={() => deleteQuestion(question.id)}
          >
            Verwijder vraag
          </button>
        </motion.div>
      ))}
    </AnimatePresence>
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
          <div className="flex items-center justify-center " key={answer._id}>
            <FormInput
              name="answer"
              type="text"
              className="px-2 py-3 border border-r-0 border-collapse rounded-r-none first:mt-0 first:mb-0 rounded-l-2xl"
              placeholder={`Antwoord ${answer._id}`}
              value={answer.answer}
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

export default Questions;
