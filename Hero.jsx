import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="
      min-h-screen
      flex
      flex-col
      items-center
      justify-center
      text-center
      px-6
    ">

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="
          font-serif
          text-[14vw]
          font-light
          tracking-[0.15em]
        "
      >
        AMOURET
      </motion.h1>


      <p className="
        mt-8
        text-xs
        uppercase
        tracking-[0.6em]
        text-neutral-400
      ">
        Writer · Designer · Archivist
      </p>


      <p className="
        mt-32
        text-xs
        uppercase
        tracking-[0.4em]
        text-neutral-500
      ">
        Scroll ↓
      </p>


    </section>
  );
}

export default Hero;