import PlasticExampleComp from "./PlasticExampleComp";

import title from "../../misc/Title";
import banner from "../../assets/shutterstock_1772455853-scaled.webp";
import TopicLink from "./TopicComp";
import BannerComp from "./BannerComp";
import BackgroundSunComp from "./BackgroundSunComp";

import harmToAnimals from "../../misc/PlasticConsequences/HarmToAnimals";
import harmToAnimalsPicture from "../../misc/PlasticConsequences/HarmToAnimalsPicture";
import harmToAnimalsContinued from "../../misc/PlasticConsequences/HarmToAnimalsContinued";
import healthRisks from "../../misc/PlasticConsequences/HealthRisks";
import economicDamage from "../../misc/PlasticConsequences/EconomicDamage";
import climateEffect from "../../misc/PlasticConsequences/EffectOnClimateChange";
import increasedPollution from "../../misc/PlasticConsequences/IncreasedPollution";
import burningPlastic from "../../misc/PlasticConsequences/BurningPlasticWaste";
import plasticCausingClimateChange from "../../misc/PlasticConsequences/PlasticCausingClimateChange";
import conclusion from "../../misc/PlasticConsequences/Conclusion";

export default function PlasticConsequences() {
  return (
    <div className="sticky grid grid-cols-11 w-full h-full z-0 overflow-y-auto bg-gradient-b">

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
        bgColor="bg-blue-950"
        textColor="text-green-300"
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

      <BannerComp source={banner} alt={"Grote afbeelding dat plastic vervuiling in de oceaan en een schildpad laat zien"} />

      <BackgroundSunComp bg={"bg-white"} />

      <PlasticExampleComp children={harmToAnimals.divs} />

      <PlasticExampleComp children={harmToAnimalsPicture.divs} />

      <PlasticExampleComp children={harmToAnimalsContinued.divs} />

      <div className="col-start-2 col-span-9 space-y-5 mt-10">
        <PlasticExampleComp children={healthRisks.divs} />

        <PlasticExampleComp children={economicDamage.divs} />
      </div>

      <PlasticExampleComp children={climateEffect.divs} />

      <PlasticExampleComp children={increasedPollution.divs} />

      <PlasticExampleComp children={burningPlastic.divs} />

      <PlasticExampleComp children={plasticCausingClimateChange.divs} />

      <PlasticExampleComp children={conclusion.divs} />

    </div>
  );
}
