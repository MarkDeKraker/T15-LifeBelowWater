import { useParams } from "react-router-dom";
import H1 from "../components/typography/H1";
import { useEffect, useState } from "react";
import LoginForm from "../components/quiz/LoginForm";
// import { default as quizData } from "../data/QuizMockData.json";

function QuizLoginPage() {
  // Id wordt gebruikt om bij de juiste quiz te komen, maar is nu nog niet geïmplementeerd.
  const { _slug: slug } = useParams();

  const [isValidSlug, setIsValidSlug] = useState(false);

  useEffect(() => {
    const checkSlugValidity = async () => {
      try {
        const response = await fetch(`/src/data/QuizMockData.json`);
        const data = await response.json();
        // slug
        if (slug === data._slug) {
          setIsValidSlug(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkSlugValidity();
  }, [slug]);

  return (
    <>
      <section className="bg-gray-50 font-custom">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full shadow rounded-custom bg-primary/5 md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="px-6 pt-3 space-y-4 md:space-y-6 sm:p-8">
              <H1>Aqua Academy Quiz </H1>
              <span className="italic font-normal break-before-all">
                {slug}
              </span>
              {isValidSlug ? (
                <LoginForm />
              ) : (
                <div className="font-bold text-red-800">
                  Voer een geldige url in!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default QuizLoginPage;
