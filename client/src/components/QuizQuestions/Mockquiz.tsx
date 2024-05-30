import {
  useEffect,
  useState,
} from 'react';

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
// export interface Option {
//   answer: string;
//   isCorrect: boolean;
// }

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
      <div className="p-5">
        <button
          className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={addQuestions}
        >
          Add Question
        </button>
        {questions.map((question, index) => (
          <div key={index} className="mb-4 p-4 border rounded shadow">
            <input
              type="text"
              className="block w-full mb-2 p-2 border rounded"
              placeholder="Enter question"
              value={question.question}
              onChange={(e) =>
                updateQuestion(index, "question", e.target.value)
              }
            />
            {question.answers.map((answer) => (
              <div className="flex items-center mb-2" key={answer._id}>
                <input
                  type="text"
                  className="flex-grow p-2 border rounded"
                  placeholder={`Answer ${answer._id}`}
                  value={answer.answer}
                  onChange={(e) =>
                    updateQuestion(index, "answers", e.target.value, answer._id)
                  }
                />
                <button
                  className={`ml-2 px-4 py-2 rounded text-white ${
                    answer.isCorrect ? "bg-green-500" : "bg-red-500"
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
