import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { useAnimationContext } from '../../context/AnimationContext';
import LoginForm from '../quiz/LoginForm';
import H1 from '../typography/H1';

function JoinQuiz() {
  const { routeVariants } = useAnimationContext();

  return (
    <div className="font-custom">
      <motion.section
        variants={routeVariants}
        initial="initial"
        animate="final"
        className="bg-gray-50 font-custom"
      >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full shadow rounded-custom bg-primary/5 md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="px-6 pt-3 space-y-4 md:space-y-6 sm:p-8">
              <H1>Aqua Academy Quiz </H1>
              <LoginForm />
            </div>
          </div>
        </div>
      </motion.section>
      <Link to="/login">
        <button className="absolute top-4 right-4 text-lg text-white bg-blue-500  hover:bg-blue-600 p-2 rounded-custom">
          Login
        </button>
      </Link>
    </div>
  );
}

export default JoinQuiz;
