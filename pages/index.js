import { useState } from "react";
import Background from "../components/three/Background";
import HomeContent from "../components/HomeContent";
import SoundGallery from "../components/SoundGallery";
import AboutMe from "../components/AboutMe";

export default function Home() {

  return (
    <main className="bg-black overflow-x-hidden">
      <HomeContent />
      <SoundGallery />
      <AboutMe />
    </main>
  );
}
