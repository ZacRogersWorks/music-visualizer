import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Background from "../components/three/Background";
import HomeContent from "../components/HomeContent";
import SoundGallery from "../components/SoundGallery";
import AboutMe from "../components/AboutMe";
import Head from "next/head";

const randomKey = Math.random();

export default function Home() {
  return (
    <>
      <Head>
        <title>Shoyei | Audio Artist</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Audio Artist & DJ" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="music, artist, DJ, producer, synthesizers"
        />
        <meta name="author" content="Zac Rogers" />
        <link rel="canonical" href="https://www.shoyei.net/" />

        <meta property="og:title" content="Shoyei" key="ogtitle" />
        <meta
          property="og:description"
          content="Audio Artist & DJ"
          key="ogdesc"
        />
        <meta property="og:url" content="https://www.shoyei.net/" key="ogurl" />
        <meta property="og:image" content="/images/ogScreenshot.jpg" key="ogimage" />
        <meta property="og:site_name" content="Shoyei" key="ogsitename" />
      </Head>
      <main className="bg-black overflow-x-hidden">

          <HomeContent />
          <SoundGallery  />
          <AboutMe />

      </main>
    </>
  );
}
