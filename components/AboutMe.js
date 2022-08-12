import Image from "next/image";
import React from "react";
import SocialLinks from "./SocialLinks";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative w-full pt-16 px-6 pb-24 flex flex-col justify-between"
    >
      <div className="absolute bottom-0 right-0 w-[66%] lg:w-[50%] h-auto">
        <Image src="/images/footerbg.jpg" alt="Background" layout="responsive" width="2160" height="2160"/>
      </div>
      <div>
        <h2
          aria-label="About Me"
          className="relative text-sky uppercase text-5xl font-light italic"
        >
          <span>About</span>
          <span className="absolute top-[1.5rem] left-24">Me</span>
        </h2>
        <hr className="ml-[-24px] mt-9 w-[66%] md:w-[33%] text-clay border-[1px]"></hr>
        <div className="relative flex flex-col w-full md:w-[66%]">
          
          <p className="italic mt-6 md:text-2xl z-10">
            I’m a producer, DJ, and synthesist working in deep, reflective sound
            design spanning across multiple electronic music genres. I love
            exploring complex texture, sample mangling, other-worldly harmony,
            and destructive dissonance.
            <br /> <br />I can talk synths for hours, so feel free to reach out
            if you want to nerd with me.
          </p>
          <div className="w-[50%] mt-[-2rem] md:mt-[-4rem] z-0 self-center">
            <Image
              src="/images/about_thumbnail.jpg"
              alt="About Me"
              layout="responsive"
              width="1080"
              height="1080"
            />
          </div>
        </div>
      </div>

      <footer className="flex flex-col mt-20 z-10">
        <SocialLinks />
        <div className="text-sm mt-8">
          <p>Copyright 2022</p>
          <div />
          <p>
            Designed/developed by
            <a
              className="ml-1 text-sky"
              href="https://zacrogers.works"
              target="_blank"
              rel="noreferrer"
            >
              zacrogers.works
            </a>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default AboutMe;
