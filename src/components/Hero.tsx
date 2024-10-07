"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Arrow from "@/assets/icons/arrow-w.svg";
import message from "@/assets/images/message.png";
import cursor from "@/assets/images/cursor.png";

export const Hero = () => {
  return (
    <section className="relative bg-[linear-gradient(to_bottom,#000,#004e5a_34%,#007389_65%,#0083a4_82%)] py-[72px] overflow-clip">
      <div className="container relative z-10">
        <article className="flex flex-col justify-center items-center gap-y-8">
          <a
            href="#"
            className="w-fit flex justify-center items-center gap-2 border-[1px] border-white/30 rounded-lg px-2 py-1"
          >
            <span className="bg-[linear-gradient(to_right,#00b7d1,#0083a4)] bg-clip-text text-transparent">
              Version 1.0 is here
            </span>
            <span className="flex justify-center items-center gap-2">
              Read more <Arrow />
            </span>
          </a>
          <div className="inline-flex relative">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter w-[320px] md:w-[550px] text-center text-white]">
              Alia AI
            </h1>
            <motion.div
              className="hidden md:block absolute right-[507px] lg:right-[512px] top-[108px]"
              drag
              dragSnapToOrigin
            >
              <Image
                src={cursor}
                alt="cursor icon"
                width={200}
                height={200}
                className="h-auto max-w-none hover:cursor-grab active:cursor-grabbing"
                draggable={false}
              />
            </motion.div>
            <motion.div
              className="hidden md:block absolute left-[503px] lg:left-[513px] top-[56px]"
              drag
              dragSnapToOrigin
            >
              <Image
                src={message}
                alt="message icon"
                width={200}
                height={200}
                className="h-auto max-w-none hover:cursor-grab active:cursor-grabbing"
                draggable={false}
              />
            </motion.div>
          </div>
          <p className="text-xl max-w-[448px] text-center text-white]">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <button className="ctaBaseStyling cta-primary bg-white hover:bg-white/90">
            Get Started
          </button>
        </article>
      </div>
      <div className="absolute top-[calc(100%-96px)] sm:top-[calc(100%-120px)] h-[375px] w-[750px] sm:w-[2500px] sm:h-[768px] left-1/2 -translate-x-1/2 rounded-[100%] bg-black border-[#0083a4] bg-[radial-gradient(closest-side,#000_82%,#0083a4)]"></div>
    </section>
  );
};
