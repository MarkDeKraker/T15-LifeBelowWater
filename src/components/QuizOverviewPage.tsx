export default function QuizOverviewPage() {
  return (
    <div className="flex justify-center align-middle text-center min-h-full">
      <div className=" justify-center items-center inline-flex">
        <div className="w-[655px] h-[316px] relative">
          <div className="w-[655px] h-14 left-0 top-0  bg-blue-100 rounded-[90px] border-2 border-zinc-300">
            <div className="p-2.5 left-[278px] top-[7px] absolute" />
            <div className="w-[655px] h-[34px] left-0 top-[7px] absolute justify-center items-center gap-2.5 inline-flex">
              <div className="text-black text-[32px] font-normal font-custom">
                Quizzes Overzicht
              </div>
            </div>
          </div>
          <div className=" justify-center items-centerinline-flex flex-col space-y-4 mt-4">
            <div className="flex space-x-2 justify-center">
              <div className="text-black text-[32px] font-normal font-custom">
                Quiz 1
              </div>
              <div className="my-auto">-</div>
              <div className="my-auto">
                <button className="my-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M12.5 9V12M12.5 12V15M12.5 12H15.5M12.5 12H9.5M21.5 12C21.5 16.9706 17.4706 21 12.5 21C7.52944 21 3.5 16.9706 3.5 12C3.5 7.02944 7.52944 3 12.5 3C17.4706 3 21.5 7.02944 21.5 12Z"
                      stroke="#3DC64B"
                      stroke-opacity="0.83"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                      d="M15.7322 5.23223L19.2677 8.76777M17.2322 3.73223C18.2085 2.75592 19.7914 2.75592 20.7677 3.73223C21.744 4.70854 21.744 6.29146 20.7677 7.26777L7 21.0355H3.5V17.4644L17.2322 3.73223Z"
                      stroke="#FFB596"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="text-black text-[32px] font-normal font-custom">
              Quiz 2
            </div>
            <div className="text-black text-[32px] font-normal font-custom">
              Quiz 3
            </div>
          </div>
        </div>
        <div className="w-[655px] h-[316px] relative">
          <div className="w-[655px] h-14 left-0 top-0 rounded-[90px] ">
            <div className="p-2.5 left-[278px] top-[7px] absolute" />
            <div className="w-[655px] h-[34px] left-0 top-[7px] absolute justify-center items-center gap-2.5 inline-flex">
              <div className="text-black text-[32px] font-normal font-custom">
                Maak een quiz aan
              </div>
            </div>
          </div>
          <div className="justify-center items-centerinline-flex flex-col space-y-8">
            <div className="space-y-2 mt-4">
              <input
                placeholder="Titel"
                className="w-full border-2 p-2 rounded-full"
              />
              <input
                placeholder="Beschrijving"
                className="w-full border-2 p-2 rounded-full"
              />
            </div>
            <button className="bg-sky-600 rounded-full p-2 w-full text-white">
              Quiz aanmaken
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
