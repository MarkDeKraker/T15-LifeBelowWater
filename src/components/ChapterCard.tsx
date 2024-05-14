type Params = {
  title: string;
  subTitle: string;
  image: string;
};

export default function ChapterCard(props: Params) {
  return (
    <div className="bg-white p-5 shadow-lg max-w-5xl rounded-lg mx-auto">
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
          <button className="bg-secondary p-2 w-60 rounded-full mt-5 font-custom">
            Ga naar onderwerp
          </button>
        </div>
      </div>
    </div>
  );
}
