import { motion } from 'framer-motion';
import {
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useAlert } from '../../context/AlertContext';
import { useAnimationContext } from '../../context/AnimationContext';

type FormValues = {
  password: string;
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onSubmit" });

  const navigate = useNavigate();
  const { addAlert } = useAlert();
  const { routeVariants } = useAnimationContext();

  const onSubmit: SubmitHandler<FormValues> = async ({ password }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/quiz/password/${password}`
      );
      const data = await response.json();
      if (data.quiz.length > 0) {
        navigate("/quiz/" + data.quiz[0].slug);
      } else {
        addAlert("Wachtwoord is onjuist", "error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isErrorStyle = errors.password
    ? "border-red-300 focus:outline-red-300 focus:ring-red-300"
    : "";

  const transitionStyle = "transition-all duration-150 ease-in-out";

  return (
    <motion.form
      variants={routeVariants}
      initial="initial"
      animate="final"
      className={`space-y-4 md:space-y-6 ${transitionStyle}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label
          htmlFor="password" //change this to password
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Jouw password
          {errors.password && (
            <span className="font-bold text-red-800">
              : {errors.password?.message}
            </span>
          )}
        </label>
        <input
          type="text"
          id="password"
          className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-custom focus:ring-none block w-full p-2.5 focus-visible:outline-none ${transitionStyle} ${isErrorStyle}`}
          placeholder="bxf23i4"
          {...register("password", {
            required: {
              value: true,
              message: "password is verplicht",
            },
            minLength: {
              value: 3,
              message: "Moet minimaal 3 karakters bevatten",
            },
          })}
        />
      </div>
      <button
        type="submit"
        disabled={errors.password ? true : false}
        className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-custom text-sm px-5 py-2.5 disabled:bg-opacity-25 text-center "
      >
        Start quiz
      </button>
    </motion.form>
  );
}

export default LoginForm;
