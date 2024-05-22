import PlasticExampleComp from "./PlasticExampleComp.tsx";

import title from "../../misc/Title";
import banner from "../../assets/water-pollution@2x.jpg";
import TopicLink from "./TopicComp.tsx";
import BannerComp from "./BannerComp.tsx";
import BackgroundSunComp from "./BackgroundSunComp.tsx";

import plasticProducts from "../../misc/PlasticProblem/PlasticProducts";
import plasticInnovations from "../../misc/PlasticProblem/PlasticInnovations";
import problemVideo from "../../misc/PlasticProblem/Video";
import plasticMoving from "../../misc/PlasticProblem/PlasticMoving";
import Microplastics from "../../misc/PlasticProblem/Microplastics";
import KeyFacts from "../../misc/PlasticProblem/KeyFacts";

export default function PlasticProblem() {
  return (
    <div className="sticky grid grid-cols-11 w-full h-full z-0 overflow-y-auto bg-gradient-a">

      <PlasticExampleComp children={title.divs} />

      <TopicLink
        to="/plastic/probleem"
        colStart="2"
        colEnd="5"
        bgColor="bg-blue-950"
        textColor="text-green-300"
        text="Het probleem"
      />
      <TopicLink
        to="/plastic/gevolgen"
        colStart="5"
        colEnd="8"
        bgColor="bg-cyan-950"
        textColor="text-altYellow"
        text="Gevolgen"
      />
      <TopicLink
        to="/plastic/aanpak"
        colStart="8"
        colEnd="11"
        bgColor="bg-cyan-950"
        textColor="text-altYellow"
        text="Aanpak"
      />

      <BannerComp source={banner} alt={"Grote afbeelding dat plastic vervuiling in de oceaan laat zien"} />

      <BackgroundSunComp bg={"bg-white"} />

      <PlasticExampleComp children={plasticProducts.divs} />

      <PlasticExampleComp children={plasticInnovations.divs} />

      <PlasticExampleComp children={problemVideo.divs} />

      <PlasticExampleComp children={plasticMoving.divs} />

      <PlasticExampleComp children={Microplastics.divs} />

      <PlasticExampleComp children={KeyFacts.divs} />

    </div>
  );
}
