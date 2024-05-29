import Quiz from '../components/quiz/Quiz';
import { useRequireAuth } from '../hooks/useRequireAuth';

/*
Dit is de pagina wanneer de password correct is. De gebruiker wordt naar deze pagina doorgestuurd.
*/

function QuizPage() {
  useRequireAuth();

  return <Quiz />;
}

export default QuizPage;
