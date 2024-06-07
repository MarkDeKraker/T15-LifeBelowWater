import PlasticPageParentComp from "./PlasticPageParentComp.tsx";

import ContentCard from "../ContentCard.tsx";
import ContentCardWithoutExpand from "../ContentCardWithoutExpand.tsx";

import title from "../../misc/Title";
import banner from "../../assets/water-pollution@2x.jpg";
import TopicComp from "./TopicComp.tsx";
import BannerComp from "./BannerComp.tsx";
// import BackgroundSunComp from "./BackgroundSunComp.tsx";

import plasticProducts from "../../misc/PlasticProblem/PlasticProducts";
import plasticInnovations from "../../misc/PlasticProblem/PlasticInnovations";
import problemVideo from "../../misc/PlasticProblem/PlasticBeachVideo.tsx";
import plasticMoving from "../../misc/PlasticProblem/PlasticMoving";
import Microplastics from "../../misc/PlasticProblem/Microplastics";
import KeyFacts from "../../misc/PlasticProblem/KeyFacts";

export default function PlasticProblem() {
    return (
        <div className="flex flex-col items-center w-full h-full z-0 overflow-y-auto">

            <BannerComp source={banner} alt={"Grote afbeelding dat plastic vervuiling in de oceaan laat zien"}>
                {title.divs}
            </BannerComp>

            <TopicComp />

            <div className="p-10 flex flex-col items-center w-full z-0 space-y-20">

                <ContentCard
                    title={plasticProducts.title}
                    subTitle={plasticProducts.subTitle}
                    image={plasticProducts.image}
                    expandedText={plasticProducts.expandedText}
                />

                <ContentCard
                    subTitle={plasticInnovations.subTitle}
                    image={plasticInnovations.image}
                    expandedText={plasticInnovations.expandedText}
                />

                <PlasticPageParentComp children={problemVideo.divs} />

            </div>

            <div className="p-10 flex flex-col items-center w-full h-full z-0 space-y-20">
                <ContentCardWithoutExpand
                    title={plasticMoving.title}
                    subTitle={plasticMoving.subTitle}
                />
            </div>

            <div className="p-10 flex flex-col items-center w-full z-0 space-y-20 bg-gradient-a">
                <ContentCard
                    title={Microplastics.title}
                    subTitle={Microplastics.subTitle}
                    image={Microplastics.image}
                    expandedText={Microplastics.expandedText}
                />

                <ContentCardWithoutExpand
                    title={KeyFacts.title}
                    subText={KeyFacts.subText}
                />
            </div>

        </div>
    );
}
