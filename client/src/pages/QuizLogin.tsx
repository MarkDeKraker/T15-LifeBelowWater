import { useForm } from "react-hook-form";
import H1 from "../components/typography/H1";

function QuizLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  //   console.log(errors);
  return (
    <>
      <div className="login-card">
        <H1>Quiz Login</H1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="ab234ke"
            {...register(
              "Voer inlogcode die je hebt gekregen van je juf of meester",
              {
                required: true,
                maxLength: 80,
              }
            )}
            className="flex p-2 space-x-4 font-bold rounded-full cursor-pointer bg hover:underline-offset-2 "
          />
          <input
            type="submit"
            value="Start quiz"
            className="flex p-2 px-4 space-x-4 font-bold text-black rounded-full cursor-pointer bg hover:underline-offset-2 bg-secondary"
          />
        </form>
      </div>
    </>
  );
}

export default QuizLogin;
