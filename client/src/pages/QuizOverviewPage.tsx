import QuizOverview from "../components/quiz/QuizOverview";
import { useRequireAuth } from "../hooks/useRequireAuth";

export default function QuizOverviewPage() {
  useRequireAuth();

  return <QuizOverview />;
}
