import { motion } from "framer-motion";

import PlasticPageParentComp from "./PlasticPageParentComp.tsx";

import ContentCard from "../ContentCard.tsx";
import ContentCardWithoutExpand from "../ContentCardWithoutExpand.tsx";
import ContentCardWithImageWithoutExpand from "../ContentCardWithImageWithoutExpand.tsx";

import title from "../../misc/Title";
import banner from "../../assets/shutterstock_1772455853-scaled.webp";
import TopicComp from "./TopicComp.tsx";
import BannerComp from "./BannerComp.tsx";
// import BackgroundSunComp from "./BackgroundSunComp.tsx";

import harmToAnimals from "../../misc/PlasticConsequences/HarmToAnimals";
// import harmToAnimalsPicture from "../../misc/PlasticConsequences/HarmToAnimalsPicture";
// import harmToAnimalsContinued from "../../misc/PlasticConsequences/HarmToAnimalsContinued";
import healthRisks from "../../misc/PlasticConsequences/HealthRisks";
import economicDamage from "../../misc/PlasticConsequences/EconomicDamage";
import climateEffect from "../../misc/PlasticConsequences/EffectOnClimateChange";
import increasedPollution from "../../misc/PlasticConsequences/IncreasedPollution";
import burningPlastic from "../../misc/PlasticConsequences/BurningPlasticWaste";
import plasticCausingClimateChange from "../../misc/PlasticConsequences/PlasticCausingClimateChange.tsx";
import MicroplasticsVideo from "../../misc/PlasticConsequences/MicroplasticsVideo.tsx";
import conclusion from "../../misc/PlasticConsequences/Conclusion.tsx";

export default function PlasticConsequences() {
    return (
        <motion.div className="flex flex-col items-center w-full h-full z-0 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, delay: 0.5, ease: "easeInOut" }}
        >

            <BannerComp source={banner} alt={"Grote afbeelding dat plastic vervuiling in de oceaan en een schildpad laat zien"}>
                {title.divs}
            </BannerComp>

            <TopicComp />

            <div className="p-10 flex flex-col items-center w-full z-0 space-y-20">

                <ContentCard
                    title={harmToAnimals.title}
                    subTitle={harmToAnimals.subTitle}
                    image={harmToAnimals.image}
                    expandedText={harmToAnimals.expandedText}
                />

                <div className="w-full max-w-5xl space-y-5 mt-10">
                    <PlasticPageParentComp children={healthRisks.divs} />

                    <PlasticPageParentComp children={economicDamage.divs} />
                </div>

                <ContentCardWithImageWithoutExpand
                    title={climateEffect.title}
                    subTitle={climateEffect.subTitle}
                    image={climateEffect.image}
                />

                <ContentCardWithoutExpand
                    title={increasedPollution.title}
                    subTitle={increasedPollution.subTitle}
                />

                <ContentCardWithImageWithoutExpand
                    title={burningPlastic.title}
                    subTitle={burningPlastic.subTitle}
                    image={burningPlastic.image}
                />

                <ContentCard
                    title={plasticCausingClimateChange.title}
                    subTitle={plasticCausingClimateChange.subTitle}
                    image={plasticCausingClimateChange.image}
                    expandedText={plasticCausingClimateChange.expandedText}
                />

                <PlasticPageParentComp children={MicroplasticsVideo.divs} />

                <PlasticPageParentComp children={conclusion.divs} />


            </div>

        </motion.div>
        // <div className="sticky grid grid-cols-11 w-full h-full z-0 overflow-y-auto bg-gradient-b">

        //     <PlasticPageParentComp children={title.divs}/>

        //     <TopicComp />

        //     <BannerComp source={banner}
        //                 alt={"Grote afbeelding dat plastic vervuiling in de oceaan en een schildpad laat zien"}/>

        //     <BackgroundSunComp bg={"bg-white"}/>

        //     <PlasticPageParentComp children={harmToAnimals.divs}/>

        //     <PlasticPageParentComp children={harmToAnimalsPicture.divs}/>

        //     <PlasticPageParentComp children={harmToAnimalsContinued.divs}/>

        //     <div className="col-start-2 col-span-9 space-y-5 mt-10">
        //         <PlasticPageParentComp children={healthRisks.divs}/>

        //         <PlasticPageParentComp children={economicDamage.divs}/>
        //     </div>

        //     <PlasticPageParentComp children={climateEffect.divs}/>

        //     <PlasticPageParentComp children={increasedPollution.divs}/>

        //     <PlasticPageParentComp children={burningPlastic.divs}/>

        //     <PlasticPageParentComp children={plasticCausingClimateChange.divs}/>

        //     <PlasticPageParentComp children={conclusion.divs}/>

        // </div>
    );
}
