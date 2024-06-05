import QuizBuilderEdit from "../components/QuizQuestions/QuizBuilderEdit";
import { useRequireAuth } from "../hooks/useRequireAuth";

function QuizBuilderEditPage() {
  useRequireAuth();

  return (
    <>
      <QuizBuilderEdit />
    </>
  );
}

export default QuizBuilderEditPage;
