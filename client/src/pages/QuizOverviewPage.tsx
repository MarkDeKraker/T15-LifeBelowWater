import MockQuiz from "../components/QuizQuestions/Mockquiz";
import { QuizProvider } from "../context/QuizBuilderContext";
import { useRequireAuth } from "../hooks/useRequireAuth";

export default function QuizOverviewPage() {
  useRequireAuth();

  return (
    <QuizProvider>
      <MockQuiz />
    </QuizProvider>
  );
}
