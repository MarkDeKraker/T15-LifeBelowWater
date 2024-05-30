import {
  useEffect,
  useState,
} from 'react';

export interface Question {
  // _id: string;
  question: string;
  answers: Answer;
}
export interface Answer {
  A: Option;
  B: Option;
  C: Option;
  D: Option;
  key?: string;
}
export interface Option {
  answer: string;
  isCorrect: boolean;
}

function MockQuiz() {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  const addQuestions = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        answers: {
          A: { answer: "", isCorrect: false },
          B: { answer: "", isCorrect: false },
          C: { answer: " ", isCorrect: false },
          D: { answer: "", isCorrect: false },
        },
      },
    ]);
  };

  const updateQuestion = (
    index: number,
    field: string,
    value: string,
    key?: string
  ) => {
    const updatedQuestions = questions.map((question, i) => {
      if (i === index) {
        if (key) {
          console.log(key);
          if (field === "isCorrect") {
            question.answers[key].isCorrect = !question.answers[key].isCorrect;
          } else {
            question.answers[key].answer = value;
          }
        } else {
          question[field] = value;
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
            {Object.keys(question.answers).map((key, i) => (
              <div className="flex items-center mb-2" key={i}>
                <input
                  type="text"
                  className="flex-grow p-2 border rounded"
                  placeholder={`Answer `}
                  value={question.answers[key].answer}
                  onChange={(e) =>
                    updateQuestion(index, "answers", e.target.value, key)
                  }
                />
                <button
                  className={`ml-2 px-4 py-2 rounded text-white ${
                    question.answers[key].isCorrect
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                  onClick={() => updateQuestion(index, "isCorrect", "", key)}
                >
                  {question.answers[key].isCorrect ? "Correct" : "Incorrect"}
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
