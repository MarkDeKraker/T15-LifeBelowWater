import React from "react";

export default function QuizOverview() {
  return (
    <div className="flex justify-center align-middle text-center min-h-full p-4">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-screen-lg">
        <div className="w-full lg:w-1/2 p-4">
          <div className="bg-blue-100 rounded-2xl border-2 border-zinc-300 p-4 mb-4">
            <h1 className="text-black text-2xl lg:text-3xl font-normal font-custom">
              Quizzes Overzicht
            </h1>
          </div>
          <div className="flex flex-col space-y-4">
            {["Quiz 1", "Quiz 2", "Quiz 3"].map((quiz, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-4"
              >
                <span className="text-black text-lg lg:text-2xl font-normal font-custom">
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
        <div className="w-full lg:w-1/2 p-4">
          <div className="rounded-2xl p-4 mb-4">
            <h1 className="text-black text-2xl lg:text-3xl font-normal font-custom">
              Maak een quiz aan
            </h1>
          </div>
          <div className="flex flex-col space-y-4">
            <input
              placeholder="Titel"
              className="w-full border-2 p-2 rounded-full mb-2"
            />
            <input
              placeholder="Beschrijving"
              className="w-full border-2 p-2 rounded-full mb-2"
            />
            <button className="bg-sky-600 rounded-full p-2 w-full text-white">
              Quiz aanmaken
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
