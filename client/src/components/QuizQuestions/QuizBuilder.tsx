import { motion } from "framer-motion";

import { useAnimationContext } from "../../context/AnimationContext";
import { useQuizBuilder } from "../../context/QuizBuilderContext";
import { StyledButton } from "../buttons/StyledButton";
import FormInput from "../form/FormInput";
import AddIcon from "../icons/AddIcon";
import Container from "../Layout/Container";
import Questions from "./Questions";
import { StyledSubmitButton } from "../buttons/StyledSubmitButton";
import SaveIcon from "../icons/SaveIcon";
import { useLocation } from "react-router-dom";

function QuizBuilder() {
  const {
    addQuestions,
    updateQuiz,
    saveQuiz,
    title,
    password,
    setTitle,
    setPassword,
  } = useQuizBuilder();
  const { routeVariants } = useAnimationContext();

  const location = useLocation();
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
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <FormInput
              type="text"
              name="password"
              placeholder="Wachtwoord"
              defaultValue={password}
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
            <StyledSubmitButton
              buttonStyle="tertiary"
              onClick={location.state ? updateQuiz : saveQuiz}
              className="text-gray-800 border-0 hover:underline-offset-2"
              icon={<SaveIcon />}
            >
              Quiz Opslaan
            </StyledSubmitButton>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}

export default QuizBuilder;
