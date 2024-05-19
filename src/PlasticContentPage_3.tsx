import {Link} from "react-router-dom";
import banner from "./assets/plastic_cleanup_gettyimages-1179252601-1024x683.webp";
import ocean_cleanup from "./assets/TheOceanCleanup_October2nd_Press_Briefing_System001B-24.jpg.webp";
import recycling_plastic from "./assets/72069-container-garbage-symbol-recycling-plastic-environmental-protection.png";
import plastic_cleanup from "./assets/plastic-cleanup.jpg"
import clean_ocean from "./assets/Clean-Ocean-960x640.jpeg"

import { motion } from "framer-motion";

export default function Plastic_3() {

    return (
            <div className="sticky grid grid-cols-11 w-full h-full z-0  overflow-y-auto" style={{
                "background": "linear-gradient(180deg, rgba(100,209,255,1) 0%, rgba(74,151,184,1) 55%, rgba(15,73,186,1) 60%, rgba(4,19,49,1) 100%)",
                "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#64d1ff\",endColorstr=\"#041331\",GradientType=1)"
            }}>
                <div
                    id={"title"}
                    className="col-start-3 col-end-10 relative text-center text-black text-6xl font-semibold italic font-['Roboto'] mb-5">
                    PLASTIC VERVUILING IN DE OCEAAN
                </div>

                <Link to={"/plastic/probleem"} id={"Topic1"} className="colstart-2 col-end-5 col-span-3 z-20">
                    <div id={"Topic1_background"}
                         className="w-full h-14 bg-cyan-950 hover:text-white grid place-items-center border border-amber-200">
                        <div
                            className="text-center text-alt_yellow text-lg font-semibold font-['Montserrat'] hover:text-white">
                            Het probleem
                        </div>
                    </div>
                </Link>
                <Link to={"/plastic/gevolgen"} id={"Topic2"} className="colstart-5 col-span-3 z-20">
                    <div id={"Topic2_background"}
                         className="w-full h-14 bg-cyan-950 hover:bg-blue-950 hover:text-white grid place-items-center border border-amber-200">
                        <div
                            className="text-center text-alt_yellow text-lg font-semibold font-['Montserrat'] hover:text-white">
                            Gevolgen
                        </div>
                    </div>
                </Link>
                <Link to={"/plastic/aanpak"} id={"Topic3"} className="colstart-8 col-span-3 z-20">
                    <div id={"Topic3_background"}
                         className="w-full h-14 bg-blue-950 hover:bg-blue-950 hover:text-white grid place-items-center border border-amber-200">
                        <div
                            className="text-center text-green-300 text-lg font-semibold font-['Montserrat'] hover:text-white">
                            Aanpak
                        </div>
                    </div>
                </Link>

                <img className="col-start-2 col-end-11 relative z-20"
                     src={banner} alt={"Afbeelding van mensen die plastic op een strand opruimen"}
                />
                <div className="col-start-6 fixed top-[40%] left-[45%] items-center justify-center h-screen z-10">
                    <div id={"background_sun"}
                         className="w-48 h-24 rounded-tl-full rounded-tr-full blur-md z-10"
                         style={{"background": "#F1D95B"}}
                    />
                </div>

                <motion.div
                    id={"information_block"}
                    className="col-start-2 col-span-9 h-['300px'] mt-10 bg-zinc-300 rounded-lg border-4 border-black z-20"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0 }}>

                    <div
                        id={"information_text"}
                        className="col-start-4 relative z-20 space-y-1 px-3 clear-right">

                        <h2 className="text-cyan-950 text-md font-bold font-['Montserrat'] text-wrap py-3">
                            Innovatie
                        </h2>

                        <p className="text-cyan-950 text-sm font-semibold font-['Montserrat'] text-wrap py-3">Het is
                            moeilijk om plastic uit de oceaan te halen als het erin is gekomen. Niet onmogelijk, maar
                            wel moeilijk. Nieuwe technologieën stellen ons in staat om grotere stukken afval uit de
                            oceaan te halen. Bedrijven werken aan het ontwikkelen van biologisch afbreekbare
                            alternatieven voor plastic en technologieën om plasticafval op te ruimen, zoals <a
                                href={"https://theoceancleanup.com/"} className="underline text-cyan-700">drijvende
                                barrières en op afval gerichte schepen.</a>

                            <img className="inline-block ml-auto p-3 rounded-[40px]"
                                 src={ocean_cleanup} alt={"Afbeelding van een drijvende barrière die plastic uit de oceaan haalt"}/>

                        </p>

                        <img className="bg-black inline-block float-right h-60 ml-auto p-4 rounded-[40px]"
                             src={recycling_plastic} alt={"Afbeelding van een recyclebakje vol met plastic flesjes"}/>

                        <p className="text-cyan-950 text-sm font-semibold font-['Montserrat'] text-wrap p-3">
                            Kleine plastic voorwerpen en microplastics zijn bijna onmogelijk te bereiken, vooral als ze
                            diep in de oceaan zijn. Daarom hebben veel wetenschappers en natuurbeschermers verklaard dat
                            de beste oplossing is om te voorkomen dat plastic afval überhaupt in rivieren en zeeën
                            terechtkomt.

                            <br/><br/>

                            Dit kan worden bereikt door verbetering van onze afvalbeheersystemen en de invoering van
                            recycling. Bovendien is het essentieel om het ontwerp en het gebruik van wegwerpverpakkingen
                            te heroverwegen en de productie van onnodige eenmalige (single-use) plastic producten te
                            verminderen.

                            <br/><br/>
                            <br/><br/>

                        </p>

                    </div>

                </motion.div>

                <motion.div
                    id={"information_block_2"}
                    className="col-start-3 col-span-7 h-['300px'] mt-5 bg-zinc-300 rounded-lg border-4 border-black z-20"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}>

                    <div
                        id={"information_text_2"}
                        className="col-start-4 relative z-20 space-y-1 px-3 clear-right">

                        <h2 className="text-cyan-950 text-md font-bold font-['Montserrat'] text-wrap py-3">
                            Wat kunnen wij zelf eraan doen?
                        </h2>

                        <p className="text-cyan-950 text-sm font-semibold font-['Montserrat'] text-wrap py-3">Plasticvervuiling
                            is een wereldwijd probleem, maar iedereen kan een bijdrage doen om plastic uit de oceaan te
                            houden! Hier zijn wat mogelijkheden die je zelf kunt aannemen en delen met de mensen om je
                            heen:

                            <br/>

                            <h3 className="text-cyan-950 text-sm font-bold font-['Montserrat'] text-wrap pt-3 underline">
                                Wees bewust van het plastic die je gebruikt
                            </h3>

                            Denk eens aan alle plastic items die je gebruikt in je dagelijks leven. Kun je ze allemaal
                            tellen? Meer bewust worden van de manier waarop je plastic gebruikt is een geweldig begin om
                            plastic afval te verminderen.

                            <br/><br/>

                            We weten dat gewoontes moeilijk te veranderen zijn, maar zelfs een kleine individuele inzet
                            kan een verschil maken, vooral als we het hebben over de eenmalige plastics die we eerder
                            hebben genoemd, die volgens gegevens van het Europees Parlement verantwoordelijk zijn voor
                            49% van alle mariene vervuiling.

                            <br/><br/>

                            Hier zijn wat nieuwe gewoonten waar je inspiratie uit kunt halen:

                            <br/><br/>

                            <span
                                className="text-cyan-950 text-xs font-semibold font-['Montserrat'] space-y-0.5 float-left pl-4 -indent-4">
                                <li>Verminder het gebruik van wegwerpbare plastic bekers, borden, bestek en flessen. Neem bijvoorbeeld je eigen herbruikbare fles mee naar school.</li>
                                <li>Kies metalen of glazen voedselcontainers en opslagopties in plaats van plastic.</li>
                                <li>Kies voor snacks en voedsel dat niet in plastic verpakt is, zoals fruit dat in een eigen schil zit.</li>
                                <li>Gebruik geen plastic rietjes en roerstaafjes, maar kies voor herbruikbare of papieren alternatieven.</li>
                                <li>Ruil plastic tassen in voor herbruikbare tassen, gemaakt van stof of vezel.</li>
                                <li className="font-bold">Moedig anderen aan om ook minder plastic te gebruiken door het goede voorbeeld te geven en hen te informeren over de voordelen van plasticvrije alternatieven.</li>
                                <br/>
                            </span>
                        </p>
                    </div>

                </motion.div>

                <motion.div
                    id={"information_block_3"}
                    className="col-start-3 col-span-7 h-['300px'] mt-5 bg-zinc-300 rounded-lg border-4 border-black z-20"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}>

                    <div
                        id={"information_text_3"}
                        className="col-start-4 relative z-20 space-y-1 px-3 clear-right">

                        <p className="text-cyan-950 text-sm font-semibold font-['Montserrat'] text-wrap py-3">

                            <h3 className="text-cyan-950 text-sm font-bold font-['Montserrat'] text-wrap underline">
                                Neem deel aan (of organiseer!) een opruimactie in de buurt
                            </h3>

                            <img className="p-3 rounded-[40px]"
                                 src={plastic_cleanup} alt={"Afbeelding van een groep kinderen die plastic uit water opruimen"}/>

                            Als je bij een zee of rivier woont, kun je je vrijwillig aanmelden om zwerfvuil op te ruimen
                            in je lokale gemeenschap, waardoor je plastics uit de waterwegen verwijdert en voorkomt dat
                            ze überhaupt in de oceaan terechtkomen. Er zijn veel organisaties waarbij je je kunt
                            aansluiten, of je kunt het gewoon in het weekend doen met je vrienden en familie. Alle
                            beetjes helpen!
                        </p>
                    </div>

                </motion.div>

                <motion.div
                    id={"information_block_4"}
                    className="col-start-3 col-span-7 h-['300px'] mt-5 bg-zinc-300 rounded-lg border-4 border-black z-20"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}>

                    <div
                        id={"information_text_4"}
                        className="col-start-4 relative z-20 space-y-1 px-3 clear-right">

                        <p className="text-cyan-950 text-sm font-semibold font-['Montserrat'] text-wrap py-3">

                            <h3 className="text-cyan-950 text-sm font-bold font-['Montserrat'] text-wrap pb-3 underline">
                                Ondersteun de juiste wetgeving en regelgeving
                            </h3>

                            Veel landen hebben wetten aangenomen om plasticgebruik te verminderen en afvalbeheer te
                            verbeteren. Dit gaat over het verbieden van bepaalde plastic producten, zoals
                            wegwerpplastic, en het implementeren van recyclingprogramma's.

                            <br/><br/>

                            Het is essentieel dat je wetgeving ondersteunt die gericht is op het verminderen van het
                            gebruik en de productie van plastic, het verbeteren van recyclingfaciliteiten en het beter
                            beheren van afval in het algemeen. Als jonge leerling mag jij zelf nog niet stemmen,
                            maar je kunt wel:

                            <br/><br/>

                            <span
                                className="text-cyan-950 text-xs font-semibold font-['Montserrat'] space-y-0.5 float-left pl-4 -indent-4">
                                <li>Brieven schrijven aan lokale overheden om je bezorgdheid te delen en te pleiten voor strengere wetten tegen plasticvervuiling.</li>
                                <li>Deelnemen aan petities of zelf petities starten om steun te verzamelen voor wetten en regels die plasticvermindering bevorderen.</li>
                                <li>Anderen informeren over het belang van wetgeving tegen plasticvervuiling en moedig hen aan om ook actie te ondernemen.</li>
                                <br/>
                            </span>
                        </p>
                    </div>

                </motion.div>

                <motion.div
                    id={"information_block_5"}
                    className="col-start-3 col-span-7 h-['300px'] mt-5 bg-zinc-300 rounded-lg border-4 border-black z-20"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}>

                    <div
                        id={"information_text_5"}
                        className="col-start-4 relative z-20 space-y-1 px-3 clear-right">

                        <p className="text-cyan-950 text-sm font-semibold font-['Montserrat'] text-wrap py-3">

                            <h3 className="text-cyan-950 text-sm font-bold font-['Montserrat'] text-wrap pb-3 underline">
                                Deel je kennis!
                            </h3>

                            Je hebt nu veel geleerd over de impact van plasticvervuiling op het milieu en de oceanen.
                            Als jij ook verandering wilt zien, helpt het enorm om je kennis met vrienden en familie te
                            delen. Hiermee worden steeds meer mensen bewust van het probleem en wordt er mee actie
                            genomen om het probleem te bestrijden.
                        </p>
                    </div>

                </motion.div>


                <motion.div
                    id={"information_block_6"}
                    className="col-start-2 col-span-9 h-['300px'] mt-10 bg-green-300 rounded-lg border-4 border-black z-20"
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0 }}>

                    <img className="col-start-2 col-span-9 z-20 relative"
                         src={clean_ocean}
                         alt={"Afbeelding van water met zonneschijn in de achtergrond"}/>

                    <div
                        id={"information_text_6"}
                        className="col-start-4 relative z-20 space-y-1 px-3 clear-right">

                        <p className="text-cyan-950 font-bold font-['Montserrat'] text-wrap text-center py-3">Het
                            verminderen van plasticvervuiling is een belangrijke taak waarbij de hele wereld moet
                            samenwerken, van individuele acties tot internationale samenwerking en technologische
                            innovatie. De gevolgen van plasticvervuiling treffen de hele planeet en haar bewoners: het
                            bedreigt de gezondheid van de oceanen, de dieren die erin leven, de veiligheid en kwaliteit
                            van ons voedsel, onze gezondheid, toerisme aan de kust, en draagt bij aan
                            klimaatverandering.

                        </p>
                    </div>

                </motion.div>

            </div>
    );
}
