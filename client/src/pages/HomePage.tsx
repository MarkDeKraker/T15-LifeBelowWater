import plasticsoep from "../assets/plasticsoep.jpg";
import ChapterCard from "../components/ChapterCard";
import H2 from "../components/typography/H2";
import { useRequireAuth } from "../hooks/useRequireAuth";

export default function HomePage() {
  useRequireAuth();
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
