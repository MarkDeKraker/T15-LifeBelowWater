import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import H1 from "../components/typography/H1";
import { useEffect, useState } from "react";
// import { default as quizData } from "../data/QuizMockData.json";

function QuizLoginPage() {
  // Id wordt gebruikt om bij de juiste quiz te komen, maar is nu nog niet geïmplementeerd.
  const { _slug: slug } = useParams();

  // Do an api call to check if the slug is valid
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

type FormValues = {
  inlogCode: string;
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onSubmit" });

  const navigate = useNavigate();

  // Id moet nog worden geïmplementeerd

  const onSubmit: SubmitHandler<FormValues> = async ({ inlogCode }) => {
    const url = `/src/data/QuizMockData.json`;
    try {
      const res = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        if (inlogCode === data._id) {
          navigate(`/quiz/${inlogCode}`);
        } else {
          return <div>Voer een geldige logincode in!</div>;
        }
      } else {
        return <div>Voer een geldige logincode in!</div>;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Jouw inlogcode
          {errors.inlogCode && (
            <span className="font-bold text-red-800 ">
              : {errors.inlogCode?.message}
            </span>
          )}
        </label>
        <input
          type="text"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-custom focus:ring-primary focus:border-primary-600 block w-full p-2.5 "
          placeholder="bxf23i4"
          {...register("inlogCode", {
            required: {
              value: true,
              message: "logincode is verplicht",
            },
            minLength: {
              value: 3,
              message: "Moet minimaal 3 karakters bevatten",
            },
            validate: async (value) => {
              // Voor nu wordt de data uit een json bestand gehaald, Later moet dit vervangen worden door een fetch naar de backend.
              const url = `/src/data/QuizMockData.json`;
              const response = await fetch(url);
              const data = await response.json();
              if (value !== data._id) {
                return "Voer een geldige logincode in!";
              }
            },
          })}
        />
      </div>

      <button
        type="submit"
        className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-custom text-sm px-5 py-2.5 text-center "
      >
        Start quiz
      </button>
    </form>
  );
}

export default QuizLoginPage;
