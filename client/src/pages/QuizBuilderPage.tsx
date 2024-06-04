import QuizBuilder from '../components/QuizQuestions/QuizBuilder';
import { QuizProvider } from '../context/QuizBuilderContext';
import { useRequireAuth } from '../hooks/useRequireAuth';

function QuizBuilderPage() {
  useRequireAuth();

  return (
    <>
      <QuizProvider>
        <QuizBuilder />
      </QuizProvider>
    </>
  );
}

export default QuizBuilderPage;
