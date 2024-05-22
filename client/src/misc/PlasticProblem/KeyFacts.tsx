import { motion } from "framer-motion";

const KeyFacts = {
  title: "Plastic",
  divs: (
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

        <h2 className="text-cyan-950 text-md font-bold font-custom text-wrap py-3">
          Plasticvervuiling: Belangrijke Feiten
        </h2>
        <span className="text-cyan-950 text-xs font-semibold font-custom space-y-0.5 float-left pb-3 pl-4 -indent-4">
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
  ),
};

export default KeyFacts;
