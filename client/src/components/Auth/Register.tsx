import axios from 'axios';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  Link,
  useNavigate,
} from 'react-router-dom';

type FormValues = {
  username: string;
  email: string;
  password: string;
};

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onSubmit" });

  const navigate = useNavigate();

  const onSubmit = async (data: FormValues) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/register`,
      data
    );
    console.log(response.status);
    if (response.status === 201) {
      console.log("Succesvol geregistreerd");
      navigate("/login");
    }
  };

  const isErrorStyleUsername = errors.username
    ? "border-red-300 "
    : "border-gray-300";
  const isErrorStyleEmail = errors.email
    ? "border-red-300 "
    : "border-gray-300";
  const isErrorStylePassword = errors.password
    ? "border-red-300 "
    : "border-gray-300";

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8">
      <span className="text-2xl text-gray-700">Login</span>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 flex flex-col"
      >
        <input
          type="text"
          id="username"
          {...register("username", {
            required: { value: true, message: "Email is verplicht" },
          })}
          placeholder="Naam"
          className={`w-72 h-12 px-4 text-lg border-2  rounded-custom focus:outline-none focus:border-blue-500 ${isErrorStyleUsername} `}
        />

        <AnimatePresence>
          {errors.username && (
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-red-500"
            >
              Naam is verplicht
            </motion.span>
          )}
        </AnimatePresence>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: { value: true, message: "Email is verplicht" },
          })}
          placeholder="E-mail"
          className={`w-72 h-12 px-4 text-lg border-2  rounded-custom focus:outline-none focus:border-blue-500 ${isErrorStyleEmail} `}
        />

        <AnimatePresence>
          {errors.email && (
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-red-500"
            >
              Email is verplicht
            </motion.span>
          )}
        </AnimatePresence>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: { value: true, message: "wachtwoord is verplicht" },
          })}
          placeholder="Wachtwoord"
          className={`w-72 h-12 px-4 text-lg border-2  rounded-custom focus:outline-none focus:border-blue-500 ${isErrorStylePassword} `}
        />
        <AnimatePresence>
          {errors.password && (
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-red-500"
            >
              Wachtwoord is verplicht
            </motion.span>
          )}
        </AnimatePresence>
        <button
          type="submit"
          className="w-72 h-14 text-lg text-white bg-blue-500 rounded-custom hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      <div>
        Al een account?{" "}
        <Link to="/login">
          <span className="text-blue-500 hover:underline cursor-pointer">
            Log hier in
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Register;
