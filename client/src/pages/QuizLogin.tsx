import { useForm } from "react-hook-form";
import H1 from "../components/typography/H1";
import { useParams } from "react-router-dom";
import { Input } from "../components/buttons/Input";

function QuizLogin() {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="login-card">
        <H1>Quiz Login</H1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="quiz-password">
            Voer inlogcode die je hebt gekregen van je juf of meester.
          </label>
          <input
            type="text"
            placeholder="ab234ke"
            {...register("quiz-password", {
              required: true,
              maxLength: 80,
            })}
            className="flex p-2 space-x-4 font-bold rounded-full cursor-pointer bg hover:underline-offset-2 "
          />
          <Input type="submit" value="Start quiz" buttonStyle="secondary" />
        </form>
      </div>
    </>
  );
}

export default QuizLogin;
