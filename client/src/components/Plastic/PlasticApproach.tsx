import { motion } from "framer-motion";

import PlasticPageParentComp from "./PlasticPageParentComp.tsx";

import ContentCard from "../ContentCard.tsx";
import ContentCardWithoutExpand from "../ContentCardWithoutExpand.tsx";
import ContentCardWithImageWithoutExpand from "../ContentCardWithImageWithoutExpand.tsx";

import title from "../../misc/Title";
import banner from "../../assets/plastic_cleanup_gettyimages-1179252601-1024x683.webp";
import TopicComp from "./TopicComp.tsx";
import BannerComp from "./BannerComp.tsx";
// import BackgroundSunComp from "./BackgroundSunComp.tsx";

import innovations from "../../misc/PlasticApproach/Innovations";
import whatCanWeDoAboutIt from "../../misc/PlasticApproach/WhatCanWeDoAboutIt";
import cleanUp from "../../misc/PlasticApproach/CleanUp";
import supportLegislation from "../../misc/PlasticApproach/SupportLegislation";
import shareKnowledge from "../../misc/PlasticApproach/ShareKnowledge";
import conclusion from "../../misc/PlasticApproach/Conclusion";

export default function PlasticApproach() {
    return (
        <motion.div className="flex flex-col items-center w-full h-full z-0 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, delay: 0.5, ease: "easeInOut" }}
        >

            <BannerComp source={banner} alt={"Afbeelding van mensen die plastic op een strand opruimen"}>
                {title.divs}
            </BannerComp>

            <TopicComp />

            <div className="p-10 flex flex-col items-center w-full z-0 space-y-20">

                <ContentCard
                    title={innovations.title}
                    subTitle={innovations.subTitle}
                    image={innovations.image}
                    expandedText={innovations.expandedText}
                />

                <ContentCard
                    title={whatCanWeDoAboutIt.title}
                    subTitle={whatCanWeDoAboutIt.subTitle}
                    image={whatCanWeDoAboutIt.image}
                    expandedText={whatCanWeDoAboutIt.expandedText}
                />

                <ContentCardWithImageWithoutExpand
                    title={cleanUp.title}
                    subTitle={cleanUp.subTitle}
                    image={cleanUp.image}
                />

                <ContentCardWithoutExpand
                    title={supportLegislation.title}
                    subText={supportLegislation.subText}
                />

                <ContentCardWithoutExpand
                    title={shareKnowledge.title}
                    subText={shareKnowledge.subText}
                />

            </div>

            <div className="flex flex-col items-center w-full h-auto z-0 space-y-20">
                <PlasticPageParentComp children={conclusion.divs} />
            </div>

            {/* <div className="sticky grid grid-cols-11 w-full h-full z-0 overflow-y-auto bg-gradient-c">

                <PlasticPageParentComp children={title.divs} />

                <TopicComp />

                <BannerComp source={banner} alt={"Afbeelding van mensen die plastic op een strand opruimen"} />

                <BackgroundSunComp bg={"bg-sun"} />

                <PlasticPageParentComp children={innovations.divs} />

                <PlasticPageParentComp children={whatCanWeDoAboutIt.divs} />

                <PlasticPageParentComp children={cleanUp.divs} />

                <PlasticPageParentComp children={supportLegislation.divs} />

                <PlasticPageParentComp children={shareKnowledge.divs} />*/}


        </motion.div>
    );
}
