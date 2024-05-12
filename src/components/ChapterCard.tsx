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
          <p className="text-2xl">{props.title}</p>
          <p className="font-normal text-[#666]">{props.subTitle}</p>
          <button className="bg-[#bfdbfe] p-2 w-60 rounded-full mt-5">
            Ga naar hoofdstuk
          </button>
        </div>
      </div>
    </div>
  );
}
