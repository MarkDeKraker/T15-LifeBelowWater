import PlasticPageParentComp from "./PlasticPageParentComp.tsx";

import title from "../../misc/Title";
import banner from "../../assets/water-pollution@2x.jpg";
import TopicComp from "./TopicComp.tsx";
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

            <PlasticPageParentComp children={title.divs}/>

            <TopicComp />

            <BannerComp source={banner} alt={"Grote afbeelding dat plastic vervuiling in de oceaan laat zien"}/>

            <BackgroundSunComp bg={"bg-white"}/>

            <PlasticPageParentComp children={plasticProducts.divs}/>

            <PlasticPageParentComp children={plasticInnovations.divs}/>

            <PlasticPageParentComp children={problemVideo.divs}/>

            <PlasticPageParentComp children={plasticMoving.divs}/>

            <PlasticPageParentComp children={Microplastics.divs}/>

            <PlasticPageParentComp children={KeyFacts.divs}/>

        </div>
    );
}
