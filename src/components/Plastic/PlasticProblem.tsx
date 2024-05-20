import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import plastic_in_space from "../../assets/Astronaut-Helmet-PNG-Pic.png";
import plastic_in_medical from "../../assets/Medical_Plastics-min_yiseoq.png";
import plastic_in_automobiles from "../../assets/plastic-in-automobiles.png";
import banner from "../../assets/water-pollution@2x.jpg";
import plastic from "../../misc/Plasticcc";
import PlasticExampleComp from "./PlasticExampleComp";

export default function PlasticProblem() {
  return (
    // <div className="sticky grid grid-cols-11 w-full h-full z-0  overflow-y-auto" style={{
    //     "background": "linear-gradient(180deg, rgba(147,203,199,1) 0%, rgba(105,138,136,1) 55%, rgba(93,146,149,1) 60%, rgba(39,49,42,1) 100%)",
    //     "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#93cbc7\",endColorstr=\"#27312a\",GradientType=1)"
    // }}>
    <div className="sticky grid grid-cols-11 w-full h-full z-0  overflow-y-auto bg-gradient-to-b">
      <div
        id={"title"}
        className="col-start-3 col-end-10 relative text-center text-black text-6xl font-semibold italic font-['Roboto'] mb-5"
      >
        PLASTIC VERVUILING IN DE OCEAAN
      </div>

      <Link
        to={"/plastic/probleem"}
        id={"Topic1"}
        className="colstart-2 col-end-5 col-span-3 z-20"
      >
        <div
          id={"Topic1_background"}
          className="w-full h-14 bg-blue-950 hover:text-white grid place-items-center border border-amber-200"
        >
          <div className="text-center text-green-300 text-lg font-semibold font-['Montserrat'] hover:text-white">
            Het probleem
          </div>
        </div>
      </Link>
      <Link
        to={"/plastic/gevolgen"}
        id={"Topic2"}
        className="colstart-5 col-span-3 z-20"
      >
        <div
          id={"Topic2_background"}
          className="w-full h-14 bg-cyan-950 hover:bg-blue-950 hover:text-white grid place-items-center border border-amber-200"
        >
          <div className="text-center text-alt_yellow text-lg font-semibold font-['Montserrat'] hover:text-white">
            Gevolgen
          </div>
        </div>
      </Link>
      <Link
        to={"/plastic/aanpak"}
        id={"Topic3"}
        className="colstart-8 col-span-3 z-20"
      >
        <div
          id={"Topic3_background"}
          className="w-full h-14 bg-cyan-950 hover:bg-blue-950 hover:text-white grid place-items-center border border-amber-200"
        >
          <div className="text-center text-alt_yellow text-lg font-semibold font-['Montserrat'] hover:text-white">
            Aanpak
          </div>
        </div>
      </Link>

      <img
        className="col-start-2 col-end-11 relative z-20"
        src={banner}
        alt={"Grote afbeelding dat plastic vervuiling in de oceaan laat zien"}
      />
      <div className="col-start-6 fixed top-[40%] left-[45%] items-center justify-center h-screen z-10">
        <div
          id={"background_sun"}
          className="w-48 h-24 bg-white rounded-tl-full rounded-tr-full blur-md z-10"
        />
      </div>

      {/* <motion.div
        id={"information_block"}
        className="col-start-3 col-span-7 h-['300px'] mt-10 bg-zinc-300 rounded-lg border-4 border-black z-20"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
      >
        <div
          id={"information_text"}
          className="col-start-4 relative z-20 space-y-1 px-3 clear-right"
        >
          <img
            className="h-52 float-right inline-block ml-auto p-3 rounded-[40px]"
            src={image1}
            alt={
              "Afbeelding van dagelijkse plastic producten, zoals flesjes, bekers en rietjes."
            }
          />

          <p className="text-cyan-950 text-sm font-semibold font-['Montserrat'] text-wrap pt-3">
            <strong>Plastic</strong>, gemaakt van fossiele brandstoffen, bestaat
            pas iets meer dan honderd jaar, maar heeft ons leven volledig
            veranderd. Je ziet plastic al over je heen:
          </p>
          <br />
          <span className="text-cyan-950 text-xs font-semibold font-['Montserrat'] space-y-0.5 float-left pb-3 pl-4 -indent-4 max-w-80">
            <li>Plastic flessen voor water en frisdrank.</li>
            <li>Plastic boodschappentassen.</li>
            <li>
              Plastic verpakkingen voor voedsel, zoals bakjes, folie en zakken.
            </li>
            <li>Plastic tandenborstels en tandpastatubes.</li>
            <li>Plastic rietjes.</li>
            <li>Plastic speelgoed.</li>
            <li>Plastic wegwerp bestek.</li>
          </span>
        </div>
      </motion.div> */}

      <PlasticExampleComp children={plastic.divs} />

      <motion.div
        id={"information_block_2"}
        className="col-start-3 col-span-7 h-['300px'] mt-5 bg-zinc-300 rounded-lg border-4 border-black z-20"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
      >
        <div
          id={"information_text_2"}
          className="col-start-4 relative z-20 space-y-1 px-3 clear-right"
        >
          <p className="text-cyan-950 text-sm font-semibold font-['Montserrat'] text-wrap py-3">
            Plastic heeft de dokters geholpen met spullen die levens redden, het
            heeft het mogelijk gemaakt om naar de ruimte te gaan, en het heeft
            auto's en vliegtuigen lichter gemaakt, waardoor ze minder benzine
            gebruiken en minder vieze lucht maken.
            <br />
            <br />
          </p>

          <div className="lg:flex justify-around items-center">
            <div className="p-20 inline-block bg-tertiary rounded-full z-20 relative overflow-hidden">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={plastic_in_medical}
                alt={"Afbeelding van medische apparatuur gemaakt met plastic"}
              />
            </div>
            <div className="p-20 inline-block bg-tertiary rounded-full z-20 relative overflow-hidden">
              <img
                className="absolute inset-3 max-w-full h-32 object-cover"
                src={plastic_in_space}
                alt={"Afbeelding van een astronaut helm"}
              />
            </div>
            <div className="p-20 inline-block bg-tertiary rounded-full z-20 relative overflow-hidden">
              <img
                className="absolute inset-0 w-full h-40 object-cover"
                src={plastic_in_automobiles}
                alt={"Afbeelding van auto voorbumpers"}
              />
            </div>
          </div>

          <p className="text-cyan-950 text-sm font-semibold font-['Montserrat'] text-wrap py-3">
            <br />
            <br />
            Plastic wordt voor zoveel dingen gebruikt dat het moeilijk is om
            iets te bedenken waarin geen plastic wordt gebruikt.
            <br />
            <br />
            Het is heel handig, maar er is een probleem. Vaak gebruiken we
            plastic maar één keer en gooien het dan weg. Dit gebeurt vaak met
            plastic zakken en verpakkingen voor ons eten. Ook al gebruiken we ze
            maar heel kort, kan het honderden jaren duren voordat plastic
            volledig is afgebroken.{" "}
            <span className="font-bold underline">
              En dat is niet goed voor het milieu.
            </span>
          </p>
        </div>
      </motion.div>

      <iframe
        className="col-start-3 col-span-7 w-full h-96 mt-10 z-20 relative border-0"
        src="https://www.youtube.com/embed/73KVh4UEdrQ?autoplay=1&mute=1"
        title="Another Day in Paradise - The Plastic on Bali&#39;s Beaches (December 2018)"
        allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      >
        \
      </iframe>

      <motion.div
        id={"information_block_3"}
        className="col-start-3 col-span-7 h-['300px'] mt-10 bg-zinc-300 rounded-lg border-4 border-black z-20"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
      >
        <div
          id={"information_text_3"}
          className="col-start-4 relative z-20 space-y-1 px-3 clear-right"
        >
          {/*<img className=" h-60 float-right inline-block ml-auto p-3 rounded-[40px]"*/}
          {/*     src="https://via.placeholder.com/429x459" alt={"information_image"}/>*/}

          <h2 className="text-cyan-950 text-md font-bold font-['Montserrat'] text-wrap py-3 text-center">
            Hoe plastic verplaatst
          </h2>
          <p className="text-cyan-950 text-sm font-semibold font-['Montserrat'] text-wrap py-3">
            De meerderheid van de plasticvervuiling in de oceaan wordt
            veroorzaakt door het achterlaten van afval: we kopen of gebruiken
            wegwerpproducten van plastic (voedselverpakkingen, plastic zakken,
            scheermesjes, flessen, etc.) en we ruimen ze niet op de juiste
            manier op. Plastic wordt via rivieren of direct vanaf kustlijnen
            uiteindelijk rechtstreeks in de oceanen gedumpt.
            <br />
            <br />
            De meeste plastic rommel komt in de oceaan doordat mensen hun afval
            op straat of bij het water achterlaten. We kopen of gebruiken
            wegwerpproducten van plastic (voedselverpakkingen, plastic zakken,
            flessen, etc.) en we ruimen ze niet op de juiste manier op. Als we
            dat afval niet goed opruimen, kan het in rivieren terechtkomen en
            uiteindelijk in de oceaan drijven.
            <br />
            <br />
            Als plastic eenmaal in de zee belandt, blijft een groot deel ervan
            dichtbij de kust. Maar als het door de stroming van de oceaan wordt
            meegenomen, kan het over de hele wereld reizen.
          </p>
        </div>
      </motion.div>

      <motion.div
        id={"information_block_4"}
        className="col-start-3 col-span-7 h-['300px'] mt-10 bg-zinc-300 rounded-lg border-4 border-black z-20"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
      >
        <div
          id={"information_text_4"}
          className="col-start-4 relative z-20 space-y-1 px-3 clear-right"
        >
          <h2 className="text-cyan-950 text-md font-bold font-['Montserrat'] text-wrap py-3 text-center">
            Microplastics
          </h2>

          <img
            className="mx-auto flex h-60 ml-auto rounded-[40px]"
            src="https://d3n8a8pro7vhmx.cloudfront.net/foe/pages/1667/attachments/original/1604715275/microplasticspoulos3.jpg?1604715275"
            alt={"information_image"}
          />
          <p className="text-cyan-950 text-sm font-semibold font-['Montserrat'] text-wrap py-3">
            Maar niet al het plasticafval in de oceaan komt door zwerfafval.
            Soms wordt plastic niet goed gemaakt en komen er kleine stukjes
            plastic, genaamd <strong>microplastics</strong>, in het water. Ook
            gooien sommige vissers plastic spullen in de oceaan, wat ook voor
            vervuiling zorgt.
            <br />
            <br />
            <strong>Microplastics</strong> zijn piepkleine stukjes plastic. Ze
            zijn zo klein dat ze door dieren in de zee kunnen worden opgegeten.
            Deze plastic deeltjes komen in het lichaam van de dieren terecht en
            kunnen problemen veroorzaken. Ze kunnen zelfs in ons voedsel
            terechtkomen als we deze dieren eten. Dat is slecht voor de
            gezondheid van onze planeet en alle levende wezens die erop wonen.
          </p>
        </div>
      </motion.div>

      <motion.div
        id={"information_block_5"}
        className="col-start-3 col-span-7 h-['300px'] mt-10 bg-zinc-300 rounded-lg border-4 border-black z-20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
        <div
          id={"information_text_5"}
          className="col-start-4 relative z-20 space-y-1 pl-3 clear-right"
        >
          {/*<img className=" h-60 float-right inline-block ml-auto p-3 rounded-[40px]"*/}
          {/*     src="https://via.placeholder.com/429x459" alt={"information_image"}/>*/}

          <h2 className="text-cyan-950 text-md font-bold font-['Montserrat'] text-wrap py-3">
            Plasticvervuiling: Belangrijke Feiten
          </h2>
          <span className="text-cyan-950 text-xs font-semibold font-['Montserrat'] space-y-0.5 float-left pb-3 pl-4 -indent-4">
            <li>
              De productie is exponentieel toegenomen, van 2,3 miljoen ton in
              1950 tot 400 miljoen ton in 2022.
            </li>
            <li>
              De helft van alle plastic ooit geproduceerd is gemaakt in de
              laatste 15 jaar.
            </li>
            <li>De productie wordt verwacht te verdubbelen tegen 2050.</li>
            <li>
              De EPA (Environmental Protection Agency) heeft verklaard dat
              vrijwel 100% van al het plastic dat mensen ooit hebben gemaakt nog
              steeds bestaat.
            </li>
            <br></br>
            <li>
              Plastic afval vormt 80% van alle zeevervuiling en elk jaar
              belanden ongeveer 8 tot 10 miljoen ton plastic in de oceaan.
            </li>
            <li>
              Onderzoek voorspelt dat plastic tegen 2050 waarschijnlijk meer zal
              wegen dan alle vissen in de zee.
            </li>
            <li>
              Plastic doet er over het algemeen tussen de 500 en 1000 jaar over
              om af te breken. Zelfs dan wordt het microplastics, zonder
              volledig af te breken.
            </li>
            <li>
              Momenteel zijn er ongeveer 50-75 biljoen stukjes plastic en
              microplastics in de oceaan.
            </li>
            <br></br>
            <li>
              Slechts 9% van het plasticafval in de wereld wordt gerecycled. De
              helft van al het plasticafval ter wereld belandt nog steeds gewoon
              op de vuilnisbelt. Een ander vijfde wordt niet goed behandeld -
              wat betekent dat het niet wordt gerecycled, verbrand of veilig
              opgeslagen in afgesloten stortplaatsen - waardoor het risico loopt
              om in rivieren, meren en de oceaan terecht te komen.
            </li>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
