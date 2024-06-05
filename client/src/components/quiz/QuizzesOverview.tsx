import "react-loading-skeleton/dist/skeleton.css";

import { useEffect, useState } from "react";

import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

import { ClipboardIcon } from "@heroicons/react/24/outline";

import { useAlert } from "../../context/AlertContext";
import { useAnimationContext } from "../../context/AnimationContext";
import { useAuth } from "../../context/AuthContext";
import { QuizType } from "../../types/QuizType";
import { StyledButton } from "../buttons/StyledButton";
import ConfirmModal from "../common/ConfirmModal";

function QuizzesOverview() {
  const [quizzes, setQuizzes] = useState<QuizType[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalQuizzes, setTotalQuizzes] = useState(0);
  const { getTokenBearer } = useAuth();
  const navigate = useNavigate();
  const { addAlert } = useAlert();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState<QuizType | null>(null);

  const { routeVariants } = useAnimationContext();

  const addQuiz = () => {
    navigate("/quiz/builder");
  };

  const editQuiz = (quiz: QuizType) => {
    navigate(`/quiz/builder/edit/`, { state: { quiz } });
  };

  const openDeleteModal = (quiz: QuizType) => {
    setCurrentQuiz(quiz);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const deleteQuiz = () => {
    if (!currentQuiz?._id) return;

    axios
      .delete(`${import.meta.env.VITE_API_URL}/quiz/${currentQuiz._id}`, {
        headers: {
          Authorization: getTokenBearer(),
        },
      })
      .then(() => {
        const updatedQuizzes = quizzes.filter(
          (quiz) => quiz._id !== currentQuiz._id
        );
        setQuizzes(updatedQuizzes);
        addAlert("Quiz is succesvol verwijderd", "success");
        setDeleteModalOpen(false);
        setTotalQuizzes(totalQuizzes - 1);
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
      <div className="flex items-center justify-between">
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
          <thead className="text-sm leading-normal text-gray-600 uppercase bg-gray-200 ">
            <tr>
              <th className="px-6 py-3 text-left">Quiz Titel</th>
              <th className="px-6 py-3 text-left">Slug</th>
              <th className="px-6 py-3 text-left">Wachtwoord</th>
              <th className="px-6 py-3 text-left">Aantal Vragen</th>
              <th className="px-6 py-3 text-left">Link</th>
              <th className="px-6 py-3 text-center">Acties</th>
            </tr>
          </thead>
          <tbody className="text-sm font-light text-gray-600">
            {loading
              ? [...Array(totalQuizzes)].map((_, index) => (
                  <tr key={index}>
                    <td colSpan={6}>
                      <Skeleton
                        count={1}
                        className="px-6 py-3"
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
                    <td className="px-6 py-3 text-left whitespace-nowrap">
                      {quiz.title}
                    </td>
                    <td className="px-6 py-3 text-left whitespace-nowrap">
                      {quiz.slug}
                    </td>
                    <td className="px-6 py-3 text-left whitespace-nowrap">
                      {quiz.password}
                    </td>
                    <td className="px-6 py-3 text-left whitespace-nowrap">
                      {quiz.totalQuestions}
                    </td>
                    <td className="px-6 py-3 text-left whitespace-nowrap">
                      <span
                        className="flex items-center transition-colors duration-200 cursor-pointer select-none text-primary-500 hover:underline"
                        onClick={async () => {
                          const url = `http://${window.location.host}/quiz/${quiz.slug}`;
                          await navigator.clipboard.writeText(url);
                          addAlert("Link is gekopieerd", "success");
                        }}
                      >
                        http://{window.location.host}/quiz/{quiz.slug}{" "}
                        <ClipboardIcon className="w-4 h-4 ml-2" />
                      </span>
                    </td>
                    <td className="px-6 py-3 text-center">
                      <button
                        onClick={() => editQuiz(quiz)}
                        className="px-2 py-1 mr-2 font-bold text-white transition-colors duration-200 rounded bg-secondary hover:bg-primary"
                      >
                        Bewerk
                      </button>
                      <button
                        onClick={() => {
                          openDeleteModal(quiz);
                        }}
                        className="px-2 py-1 font-bold text-white transition-colors duration-200 bg-red-300 rounded hover:bg-red-500"
                      >
                        Verwijder
                      </button>
                      <AnimatePresence>
                        {deleteModalOpen && (
                          <ConfirmModal
                            key={quiz._id}
                            onConfirm={deleteQuiz}
                            isOpen={deleteModalOpen}
                            onClose={closeDeleteModal}
                            quiz={currentQuiz as QuizType}
                          />
                        )}
                      </AnimatePresence>
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
