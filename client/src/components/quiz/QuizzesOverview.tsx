import 'react-loading-skeleton/dist/skeleton.css';

import {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import { useNavigate } from 'react-router-dom';

import { useAlert } from '../../context/AlertContext';
import { useAnimationContext } from '../../context/AnimationContext';
import { useAuth } from '../../context/AuthContext';
import { QuizType } from '../../types/QuizType';
import { StyledButton } from '../buttons/StyledButton';

function QuizzesOverview() {
  const [quizzes, setQuizzes] = useState<QuizType[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalQuizzes, setTotalQuizzes] = useState(0);
  const { getTokenBearer } = useAuth();
  const navigate = useNavigate();
  const { addAlert } = useAlert();
  const { routeVariants } = useAnimationContext();

  const addQuiz = () => {
    navigate("/quiz/builder");
  };

  // const editQuiz = (id: string | undefined) => {
  // open pop up modal for editing quiz
  // };

  const deleteQuiz = (id: string | undefined) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/quiz/${id}`, {
        headers: {
          Authorization: getTokenBearer(),
        },
      })
      .then(() => {
        const updatedQuizzes = quizzes.filter((quiz) => quiz._id !== id);
        setQuizzes(updatedQuizzes);
        addAlert("Quiz is succesvol verwijderd", "success");
      })
      .catch((error) => {
        console.log(error);
        addAlert("Er is iets misgegaan", "error");
      });
  };

  useEffect(() => {
    const getQuizzes = async () => {
      if (!getTokenBearer()) return;
      axios
        .get(`${import.meta.env.VITE_API_URL}/quiz`, {
          headers: {
            Authorization: getTokenBearer(),
          },
        })
        .then((response) => {
          setQuizzes(response.data.quizzes);
          console.log(response.data);
          setTimeout(() => setLoading(false), 1000);
          setTotalQuizzes(response.data.totalQuizzes);
        })
        .catch((error) => {
          console.log(error);
          addAlert("Er is iets misgegaan", "error");
        });
    };

    getQuizzes();
  }, [getTokenBearer]);

  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="p-4"
    >
      <div className="flex justify-between items-center">
        <StyledButton buttonStyle="secondary" onClick={addQuiz}>
          Quiz Toevoegen
        </StyledButton>
        <h2 className="text-lg font-bold">
          Totale Quizzen:{" "}
          {loading ? <Skeleton highlightColor="#bfdbfe" /> : totalQuizzes}
        </h2>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full table-auto">
          <thead className=" bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">Quiz Titel</th>
              <th className="py-3 px-6 text-left">Slug</th>
              <th className="py-3 px-6 text-left">Wachtwoord</th>
              <th className="py-3 px-6 text-left">Aantal Vragen</th>
              <th className="py-3 px-6 text-center">Acties</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {loading
              ? [...Array(totalQuizzes)].map((_, index) => (
                  <tr key={index}>
                    <td colSpan={5}>
                      <Skeleton
                        count={1}
                        className="py-3 px-6"
                        highlightColor="#bfdbfe"
                      />
                    </td>
                  </tr>
                ))
              : quizzes.map((quiz) => (
                  <tr
                    className="border-b border-gray-200 hover:bg-gray-100"
                    key={quiz._id}
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {quiz.title}
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {quiz.slug}
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {quiz.password}
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {quiz.totalQuestions}
                    </td>
                    <td className="py-3 px-6 text-center">
                      <button
                        // onClick={() => editQuiz(quiz._id)}
                        className="bg-secondary hover:bg-primary text-white font-bold py-1 px-2 rounded mr-2 transition-colors duration-200"
                      >
                        Bewerk
                      </button>
                      <button
                        onClick={() => deleteQuiz(quiz._id)}
                        className="bg-red-300 hover:bg-red-500 text-white font-bold py-1 px-2 rounded transition-colors duration-200"
                      >
                        Verwijder
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default QuizzesOverview;
