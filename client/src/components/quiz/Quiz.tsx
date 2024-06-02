import { useEffect, useState } from "react";
import { QuizType } from "../../types/QuizType";
import QuizAnswerButton from "./QuizAnswerButton";
import { useNavigate, useParams } from "react-router-dom";

function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: string]: string;
  }>({});
  const [feedback, setFeedback] = useState<{ [key: string]: boolean }>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const [quizData, setQuizData] = useState<QuizType>({} as QuizType);

  const handleAnswerClick = (
    questionId: string,
    answerKey: string,
    isCorrect: boolean
  ) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answerKey }));
    setFeedback((prev) => ({ ...prev, [questionId]: isCorrect }));
  };

  useEffect(() => {
    if (Object.keys(selectedAnswers).length === quizData.questions?.length) {
      setQuizCompleted(true);
    }
  }, [selectedAnswers]);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/quiz/slug/${slug}`
        );
        const data = await response.json();
        if (data.quiz.length === 0) {
          navigate("/not-found");
        }

        setQuizData(data.quiz[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuiz();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg my-10 overflow-auto ">
      <h1 className="text-2xl font-bold mb-4 text-center font-custom">
        {quizData.title}
      </h1>
      <p className="text-center font-custom text-xl mb-6">
        Totaal aantal vragen beantwoord: {Object.keys(selectedAnswers).length}/
        {quizData.questions?.length}
      </p>
      <div className="space-y-6">
        {quizData.questions?.map((quizItem) => (
          <div
            key={quizItem._id}
            className="p-4 border border-gray-200 rounded-lg shadow-lg"
          >
            <h2 className="font-custom text-xl font-semibold mb-2">
              {quizItem.question}
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(quizItem.answers).map((key) => (
                <QuizAnswerButton
                  disabled={selectedAnswers[quizItem._id] !== undefined}
                  key={key}
                  answerText={
                    quizItem.answers[key as keyof typeof quizItem.answers]
                      .answer
                  }
                  isSelected={selectedAnswers[quizItem._id] === key}
                  isCorrect={
                    quizItem.answers[key as keyof typeof quizItem.answers]
                      .isCorrect
                  }
                  handleClick={() =>
                    handleAnswerClick(
                      quizItem._id,
                      key,
                      quizItem.answers[key as keyof typeof quizItem.answers]
                        .isCorrect
                    )
                  }
                />
              ))}
            </div>
            {selectedAnswers[quizItem._id] !== undefined && (
              <div
                className={`mt-2 text-xl ${
                  feedback[quizItem._id] ? "text-green-600" : "text-red-600"
                }`}
              >
                {feedback[quizItem._id] ? "Correct!" : "Fout!"}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate("/quiz/completed")}
          disabled={!quizCompleted}
          className={`bg-primary hover:bg-primary/70 transition duration-200 ease-in-out p-5 text-white rounded-full font-custom ${
            quizCompleted ? "cursor-pointer" : "cursor-not-allowed"
          }`}
        >
          Afronden
        </button>
      </div>
    </div>
  );
}

export default Quiz;
