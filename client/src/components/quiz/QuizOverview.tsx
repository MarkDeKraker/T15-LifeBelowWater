import { mockQuizzes } from "./mockVariables";
import { useState } from "react";
import { QuizType } from "../../types/QuizType";

export default function QuizOverview() {
  const [quizList, setQuiz] = useState<QuizType[]>([...mockQuizzes]);

  function handleQuizlist() {
    // console.log();
    // deze velde later vervangen met de input velden
    setQuiz([...quizList, { title: "new quiz", password: "new password" }]);

    // console.log(quizList);
    // postNewQuiz();
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
            {quizList.map((post) => (
              <div
                key={post._id}
                className="flex items-center justify-center space-x-4"
              >
                <span className="text-lg font-normal text-black lg:text-2xl font-custom">
                  {post.title}
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
          <div className="form">
            <div className="p-4 mb-4 rounded-2xl">
              <h1 className="text-2xl font-normal text-black lg:text-3xl font-custom">
                Maak een quiz aan
              </h1>
            </div>
            <div className="flex flex-col space-y-4">
              <input
                placeholder="Titel"
                className="w-full p-2 mb-2 border-2 rounded-full"
              />
              <input
                placeholder="Beschrijving"
                className="w-full p-2 mb-2 border-2 rounded-full"
              />
              <button
                className="w-full p-2 text-white rounded-full bg-sky-600"
                onClick={handleQuizlist}
              >
                Quiz aanmaken
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
