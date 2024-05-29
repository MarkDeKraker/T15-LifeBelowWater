import { useAuth } from "../context/AuthContext";
import { QuizCreateForm } from "./QuizCreateForm";
import axios from "axios";

export default function QuizOverview() {
  const { tokenForBearer } = useAuth();

  const postNewQuiz = () => {
    const payload = {
      slug: "kipp",
      title: "kipp",
      password: "kipp",
      questions: [
        {
          answers: {
            A: {
              answer: "Answer A",
              isCorrect: false,
            },
            B: {
              answer: "Answer B",
              isCorrect: true,
            },
            C: {
              answer: "Answer C",
              isCorrect: false,
            },
            D: {
              answer: "Answer D",
              isCorrect: false,
            },
          },
          question: "Test question 1?",
        },
        {
          answers: {
            A: {
              answer: "Answer A",
              isCorrect: false,
            },
            B: {
              answer: "Answer B",
              isCorrect: false,
            },
            C: {
              answer: "Answer C",
              isCorrect: true,
            },
            D: {
              answer: "Answer D",
              isCorrect: false,
            },
          },
          question: "Test question 2?",
        },
      ],
      totalQuestions: 2,
    };
    axios
      .post("http://localhost:3000/api/v1/quiz", payload, {
        headers: {
          Authorization: tokenForBearer(),
        },
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Error:", error));
  };
  function handleCreateQuiz() {
    postNewQuiz();
  }

  return (
    <div className="flex justify-center min-h-full p-4 text-center align-middle">
      <div className="flex flex-col items-center justify-center w-full max-w-screen-lg lg:flex-row">
        <div className="w-full p-4 lg:w-1/2">
          <div className="p-4 mb-4 bg-blue-100 border-2 rounded-2xl border-zinc-300">
            <h1 className="text-2xl font-normal text-black lg:text-3xl font-custom">
              Quizzes Overzicht
            </h1>
          </div>
          <div className="flex flex-col space-y-4">
            {["Quiz 1", "Quiz 2", "Quiz 3"].map((quiz, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-4"
              >
                <span className="text-lg font-normal text-black lg:text-2xl font-custom">
                  {quiz}
                </span>
                <span>-</span>
                <div className="flex span-x-4">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M15.7322 5.23223L19.2677 8.76777M17.2322 3.73223C18.2085 2.75592 19.7914 2.75592 20.7677 3.73223C21.744 4.70854 21.744 6.29146 20.7677 7.26777L7 21.0355H3.5V17.4644L17.2322 3.73223Z"
                        stroke="#FFB596"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M15.5 12H9.5M21.5 12C21.5 16.9706 17.4706 21 12.5 21C7.52944 21 3.5 16.9706 3.5 12C3.5 7.02944 7.52944 3 12.5 3C17.4706 3 21.5 7.02944 21.5 12Z"
                        stroke="#F26E6E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full p-4 lg:w-1/2">
          {/* // Delete this button later */}
          <button
            onClick={handleCreateQuiz}
            className="p-4 text-white rounded-full bg-primary font-custom"
          >
            Do Fake post call
          </button>
          <QuizCreateForm></QuizCreateForm>
        </div>
      </div>
    </div>
  );
}
