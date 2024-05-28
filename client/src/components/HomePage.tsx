import ChapterCard from "./ChapterCard";
import plasticsoep from "../assets/plasticsoep.jpg";
import H2 from "./typography/H2";

export default function HomePage() {
  return (
    <>
      <H2 className="my-10 text-center">Onderwerpen</H2>
      <div className="space-y-10">
        <ChapterCard
          title="Plastic soep"
          subTitle="Lorem ipsum dolar sit amet"
          image={plasticsoep}
          To="/probleem/aanpak/"
        />
      </div>
    </>
  );
}
