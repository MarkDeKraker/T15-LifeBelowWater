import { motion } from "framer-motion";

import ClimateEffect from "../../assets/broeikas-effect-1024x674.webp";
import GreenhouseGases from "../../assets/broeikasgassen_fd4109a1-pie-chart-1024x724.png";

const plasticCausingClimateChange = {
  title: "Plastic",
  divs: (
    <motion.div
        id={"information_block_8"}
        className="col-start-3 col-span-7 h-['300px'] mt-5 bg-zinc-300 rounded-lg border-4 border-black z-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          id={"information_text_8"}
          className="col-start-4 relative z-20 space-y-1 px-3 clear-right"
        >
          <h3 className="text-cyan-950 text-sm font-bold font-custom text-wrap py-3 underline">
            Afvalplastic veroorzaakt ook klimaatverandering
          </h3>

          <img
            className="mx-auto flex ml-auto p-3 rounded-[40px]"
            src={ClimateEffect}
            alt={"information_image"}
          />

          <p className="text-cyan-950 text-sm font-semibold font-custom text-wrap py-3">
            Veel van het plastic dat niet bij de recyclingfabriek terechtkomt,
            belandt in onze rivieren en oceanen. Dit is niet alleen gevaarlijk
            voor de dieren en planten wiens leefgebieden zijn veranderd in
            onderwater-afvalhopen, maar het vormt ook een bedreiging voor het
            klimaat. Plastic stoot broeikasgassen uit wanneer het langzaam
            afbreekt. Zonlicht en warmte zorgen ervoor dat het{" "}
            <strong>methaan</strong> en <strong>etheen</strong> vrijgeeft - en
            dat gebeurt steeds sneller naarmate het plastic in steeds kleinere
            stukjes uiteenvalt.
            <img
              className="mx-auto flex ml-auto h-80 mt-5 p-3 rounded-[40px]"
              src={GreenhouseGases}
              alt={"information_image"}
            />
            <br />
            Onderzoek laat ook zien dat microplastics het vermogen van
            zee-organismen om koolstofdioxide op te nemen en zuurstof vrij te
            geven, kunnen verstoren. Dit is belangrijk omdat de oceaan
            verantwoordelijk is voor ten minste de helft van de zuurstof op
            aarde, voornamelijk geproduceerd door plankton. Microplastics kunnen
            ervoor zorgen dat plankton minder goed groeien en minder
            voortplanten, waardoor er minder zuurstof uit de oceaan komt.
            <iframe
              className="float-right inline-block ml-auto rounded-[40px] w-full h-96 border=0"
              src="https://player.vimeo.com/video/899060411?h=a7f6a5e1f4"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="text-black text-xs underline text-center">
              <a href="https://vimeo.com/899060411">Microplastic showreel</a>{" "}
              van <a href="https://vimeo.com/user42606124">Richard Kirby</a> on{" "}
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </p>
        </div>
      </motion.div>
  ),
};

export default plasticCausingClimateChange;
