import QuizzesOverview from "../components/quiz/QuizzesOverview";
import { useRequireAuth } from "../hooks/useRequireAuth";

export default function QuizOverviewPage() {
  useRequireAuth();

  return <QuizzesOverview />;
}
