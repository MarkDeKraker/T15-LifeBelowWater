import QuizOverview from "../components/QuizOverview";
import { useRequireAuth } from "../hooks/useRequireAuth";

export default function QuizOverviewPage() {
  useRequireAuth();

  return <QuizOverview />;
}
