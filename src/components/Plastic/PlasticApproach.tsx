import PlasticExampleComp from "./PlasticExampleComp";

import title from "../../misc/Title";
import banner from "../../assets/plastic_cleanup_gettyimages-1179252601-1024x683.webp";
import TopicLink from "./TopicComp";
import BannerComp from "./BannerComp";
import BackgroundSunComp from "./BackgroundSunComp";

import innovations from "../../misc/PlasticApproach/Innovations";
import whatCanWeDoAboutIt from "../../misc/PlasticApproach/WhatCanWeDoAboutIt";
import cleanUp from "../../misc/PlasticApproach/CleanUp";
import supportLegislation from "../../misc/PlasticApproach/SupportLegislation";
import shareKnowledge from "../../misc/PlasticApproach/ShareKnowledge";
import conclusion from "../../misc/PlasticApproach/Conclusion";

export default function PlasticApproach() {
  return (
    <div className="sticky grid grid-cols-11 w-full h-full z-0 overflow-y-auto bg-gradient-c">

      <PlasticExampleComp children={title.divs} />

      <TopicLink
        to="/plastic/probleem"
        colStart="2"
        colEnd="5"
        bgColor="bg-cyan-950"
        textColor="text-altYellow"
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
        bgColor="bg-blue-950"
        textColor="text-green-300"
        text="Aanpak"
      />

      <BannerComp source={banner} alt={"Afbeelding van mensen die plastic op een strand opruimen"} />

      <BackgroundSunComp bg={"bg-sun"} />

      <PlasticExampleComp children={innovations.divs} />

      <PlasticExampleComp children={whatCanWeDoAboutIt.divs} />

      <PlasticExampleComp children={cleanUp.divs} />

      <PlasticExampleComp children={supportLegislation.divs} />

      <PlasticExampleComp children={shareKnowledge.divs} />

      <PlasticExampleComp children={conclusion.divs} />

    </div>
  );
}
