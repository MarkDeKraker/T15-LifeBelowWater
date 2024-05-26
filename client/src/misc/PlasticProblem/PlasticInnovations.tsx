import { motion } from "framer-motion";

import PlasticInMedical from "../../assets/Medical_Plastics-min_yiseoq.png";
import PlasticInSpace from "../../assets/Astronaut-Helmet-PNG-Pic.png";
import PlasticInAutomobiles from "../../assets/plastic-in-automobiles.png";

const plasticInnovations = {
  title: "Plastic",
  divs: (
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
          <p className="text-cyan-950 text-sm font-semibold font-custom text-wrap py-3">
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
                src={PlasticInMedical}
                alt={"Afbeelding van medische apparatuur gemaakt met plastic"}
              />
            </div>
            <div className="p-20 inline-block bg-tertiary rounded-full z-20 relative overflow-hidden">
              <img
                className="absolute inset-3 max-w-full h-32 object-cover"
                src={PlasticInSpace}
                alt={"Afbeelding van een astronaut helm"}
              />
            </div>
            <div className="p-20 inline-block bg-tertiary rounded-full z-20 relative overflow-hidden">
              <img
                className="absolute inset-0 w-full h-40 object-cover"
                src={PlasticInAutomobiles}
                alt={"Afbeelding van auto voorbumpers"}
              />
            </div>
          </div>

          <p className="text-cyan-950 text-sm font-semibold font-custom text-wrap py-3">
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
  ),
};

export default plasticInnovations;
