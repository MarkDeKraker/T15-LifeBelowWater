import Layout from "./components/Layout";
import banner from "./assets/pexels-jeremy-bishop-1260133-2397651.jpg";
// import image1 from "./assets/101680273_ngm_0618_plastics_008.jpg.webp";
// import image2 from "./assets/101683652_ngm_0618_plastics_007.jpg.webp";

export default function Plastic_1() {

    return (
        <Layout>
            <div className="sticky grid grid-cols-11 w-full h-full z-0 overflow-y-auto" style={{
                "background": "linear-gradient(180deg, rgba(147,203,199,1) 0%, rgba(105,138,136,1) 55%, rgba(93,146,149,1) 60%, rgba(39,49,42,1) 100%)",
                "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#93cbc7\",endColorstr=\"#27312a\",GradientType=1)"
            }}>
                <div
                    id={"title"}
                    className="col-start-3 col-end-10 relative text-center text-black text-6xl font-semibold italic font-['Roboto']">
                    TITEL OVER PROBLEEM OCEAAN
                </div>

                <a href={"/"} id={"Topic1"} className="colstart-2 col-end-5 col-span-3 z-20">
                    <div id={"Topic1_background"}
                         className="w-full h-14 bg-blue-950 hover:text-white grid place-items-center border border-amber-200">
                        <div
                            className="text-center text-green-300 text-lg font-semibold font-['Montserrat'] hover:text-white">
                            Het probleem
                        </div>
                    </div>
                </a>
                <a href={"/"} id={"Topic2"} className="colstart-5 col-span-3 z-20">
                    <div id={"Topic2_background"}
                         className="w-full h-14 bg-cyan-950 hover:bg-blue-950 hover:text-white grid place-items-center border border-amber-200">
                        <div
                            className="text-center text-alt_yellow text-lg font-semibold font-['Montserrat'] hover:text-white">
                            Gevolgen
                        </div>
                    </div>
                </a>
                <a href={"/"} id={"Topic3"} className="colstart-8 col-span-3 z-20">
                    <div id={"Topic3_background"}
                         className="w-full h-14 bg-cyan-950 hover:bg-blue-950 hover:text-white grid place-items-center border border-amber-200">
                        <div
                            className="text-center text-alt_yellow text-lg font-semibold font-['Montserrat'] hover:text-white">
                            Aanpak
                        </div>
                    </div>
                </a>
                <img className="col-start-2 col-end-11 relative z-20"
                     src={banner} alt={"banner image"}
                />
                <div className="col-start-6 fixed top-[40%] left-[45%] items-center justify-center h-screen z-10">
                    <div id={"background_sun"}
                         className="w-48 h-24 bg-white rounded-tl-full rounded-tr-full blur-md z-10"
                    />
                </div>

                <div
                    id={"information_block"}
                    className="col-start-3 col-span-7 h-['300px'] mt-5 bg-zinc-300 rounded-lg border-4 border-black z-20">

                    <div
                        id={"information_text"}
                        className="col-start-4 relative z-20 space-y-1 pl-3 clear-right">

                        <img className=" h-60 float-right inline-block ml-auto p-3 rounded-[40px]"
                             src="https://via.placeholder.com/429x459" alt={"information_image"}/>

                        <p className="text-cyan-950 text-sm font-semibold font-['Montserrat'] text-wrap pt-3">Plastic,
                            gemaakt van fossiele brandstoffen, bestaat pas iets meer dan honderd jaar, maar heeft ons
                            leven volledig veranderd. Je ziet plastic al over je heen:
                        </p>
                        <br/>
                        <span className="text-cyan-950 text-xs font-semibold font-['Montserrat'] space-y-0.5">
                            <li>Plastic flessen voor water en frisdrank.</li>
                            <li>Plastic boodschappentassen.</li>
                            <li>Plastic verpakkingen voor voedsel, zoals bakjes, folie en zakken.</li>
                            <li>Plastic tandenborstels en tandpastatubes.</li>
                            <li>Plastic rietjes.</li>
                            <li>Plastic speelgoed.</li>
                            <li>Plastic wegwerp bestek.</li>
                        </span>
                    </div>

                </div>

                <div
                    id={"information_block_2"}
                    className="col-start-3 col-span-7 h-['300px'] mt-5 bg-zinc-300 rounded-lg border-4 border-black z-20">

                    <div
                        id={"information_text_2"}
                        className="col-start-4 relative z-20 space-y-1 pl-3 clear-right">

                        <img className=" h-60 float-right inline-block ml-auto p-3 rounded-[40px]"
                             src="https://via.placeholder.com/429x459" alt={"information_image"}/>

                        <p className="text-cyan-950 text-sm font-semibold font-['Montserrat'] text-wrap py-3">Plastic
                            heeft de dokters geholpen met spullen die levens redden, het heeft het mogelijk gemaakt om
                            naar de ruimte te gaan, en het heeft auto's en vliegtuigen lichter gemaakt, waardoor ze
                            minder benzine gebruiken en minder vieze lucht maken.<br/><br/>Plastic wordt voor zoveel
                            dingen gebruikt dat het moeilijk is om iets te bedenken waarin geen plastic wordt
                            gebruikt.<br/><br/>Plastic is handig omdat we het voor veel dingen kunnen gebruiken, maar
                            soms gooien we het na één keer gebruiken weg. Dit gebeurt vaak met plastic zakken en
                            verpakkingen voor ons eten. Ook al gebruiken we ze maar heel kort, kan het honderden jaren
                            duren voordat plastic volledig is afgebroken. En dat is niet zo goed voor het milieu.</p>
                    </div>

                </div>

                <div className="col-start-3 p-20 inline-block bg-tertiary rounded-full mt-10 z-20"/>
                <div className="col-start-6 p-20 inline-block bg-tertiary rounded-full mt-10 z-20"/>
                <div className="col-start-9 p-20 inline-block bg-tertiary rounded-full mt-10 z-20"/>

                <img className="col-start-4 col-span-5 mt-10 z-20 relative"
                     src="https://via.placeholder.com/1174x566"
                     alt={"image of turtles swimming next to a plastic bag"}/>

            </div>
        </Layout>
    );
}
