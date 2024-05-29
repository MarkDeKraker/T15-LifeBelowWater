import SlugValidation from '../components/Plastic/SlugValidation';
import { useRequireAuth } from '../hooks/useRequireAuth';

/*
Dit is de pagina wanneer de password correct is. De gebruiker wordt naar deze pagina doorgestuurd.
*/

function QuizLoginPage() {
  useRequireAuth();

  return <SlugValidation />;
}

export default QuizLoginPage;
