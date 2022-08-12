import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import SocialLinks from "./SocialLinks";

function HomeContent() {
  const [menuOpen, setMenuOpen] = useState();
  const router = useRouter();

  const menuClose = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    router.events.on("hashChangeStart", menuClose);

    return () => router.events.off("hashChangeStart", menuClose);
  }, [router.events]);

  return (
    <>
      <section
        id="home"
        className="relative h-screen w-full pt-24 px-6 md:px-12 pb-32 bg-[url('/images/bgImg.jpg')] bg-cover bg-center"
      >
        <div className="absolute bottom-0 left-0 h-[66%] w-full bg-gradient-to-t from-black to-transparent"></div>
        <nav className="absolute top-[32px] right-0 w-[50%] md:w-[33%] xl:w-[20%]">
          <button
            className={`${
              menuOpen && "hidden"
            } w-full flex flex-col items-end text-clay`}
            onClick={() => setMenuOpen(true)}
          >
            <hr className="w-full border-[1px]"></hr>
            <hr className="w-[50%] mt-2 border-[1px]"></hr>
            <hr className="w-[25%] mt-2 border-[1px]"></hr>
          </button>
        </nav>
        <div className={`relative h-full w-full flex flex-col justify-between`}>
          <h1 className="text-7xl font-light italic uppercase tracking-[16px] text-sand">
            Shoyei
          </h1>
          <div className="flex flex-col items-end">
            <p className="text-3xl text-sky lowercase italic font-light tracking-[12px] mb-4 mr-[-12px]">
              Audio Artist
            </p>
            <SocialLinks />
          </div>
        </div>
      </section>
      {menuOpen && <Menu setMenuOpen={setMenuOpen} />}
    </>
  );
}

export default HomeContent;
