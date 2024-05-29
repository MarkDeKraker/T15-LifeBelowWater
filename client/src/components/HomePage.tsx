import ChapterCard from "./ChapterCard";
import plasticsoep from "../assets/plasticsoep.jpg";
import H2 from "./typography/H2";
import ChapterExtraText from "./ChapterExtraText";

export default function HomePage() {
  return (
    <div>
      <H2 className="my-10 text-center">Onderwerpen</H2>
      <div className="space-y-10">
        <ChapterCard
          title="Plastic soep"
          subTitle="Water is essentieel voor het leven op aarde, zowel voor mensen als de natuur. 
          Helaas wordt water bedreigd door plasticvervuiling, die ernstige schade aanricht aan zeeleven 
          en onze omgeving."
          image={plasticsoep}
          To="/probleem/aanpak/"
          expandedText= {<ChapterExtraText />}
        />
      </div>
    </div>
  );
}
