import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GrDocumentDownload } from "react-icons/gr";
import StatItem from "../StatItem/StatItem";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-0 ">
      {/* Left side */}
      <div className="pb-20 border-b-2 md:border-none mt-16 md:mt-24 pl-10">
        <h4 className="bg-secondary/20 w-fit p-2 text-lg font-bold tracking-wide text-secondary">
          Hi, I'm Mitchell Hancock
        </h4>
        <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl leading-relaxed font-black text-mainColor tracking-wide">
          Freelance UI/UX <br /> Designer
        </h2>
        <p className="mt-5 text-sm text-gray-400 font-medium w-full md:w-3/4">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
        <div className="mt-5 flex flex-wrap gap-4">
          <button className="bg-primary text-white flex items-center justify-center py-3 px-5 capitalize gap-2 font-semibold text-sm md:text-base hover:bg-primary/85 duration-700">
            <AiOutlineUser size={25} /> Hire Me
          </button>
          <button className="bg-white text-mainColor text-sm md:text-base flex items-center justify-center py-3 px-5 capitalize gap-2 font-semibold border-2 border-gray-200 hover:text-white hover:bg-mainColor duration-700">
            <a
              href="/cv.pdf"
              download="Mitchell_Hancock_CV.pdf"
              className="flex items-center gap-2"
            >
              <GrDocumentDownload size={20} /> Download CV
            </a>
          </button>
        </div>

        <div className="mt-10 flex flex-wrap gap-6 justify-around md:gap-8 text-center">
          <StatItem endValue={180} label="Worldwide Clients" />
          <StatItem endValue={590} label="Projects Done" />
          <StatItem endValue={12} label="Years Experience" />
        </div>
      </div>

      {/* Right side */}
      <div className="relative bg-custom-gradient flex justify-center items-center h-64 md:h-full">
        <h2 className="text-center text-5xl md:text-6xl lg:text-8xl uppercase font-bold mt-5 text-white/50 absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
          Mitchell
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white/50 to-white/5">
            Hancock
          </span>
        </h2>
        <img
          src="/hero.png"
          alt="Hero"
          className="absolute z-10 left-1/2 transform -translate-x-1/2 bottom-0 w-48 md:w-64 lg:w-80"
        />
      </div>
    </section>
  );
};

export default Hero;
