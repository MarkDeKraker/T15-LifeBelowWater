// import { motion } from "framer-motion";

// const plasticMoving = {
//   title: "Plastic",
//   divs: (
//     <motion.div
//       className="col-start-3 col-span-7 h-['300px'] mt-10 bg-zinc-300 rounded-lg border-4 border-black z-20"
//       initial={{ opacity: 0, x: 100 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 1.0 }}
//       viewport={{ once: true }}
//     >
//       <div
//         className="col-start-4 relative z-20 space-y-1 px-3 clear-right"
//       >
//         {/*<img className=" h-60 float-right inline-block ml-auto p-3 rounded-[40px]"*/}
//         {/*     src="https://via.placeholder.com/429x459" alt={"information_image"}/>*/}

//         <h2 className="text-cyan-950 text-md font-bold font-custom text-wrap py-3 text-center">
//           Hoe plastic verplaatst
//         </h2>
//         <p className="text-cyan-950 text-sm font-semibold font-custom text-wrap py-3">
//           De meeste plastic rommel komt in de oceaan doordat mensen hun afval
//           op straat of bij het water achterlaten. We kopen of gebruiken
//           wegwerpproducten van plastic (voedselverpakkingen, plastic zakken,
//           flessen, etc.) en we ruimen ze niet op de juiste manier op. Als we
//           dat afval niet goed opruimen, kan het worden meegenomen door rivieren,
//           wind en golven en uiteindelijk in de oceaan drijven. Het komt natuurlijk
//           ook voor dat plastic direct in de oceaan wordt gegooid.
//           <br />
//           <br />
//           Als plastic eenmaal in de zee belandt, blijft een groot deel ervan
//           dichtbij de kust. Maar als het door de stroming van de oceaan wordt
//           meegenomen, kan het over de hele wereld reizen.
//         </p>
//       </div>
//     </motion.div>
//   ),
// };

// export default plasticMoving;


const plasticMoving = {
  title: "Hoe plastic verplaatst",
  subTitle:
    <div className="col-start-4 relative z-20 space-y-1 clear-right">
      <p className="text-cyan-950 text-sm font-semibold font-custom text-wrap py-3">
        De meeste plastic rommel komt in de oceaan doordat mensen hun afval
        op straat of bij het water achterlaten. We kopen of gebruiken
        wegwerpproducten van plastic (voedselverpakkingen, plastic zakken,
        flessen, etc.) en we ruimen ze niet op de juiste manier op. Als we
        dat afval niet goed opruimen, kan het worden meegenomen door rivieren,
        wind en golven en uiteindelijk in de oceaan drijven. Het komt natuurlijk
        ook voor dat plastic direct in de oceaan wordt gegooid.
        <br />
        <br />
        Als plastic eenmaal in de zee belandt, blijft een groot deel ervan
        dichtbij de kust. Maar als het door de stroming van de oceaan wordt
        meegenomen, kan het over de hele wereld reizen.
      </p>
    </div >,
};

export default plasticMoving;


