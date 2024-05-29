import { motion } from "framer-motion";

const Microplastics = {
  title: "Plastic",
  divs: (
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
        <h2 className="text-cyan-950 text-md font-bold font-custom text-wrap py-3 text-center">
          Microplastics
        </h2>

        <img
          className="mx-auto flex h-60 ml-auto rounded-[40px]"
          src="https://d3n8a8pro7vhmx.cloudfront.net/foe/pages/1667/attachments/original/1604715275/microplasticspoulos3.jpg?1604715275"
          alt={"information_image"}
        />
        <p className="text-cyan-950 text-sm font-semibold font-custom text-wrap py-3">
          Maar niet al het plasticafval in de oceaan komt door zwerfafval.
          Soms wordt plastic niet goed gemaakt en komen er <strong>microplastics</strong> in 
          het water. Ook gooien sommige vissers plastic spullen in de oceaan, wat ook voor
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
  ),
};

export default Microplastics;
