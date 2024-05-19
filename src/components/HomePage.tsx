import ChapterCard from "./ChapterCard";
import plasticsoep from "../assets/plasticsoep.jpg";

export default function HomePage() {
  return (
    <>
      <h2 className="text-center text-2xl font-bold my-10 font-custom">
        Onderwerpen
      </h2>
      <div className="space-y-10">
        <ChapterCard
          title="Plastic soep"
          subTitle="Lorem ipsum dolar sit amet"
          image={plasticsoep}
        />
        <ChapterCard
          title="Plastic soep"
          subTitle="Lorem ipsum dolar sit amet"
          image={plasticsoep}
        />
        <ChapterCard
          title="Plastic soep"
          subTitle="Lorem ipsum dolar sit amet"
          image={plasticsoep}
        />
      </div>
    </>
  );
}
