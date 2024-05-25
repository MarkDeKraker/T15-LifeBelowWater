import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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
          htmlFor="email"
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
          id="email"
          className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-custom focus:ring-none  block w-full p-2.5 focus-visible:outline-none ${transitionStyle} ${isErrorStyle}`}
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

export default LoginForm;
