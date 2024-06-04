import { motion } from 'framer-motion';

import { useAnimationContext } from '../../context/AnimationContext';
import { useQuizBuilder } from '../../context/QuizBuilderContext';
import { StyledButton } from '../buttons/StyledButton';
import FormInput from '../form/FormInput';
import AddIcon from '../icons/AddIcon';
import Container from '../Layout/Container';
import Questions from './Questions';

function QuizBuilder() {
  const { addQuestions, saveQuiz, setTitle, setPassword } = useQuizBuilder();
  const { routeVariants } = useAnimationContext();

  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="mt-8"
    >
      <Container>
        <div className="p-5 border rounded-lg font-custom">
          <form className="flex flex-col space-y-4 quiz-fields">
            <FormInput
              type="text"
              name="title"
              placeholder="Voer titel in"
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <FormInput
              type="text"
              name="password"
              placeholder="Wachtwoord"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </form>

          <Questions />

          <div className="flex justify-between">
            <StyledButton
              buttonStyle="tertiary"
              onClick={addQuestions}
              icon={<AddIcon />}
            >
              Voeg vraag toe
            </StyledButton>
            <StyledButton
              buttonStyle="secondary"
              onClick={addQuestions}
              icon={<AddIcon />}
            >
              Genereer vraag
            </StyledButton>
            <button
              type="submit"
              onClick={saveQuiz}
              className="hover:underline"
            >
              Quiz Opslaan
            </button>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}

export default QuizBuilder;
