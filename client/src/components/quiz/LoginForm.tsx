import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormValues = {
  inlogCode: string;
};

const url = `/src/data/QuizMockData.json`;
function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onSubmit" });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async ({ inlogCode }) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          "Er is iets misgegaan bij het ophalen van de data. Probeer het later opnieuw."
        );
      }

      // Als de inlogcode overeenkomt met de data, navigeer dan naar de quizpagina
      if (inlogCode === data._id) {
        navigate(`/quiz/${inlogCode}`);
      }

      return "Voer een geldige logincode in!";
    } catch (err) {
      console.log(err);
    }
  };

  const isErrorStyle = errors.inlogCode
    ? "border-red-300 focus:outline-red-300 focus:ring-red-300"
    : "";

  const transitionStyle = "transition-all duration-150 ease-in-out";

  return (
    <form
      className={`space-y-4 md:space-y-6 ${transitionStyle}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label
          htmlFor="inlogCode" //change this to inlogCode
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Jouw inlogcode
          {errors.inlogCode && (
            <span className="font-bold text-red-800">
              : {errors.inlogCode?.message}
            </span>
          )}
        </label>
        <input
          type="text"
          id="inlogCode"
          className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-custom focus:ring-none block w-full p-2.5 focus-visible:outline-none ${transitionStyle} ${isErrorStyle}`}
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
        disabled={errors.inlogCode ? true : false}
        className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-custom text-sm px-5 py-2.5 disabled:bg-opacity-25 text-center "
      >
        Start quiz
      </button>
    </form>
  );
}

export default LoginForm;
