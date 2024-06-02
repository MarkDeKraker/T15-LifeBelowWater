import { NavigateButton } from "../buttons/NavigateButton";
import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";

export default function QuizCompleted() {
  const size = useWindowSize();

  return (
    <div className="max-w-4xl w-full mx-auto my-auto p-6 rounded-lg shadow-lg overflow-auto ">
      <h1 className="text-2xl font-bold mb-4 text-center font-custom">
        Bedankt voor het invullen van de quiz
      </h1>
      <p className="text-lg text-center">
        Wacht op de docent voor verdere instructies!
      </p>
      <div className="flex justify-center">
        <NavigateButton
          buttonStyle="secondary"
          To="/"
          children="Terug naar hoofd pagina"
        />
      </div>
      <Confetti width={size.width!} height={size.height!} />
    </div>
  );
}
