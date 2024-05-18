import Layout from "./components/Layout";
import {Link} from "react-router-dom";
import banner from "./assets/shutterstock_1772455853-scaled.webp";
import image1 from "./assets/101680273_ngm_0618_plastics_008_trim.jpg";
import microplastics from "./assets/38068390.jpg";
import plastic_economics from "./assets/0df3b6-iStock-1151212399.jpg";
import climate_pic from "./assets/Climate change .jpg";
import burning_plastic from "./assets/plastic_waste_burning.jpg";
import greenhouse_gases from "./assets/broeikasgassen_fd4109a1-pie-chart-1024x724.png";
import climate_effect from "./assets/broeikas-effect-1024x674.webp";


export default function Plastic_2() {

    return (
        <Layout>
            <div className="sticky grid grid-cols-11 w-full h-full z-0  overflow-y-auto" style={{
                "background": "linear-gradient(180deg, rgba(128,206,250,1) 0%, rgba(93,148,180,1) 55%, rgba(48,99,147,1) 60%, rgba(10,22,34,1) 100%)",
                "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#80cefa\",endColorstr=\"#0a1622\",GradientType=1)"
            }}>
                <div
                    id={"title"}
                    className="col-start-3 col-end-10 relative text-center text-black text-6xl font-semibold italic font-['Roboto'] mb-5">
                    TITEL OVER GEVOLGEN OCEAAN
                </div>

                <Link to={"/plastic/1"} id={"Topic1"} className="colstart-2 col-end-5 col-span-3 z-20">
                    <div id={"Topic1_background"}
                         className="w-full h-14 bg-cyan-950 hover:text-white grid place-items-center border border-amber-200">
                        <div
                            className="text-center text-alt_yellow text-lg font-semibold font-['Montserrat'] hover:text-white">
                            Het probleem
                        </div>
                    </div>
                </Link>
                <Link to={"/plastic/2"} id={"Topic2"} className="colstart-5 col-span-3 z-20">
                    <div id={"Topic2_background"}
                         className="w-full h-14 bg-blue-950 hover:bg-blue-950 hover:text-white grid place-items-center border border-amber-200">
                        <div
                            className="text-center text-green-300 text-lg font-semibold font-['Montserrat'] hover:text-white">
                            Gevolgen
                        </div>
                    </div>
                </Link>
                <Link to={"/plastic/3"} id={"Topic3"} className="colstart-8 col-span-3 z-20">
                    <div id={"Topic3_background"}
                         className="w-full h-14 bg-cyan-950 hover:bg-blue-950 hover:text-white grid place-items-center border border-amber-200">
                        <div
                            className="text-center text-alt_yellow text-lg font-semibold font-['Montserrat'] hover:text-white">
                            Aanpak
                        </div>
                    </div>
                </Link>

                <img className="col-start-2 col-end-11 relative z-20"
                     src={banner}
                     alt={"Grote afbeelding dat plastic vervuiling in de oceaan en een schildpad laat zien"}
                />
                <div className="col-start-6 fixed top-[40%] left-[45%] items-center justify-center h-screen z-10">
                    <div id={"background_sun"}
                         className="w-48 h-24 bg-white rounded-tl-full rounded-tr-full blur-md z-10"
                    />
                </div>

                <div
                    id={"information_block"}
                    className="col-start-3 col-span-3 h-['300px'] mt-10 bg-zinc-300 rounded-lg border-4 border-black z-20">

                    <div
                        id={"information_text"}
                        className="col-start-4 relative z-20 space-y-1 px-3 clear-right">

                        <h2 className="text-cyan-950 text-md font-bold font-['Montserrat'] text-wrap py-3">
                            Schade aan de Dierenwereld
                        </h2>

                        <p className="text-cyan-950 text-sm font-semibold font-['Montserrat'] text-wrap pt-3">Plastic
                            dat in de oceaan terechtkomt, is heel slecht voor de dieren en planten die daar leven. Als
                            dieren, zoals schildpadden, zeevogels, vissen, plastic tegenkomen of inslikken, kunnen ze er
                            erg ziek van worden of zelfs doodgaan. Sommige dieren raken verstrikt in plastic en kunnen
                            niet meer bewegen.

                            <br/><br/>

                            {/*Bijna 700 soorten zijn bekend die door plastic zijn getroffen. 17% van de soorten die last*/}
                            {/*hebben van plastic in de oceaan staan op de <a href={"https://www.iucnredlist.org/en"} target={"_blank"}*/}
                            {/*                                               className="underline text-cyan-700">*/}
                            {/*    Rode Lijst van Bedreigde Soorten van de Internationale Unie voor Natuurbescherming.*/}
                            {/*</a>*/}

                            <br/><br/>

                        </p>

                    </div>

                </div>

                <img
                    className="lg:col-start-6 col-start-7 col-span-4 float-right h-96 inline-block ml-auto mt-10 rounded-[40px] z-20"
                    src={image1} alt={"Afbeelding van een vogel die vast zit in een plastic zakje"}/>

                <div
                    id={"information_block_2"}
                    className="col-start-3 col-span-7 h-['300px'] mt-10 bg-zinc-300 rounded-lg border-4 border-black z-20">

                    <div
                        id={"information_text_2"}
                        className="col-start-4 relative z-20 space-y-1 px-3 clear-right">

                        <p className="text-cyan-950 text-sm font-semibold font-['Montserrat'] text-wrap pt-3">Zelfs
                            dieren op het land kunnen in de problemen komen door plastic. Grote dieren zoals
                            olifanten, hyena's, zebra's en tijgers hebben soms plastic ingeslikt, wat heel gevaarlijk
                            kan zijn. Het kan ervoor zorgen dat ze ziek worden of zelfs doodgaan. Ook heeft onderzoek
                            aangetoond dat plastic schade kan veroorzaken aan de lever en cellen van dieren. Het kan
                            ervoor zorgen dat sommige dieren minder eieren leggen, zoals oesters.

                            <br/><br/>

                            Maar er zijn nog meer problemen met plastic. Plastic voorwerpen die in het water drijven,
                            kunnen ook zorgen dat andere dieren op plekken komen waar ze niet thuishoren. Dit kan
                            gevaarlijk zijn voor de plek waar de dieren leven en voor het eten dat ze nodig hebben.
                            <br/><br/>

                        </p>
                    </div>

                </div>

                {/*<div className="col-start-2 col-span-9 space-y-5 mt-10">*/}
                {/*    <div*/}
                {/*        className="col-start-3 p-40 bg-tertiary rounded-full z-20 relative overflow-hidden">*/}
                {/*        <img className="absolute inset-0 w-full h-full object-cover"*/}
                {/*             src={plastic_in_medical}*/}
                {/*             alt={"Afbeelding van medische apparatuur gemaakt met plastic"}/>*/}
                {/*    </div>*/}
                {/*    <div*/}
                {/*        className="col-start-3 p-40 bg-tertiary rounded-full z-20 relative overflow-hidden">*/}
                {/*        <img className="absolute inset-0 w-full h-full object-cover"*/}
                {/*             src={plastic_in_automobiles}*/}
                {/*             alt={"Afbeelding van auto voorbumpers"}/>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="col-start-2 col-span-9 space-y-5 mt-10">

                    <div id={"information_block_3"}
                         className="col-start-3 p-40 bg-tertiary rounded-full z-20 relative overflow-hidden group">

                        <img
                            className="absolute inset-0 w-full h-full object-cover"
                            src={microplastics}
                            alt="Afbeelding die toont hoe microplastic in voedsel beland"
                        />

                        <div id={"information_text_3"}
                             className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="text-center text-white p-4">
                                <h2 className="text-white text-2xl font-bold font-['Montserrat'] p-3">
                                    Gezondheidsrisico's
                                </h2>
                                <p className="text-white text-sm font-semibold font-['Montserrat'] p-3">
                                    Microplastics kunnen zich ophopen in de voedselketen en uiteindelijk ook in ons
                                    voedsel terechtkomen. Dit kan gevaarlijk zijn voor onze gezondheid.
                                    <br/><br/>
                                    Plastic kan ziekte veroorzaken en problemen geven met onze groei, ons denken, onze
                                    voortplanting en ons afweersysteem. Ook kunnen er giftige stoffen op het plastic
                                    zitten die naar ons toe komen als we vis eten die in plastic vervuild water heeft
                                    gezwommen.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id={"information_block_4"}
                         className="col-start-3 p-40 bg-tertiary rounded-full z-20 relative overflow-hidden group">
                        <img
                            className="absolute inset-0 w-full h-full object-cover"
                            src={plastic_economics}
                            alt="Afbeelding van een veld gras vol met plastic afval, terwijl er luxe gebouwen in de achtergrond zijn."
                        />
                        <div id={"information_text_4"}
                             className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="text-center text-white p-4">
                                <h2 className="text-white text-2xl font-bold font-['Montserrat'] p-3">
                                    Economische schade
                                </h2>
                                <p className="text-white text-sm font-semibold font-['Montserrat'] p-3">
                                    De plasticvervuiling in de oceanen heeft negatieve gevolgen voor de visserij, het
                                    toerisme en andere industrieën die afhankelijk zijn van gezonde oceanen.

                                    <br/><br/>

                                    Volgens onderzoek kosten de problemen met plastic in de oceaan elk jaar tussen de $6
                                    en $19 miljard dollar. Deze kosten worden veroorzaakt door de impact op toerisme,
                                    visserij en schoonmaakacties die de overheid moet doen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div*/}
                {/*    id={"information_block_3"}*/}
                {/*    className="col-start-3 col-span-7 h-['300px'] mt-10 bg-zinc-300 rounded-lg border-4 border-black z-20">*/}

                {/*    <div*/}
                {/*        id={"information_text_3"}*/}
                {/*        className="col-start-4 relative z-20 space-y-1 px-3 clear-right">*/}

                {/*        <img className=" h-60 float-right inline-block ml-auto p-3 rounded-[40px]"*/}
                {/*             src="https://via.placeholder.com/429x459" alt={"information_image"}/>*/}

                {/*        <h2 className="text-cyan-950 text-md font-bold font-['Montserrat'] text-wrap py-3">*/}
                {/*            Gezondheidsrisico's*/}
                {/*        </h2>*/}

                {/*        <p className="text-cyan-950 text-sm font-semibold font-['Montserrat'] text-wrap py-3">Microplastics*/}
                {/*            kunnen zich ophopen in de voedselketen en uiteindelijk ook in ons voedsel terechtkomen. Dit*/}
                {/*            kan gevaarlijk zijn voor onze gezondheid.*/}

                {/*            <br/><br/>*/}

                {/*            Plastic kan ziekte veroorzaken en problemen geven met onze groei, ons denken, onze*/}
                {/*            voortplanting en ons afweersysteem. Ook kunnen er giftige stoffen op het plastic zitten die naar ons toe komen*/}
                {/*            als we vis eten die in plastic vervuild water heeft gezwommen.</p>*/}
                {/*    </div>*/}

                {/*</div>*/}

                {/*<div*/}
                {/*    id={"information_block_4"}*/}
                {/*    className="col-start-3 col-span-7 h-['300px'] mt-5 bg-zinc-300 rounded-lg border-4 border-black z-20">*/}

                {/*    <div*/}
                {/*        id={"information_text_4"}*/}
                {/*        className="col-start-4 relative z-20 space-y-1 px-3 clear-right">*/}

                {/*        <img className=" h-60 float-right inline-block ml-auto p-3 rounded-[40px]"*/}
                {/*             src="https://via.placeholder.com/429x459" alt={"information_image"}/>*/}

                {/*        <h2 className="text-cyan-950 text-md font-bold font-['Montserrat'] text-wrap py-3">*/}
                {/*            Economische schade*/}
                {/*        </h2>*/}

                {/*        <p className="text-cyan-950 text-sm font-semibold font-['Montserrat'] text-wrap py-3">De*/}
                {/*            plasticvervuiling in de oceanen heeft negatieve gevolgen voor de visserij, het toerisme en*/}
                {/*            andere industrieën die afhankelijk zijn van gezonde oceanen.*/}

                {/*            <br/><br/>*/}

                {/*            Volgens onderzoek kosten de problemen met plastic in de oceaan elk jaar tussen de $6 en $19*/}
                {/*            miljard dollar. Deze kosten worden veroorzaakt door de impact op toerisme, visserij en*/}
                {/*            schoonmaakacties die de overheid moet doen.*/}

                {/*        </p>*/}
                {/*    </div>*/}

                {/*</div>*/}

                <div
                    id={"information_block_5"}
                    className="col-start-3 col-span-7 h-['300px'] mt-10 bg-zinc-300 rounded-lg border-4 border-black z-20">

                    <div
                        id={"information_text_5"}
                        className="col-start-4 relative z-20 space-y-1 px-3 clear-right">

                        <h2 className="text-cyan-950 text-xl font-bold font-['Montserrat'] text-wrap py-3 text-center">
                            Effect op klimaatverandering
                        </h2>

                        <img className="mx-auto flex ml-auto px-3 rounded-[40px]"
                             src={climate_pic} alt={"information_image"}/>

                        <p className="text-cyan-950 text-sm font-semibold font-['Montserrat'] text-wrap py-3 text-center">
                            Plasticvervuiling en klimaatverandering gaan hand in hand. Plastic wordt gemaakt van
                            fossiele brandstoffen. Het verwerken van fossiele brandstoffen veroorzaakt uitstoot
                            van <strong>broeikasgassen</strong>, is één van de grootste bijdragers aan de opwarming
                            van de aarde.
                        </p>

                    </div>

                </div>

                <div
                    id={"information_block_6"}
                    className="col-start-3 col-span-7 h-['300px'] mt-5 bg-zinc-300 rounded-lg border-4 border-black z-20">

                    <div
                        id={"information_text_6"}
                        className="col-start-4 relative z-20 space-y-1 px-3 clear-right">

                        <h3 className="text-cyan-950 text-sm font-bold font-['Montserrat'] text-wrap pt-3 underline">
                            Plasticvervuiling neemt toe
                        </h3>

                        <p className="text-cyan-950 text-sm font-semibold font-['Montserrat'] text-wrap py-3">
                            Doordat we steeds meer plastic gebruiken, stijgt ook de vraag naar producten gemaakt van
                            aardolie. Zelfs als we proberen minder fossiele brandstoffen te gebruiken in, bijvoorbeeld
                            auto's en huizen, zal het gebruik van plastic alleen maar toenemen, als we op deze manier
                            doorgaan. Het Centrum voor Internationaal Milieurecht (CIEL) denkt dat tegen 2050 plastic
                            20% van al het oliegebruik zal zijn.
                        </p>

                    </div>

                </div>

                <div
                    id={"information_block_7"}
                    className="col-start-3 col-span-7 h-['300px'] mt-5 bg-zinc-300 rounded-lg border-4 border-black z-20">

                    <div
                        id={"information_text_7"}
                        className="col-start-4 relative z-20 space-y-1 px-3 clear-left">

                        <h3 className="text-cyan-950 text-sm font-bold font-['Montserrat'] text-wrap pt-3 underline">
                            Plasticverbranding is ook een probleem
                        </h3>

                        <img className="h-60 float-left inline-block ml-auto pr-3 py-6 rounded-[40px]"
                             src={burning_plastic} alt={"information_image"}/>

                        <p className="text-cyan-950 text-sm font-semibold font-['Montserrat'] text-wrap py-5">
                            Het is in veel delen van de wereld gebruikelijk dat afval op open vuilnisbelten wordt
                            verbrand, wat leidt tot ernstige luchtvervuiling. <br/><br/> Het verbranden van plastic
                            produceert
                            giftige chemicaliën die schadelijk zijn voor, zowel het milieu, als de mensen die de
                            vervuilde lucht inademen. Eén van de gevaarlijke stoffen die vrijkomen, is zwarte koolstof.
                            Zwarte koolstof kan de aarde veel sneller opwarmen, wel tot 5000 keer sneller dan
                            koolstofdioxide.
                        </p>

                    </div>

                </div>

                <div
                    id={"information_block_8"}
                    className="col-start-3 col-span-7 h-['300px'] mt-5 bg-zinc-300 rounded-lg border-4 border-black z-20">

                    <div
                        id={"information_text_8"}
                        className="col-start-4 relative z-20 space-y-1 px-3 clear-right">

                        <h3 className="text-cyan-950 text-sm font-bold font-['Montserrat'] text-wrap py-3 underline">
                            Afvalplastic veroorzaakt ook klimaatverandering
                        </h3>

                        <img className="mx-auto flex ml-auto p-3 rounded-[40px]"
                             src={climate_effect} alt={"information_image"}/>

                        <p className="text-cyan-950 text-sm font-semibold font-['Montserrat'] text-wrap py-3">
                            Veel van het plastic dat niet bij de recyclingfabriek terechtkomt, belandt in onze rivieren
                            en oceanen. Dit is niet alleen gevaarlijk voor de dieren en planten wiens leefgebieden zijn
                            veranderd in onderwater-afvalhopen, maar het vormt ook een bedreiging voor het klimaat.
                            Plastic stoot broeikasgassen uit wanneer het langzaam afbreekt. Zonlicht en warmte zorgen
                            ervoor dat het <strong>methaan</strong> en <strong>etheen</strong> vrijgeeft - en dat
                            gebeurt steeds sneller naarmate het plastic in steeds kleinere stukjes uiteenvalt.

                            <img className="mx-auto flex ml-auto h-80 mt-5 p-3 rounded-[40px]"
                                 src={greenhouse_gases} alt={"information_image"}/>

                            <br/>

                            {/*<img className="h-60 float-right inline-block ml-auto p-3 rounded-[40px]"*/}
                            {/*     src={burning_plastic} alt={"information_image"}/>*/}

                            Onderzoek laat ook zien dat microplastics het vermogen van zee-organismen om koolstofdioxide
                            op te nemen en zuurstof vrij te geven, kunnen verstoren. Dit is belangrijk omdat de oceaan
                            verantwoordelijk is voor ten minste de helft van de zuurstof op aarde, voornamelijk
                            geproduceerd door plankton. Microplastics kunnen ervoor zorgen dat plankton minder goed
                            groeien en minder voortplanten, waardoor er minder zuurstof uit de oceaan komt.

                            <iframe
                                className="h-60 float-right inline-block ml-auto rounded-[40px] w-full h-96 border=0"
                                src="https://player.vimeo.com/video/899060411?h=a7f6a5e1f4"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen></iframe>
                            <p className="text-black text-xs underline text-center"><a
                                href="https://vimeo.com/899060411">Microplastic showreel</a> van <a
                                href="https://vimeo.com/user42606124">Richard Kirby</a> on <a
                                href="https://vimeo.com">Vimeo</a>.
                            </p>
                        </p>

                    </div>

                </div>

                <div
                    id={"information_block_9"}
                    className="col-start-3 col-span-7 h-['300px'] mt-5 bg-teal-100 rounded-lg border-4 border-black z-20">

                    <div
                        id={"information_text_9"}
                        className="col-start-4 relative z-20 space-y-1 px-3 clear-left">

                        <p className="text-cyan-950 text-sm font-bold font-['Montserrat'] text-wrap py-5">
                            De problemen veroorzaakt door al deze plasticvervuiling in de zeeën zijn ernstig. Als er te
                            veel plastic in de oceaan terechtkomt en de oceaan opwarmt, ontstaat er een probleem dat
                            zichzelf verergert. Een opwarmende oceaan vol met plastic is een omgeving waar planten- en
                            dierenleven lijden, minder koolstofdioxide wordt opgenomen en ons vermogen om
                            klimaatverandering tegen te gaan verder wordt belemmerd. Dit maakt de situatie nog erger en
                            er moet snel iets aan worden gedaan.
                        </p>

                    </div>

                </div>

                {/*<div className="col-start-3 p-20 inline-block bg-tertiary rounded-full mt-10 z-20"/>*/}
                {/*<div className="col-start-6 p-20 inline-block bg-tertiary rounded-full mt-10 z-20"/>*/}
                {/*<div className="col-start-9 p-20 inline-block bg-tertiary rounded-full mt-10 z-20"/>*/}

                {/*<img className="col-start-4 col-span-5 mt-10 z-20 relative"*/}
                {/*     src="https://via.placeholder.com/1174x566"*/}
                {/*     alt={"image of turtles swimming next to a plastic bag"}/>*/}

            </div>
        </Layout>
    );
}
