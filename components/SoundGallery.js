import Image from "next/image";
import Link from "next/link";
import React from "react";

const SoundGallery = () => {
  return (
    <section id="gallery" className="relative w-full pt-16 px-6 pb-24">
      <div>
        <h2
          aria-label="Sound Gallery"
          className="relative text-sky uppercase text-5xl font-light italic"
        >
          <span>Sound</span>
          <span className="absolute top-[1.5rem] left-24">Gallery</span>
        </h2>
        <hr className="ml-[-24px] mt-9 w-[66%] md:w-[33%] text-clay border-[1px]"></hr>
      </div>
      <p className="italic mt-6 md:text-xl">
        An experiment in creating active artist/listener interaction 
        <span className="ml-2 text-sand">(more
        coming soon)</span>
      </p>
      <div className="relative mt-8 flex flex-col max-w-4xl">
        <p className="relative text-clay text-4xl font-light italic z-20">1.</p>
        <p className="relative text-sky uppercase text-5xl font-light ml-5 mt-[-1.5rem] mb-[-1rem] z-20">
          Ujjjjayi
        </p>
        <div className="relative ml-8 hover:cursor-pointer">
          <Link href="/tracks/dub">
            <Image
              src="/images/tracks/ujjjjayi_thumbnail.jpg"
              alt="Ujjjjayi"
              layout="responsive"
              width="1608"
              height="904"
            />
          </Link>
        </div>
        <p className="lowercase text-sky text-lg self-end">Dub Techno</p>
      </div>
    </section>
  );
};

export default SoundGallery;
