import { motion } from "framer-motion";

const supportLegislation = {
  title: "Plastic",
  divs: (
    <motion.div
        id={"information_block_4"}
        className="col-start-3 col-span-7 h-['300px'] mt-5 bg-zinc-300 rounded-lg border-4 border-black z-20"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div
          id={"information_text_4"}
          className="col-start-4 relative z-20 space-y-1 px-3 clear-right"
        >
          <p className="text-cyan-950 text-sm font-semibold font-custom text-wrap py-3">
            <h3 className="text-cyan-950 text-sm font-bold font-custom text-wrap pb-3 underline">
              Ondersteun de juiste wetgeving en regelgeving
            </h3>
            Veel landen hebben wetten aangenomen om plasticgebruik te
            verminderen en afvalbeheer te verbeteren. Dit gaat over het
            verbieden van bepaalde plastic producten, zoals wegwerpplastic, en
            het implementeren van recyclingprogramma's.
            <br />
            <br />
            Het is essentieel dat je wetgeving ondersteunt die gericht is op het
            verminderen van het gebruik en de productie van plastic, het
            verbeteren van recyclingfaciliteiten en het beter beheren van afval
            in het algemeen. Als jonge leerling mag jij zelf nog niet stemmen,
            maar je kunt wel:
            <br />
            <br />
            <span className="text-cyan-950 text-xs font-semibold font-custom space-y-0.5 float-left pl-4 -indent-4">
              <li>
                Brieven schrijven aan lokale overheden om je bezorgdheid te
                delen en te pleiten voor strengere wetten tegen
                plasticvervuiling.
              </li>
              <li>
                Deelnemen aan petities of zelf petities starten om steun te
                verzamelen voor wetten en regels die plasticvermindering
                bevorderen.
              </li>
              <li>
                Anderen informeren over het belang van wetgeving tegen
                plasticvervuiling en moedig hen aan om ook actie te ondernemen.
              </li>
              <br />
            </span>
          </p>
        </div>
      </motion.div>
  ),
};

export default supportLegislation;
