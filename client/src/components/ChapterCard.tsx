import { NavigateButton } from "./buttons/NavigateButton";
type Params = {
  title: string;
  subTitle: string;
  image: string;
};

export default function ChapterCard(props: Params) {
  return (
    <div className="max-w-5xl p-5 mx-auto bg-white rounded-lg shadow-lg">
      <div className="flex space-x-4">
        <div>
          <img
            className="w-[389px] h-[165px] flex-shrink-0"
            src={props.image}
          />
        </div>
        <div className="my-auto">
          <p className="text-2xl font-custom">{props.title}</p>
          <p className="font-normal text-[#666] font-custom">
            {props.subTitle}
          </p>
          <NavigateButton
            buttonStyle="secondary"
            To="/plastic/probleem"
            children={"Ga naar onderwerp"}
          />
        </div>
      </div>
    </div>
  );
}
