import PlasticPageParentComp from "./PlasticPageParentComp.tsx";

import title from "../../misc/Title";
import banner from "../../assets/plastic_cleanup_gettyimages-1179252601-1024x683.webp";
import TopicComp from "./TopicComp.tsx";
import BannerComp from "./BannerComp.tsx";
import BackgroundSunComp from "./BackgroundSunComp.tsx";

import innovations from "../../misc/PlasticApproach/Innovations";
import whatCanWeDoAboutIt from "../../misc/PlasticApproach/WhatCanWeDoAboutIt";
import cleanUp from "../../misc/PlasticApproach/CleanUp";
import supportLegislation from "../../misc/PlasticApproach/SupportLegislation";
import shareKnowledge from "../../misc/PlasticApproach/ShareKnowledge";
import conclusion from "../../misc/PlasticApproach/Conclusion";

export default function PlasticApproach() {
    return (
        <div className="sticky grid grid-cols-11 w-full h-full z-0 overflow-y-auto bg-gradient-c">

            <PlasticPageParentComp children={title.divs}/>

            <TopicComp />

            <BannerComp source={banner} alt={"Afbeelding van mensen die plastic op een strand opruimen"}/>

            <BackgroundSunComp bg={"bg-sun"}/>

            <PlasticPageParentComp children={innovations.divs}/>

            <PlasticPageParentComp children={whatCanWeDoAboutIt.divs}/>

            <PlasticPageParentComp children={cleanUp.divs}/>

            <PlasticPageParentComp children={supportLegislation.divs}/>

            <PlasticPageParentComp children={shareKnowledge.divs}/>

            <PlasticPageParentComp children={conclusion.divs}/>

        </div>
    );
}
