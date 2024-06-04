import { motion } from "framer-motion";

const whatCanWeDoAboutIt = {
  title: "Plastic",
  divs: (
    <motion.div
        id={"information_block_2"}
        className="col-start-3 col-span-7 h-['300px'] mt-5 bg-zinc-300 rounded-lg border-4 border-black z-20"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div
          id={"information_text_2"}
          className="col-start-4 relative z-20 space-y-1 px-3 clear-right"
        >
          <h2 className="text-cyan-950 text-md font-bold font-custom text-wrap py-3">
            Wat kunnen wij zelf eraan doen?
          </h2>

          <p className="text-cyan-950 text-sm font-semibold font-custom text-wrap py-3">
            Plasticvervuiling is een wereldwijd probleem, maar iedereen kan een
            bijdrage doen om plastic uit de oceaan te houden! Hier zijn wat
            mogelijkheden die je zelf kunt aannemen en delen met de mensen om je
            heen:
            <br />
            <h3 className="text-cyan-950 text-sm font-bold font-custom text-wrap pt-3 underline">
              Wees bewust van het plastic die je gebruikt
            </h3>
            Denk eens aan alle plastic items die je gebruikt in je dagelijks
            leven. Kun je ze allemaal tellen? Meer bewust worden van de manier
            waarop je plastic gebruikt is een geweldig begin om plastic afval te
            verminderen.
            <br />
            <br />
            We weten dat gewoontes moeilijk te veranderen zijn, maar zelfs een
            kleine individuele inzet kan een verschil maken. Vooral als we het
            hebben over de eenmalige plastics die we eerder hebben genoemd, die
            volgens gegevens van het Europees Parlement verantwoordelijk zijn
            voor 49% van alle mariene vervuiling.
            <br />
            <br />
            Hier zijn wat nieuwe gewoonten waar je inspiratie uit kunt halen:
            <br />
            <br />
            <span className="text-cyan-950 text-xs font-semibold font-custom space-y-0.5 float-left pl-4 -indent-4">
              <li>
                Verminder het gebruik van wegwerpbare plastic bekers, borden,
                bestek en flessen. Neem bijvoorbeeld je eigen herbruikbare fles
                mee naar school.
              </li>
              <li>
                Kies metalen of glazen voedselcontainers en opslagopties in
                plaats van plastic.
              </li>
              <li>
                Kies voor snacks en voedsel dat niet in plastic verpakt is,
                zoals fruit dat in een eigen schil zit.
              </li>
              <li>
                Gebruik geen plastic rietjes en roerstaafjes, maar kies voor
                herbruikbare of papieren alternatieven.
              </li>
              <li>
                Ruil plastic tassen in voor herbruikbare tassen, gemaakt van
                stof of vezel.
              </li>
              <li className="font-bold">
                Moedig anderen aan om ook minder plastic te gebruiken door het
                goede voorbeeld te geven en hen te informeren over de voordelen
                van plasticvrije alternatieven.
              </li>
              <br />
            </span>
          </p>
        </div>
      </motion.div>
  ),
};

export default whatCanWeDoAboutIt;
