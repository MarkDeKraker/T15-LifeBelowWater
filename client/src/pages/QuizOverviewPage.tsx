import QuizBuilder from "../components/QuizQuestions/QuizBuilder";
import { QuizProvider } from "../context/QuizBuilderContext";
import { useRequireAuth } from "../hooks/useRequireAuth";

export default function QuizOverviewPage() {
  useRequireAuth();

  return (
    <QuizProvider>
      <QuizBuilder />
    </QuizProvider>
  );
}
