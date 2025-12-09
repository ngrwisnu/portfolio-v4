"use client";
import { AuroraBackground } from "../ui/aurora-background";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section id="hero" className="h-screen w-full">
      <AuroraBackground>
        <div className="relative flex flex-col items-center justify-center gap-4 px-4 text-center text-3xl font-bold md:text-7xl dark:text-white">
          <div>Transforming</div>
          <div>
            <span className="text-list-400">UI/UX</span> Design into
          </div>
          <div>
            Reality <span className="text-list-400">Front-End</span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="absolute bottom-[4%] mt-5 flex max-w-[598px] flex-col items-center justify-center gap-2 px-4 text-center text-base leading-[30px] md:text-xl dark:text-white"
        >
          <div className="font-semibold">Ngr Wisnu</div>
          <div className="font-normal text-slate-500">
            is a web developer, skilled in both front-end and back-end
            development, with a focus on using JavaScript and its libraries to
            build modern web applications.
          </div>
        </motion.div>
      </AuroraBackground>
    </section>
  );
};

export default Hero;
