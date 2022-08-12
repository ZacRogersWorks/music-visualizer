import { useRouter } from "next/router";
import React, { useState } from "react";
import Background from "../../components/three/Background";
import MuteButton from "../../components/MuteButton";
import GlobalMute from "../../components/GlobalMute";
import { Stats } from "@react-three/drei";

function Track() {
  const [kickPlaying, setKickPlaying] = useState(true);
  const [percPlaying, setPercPlaying] = useState(false);
  const [samplePlaying, setSamplePlaying] = useState(false);
  const [chordsPlaying, setChordsPlaying] = useState(true);
  const [bassPlaying, setBassPlaying] = useState(false);
  const [play, setPlay] = useState(false);

  const router = useRouter();

  return (
    <div className="relative">
      {/* <Stats showPanel={0} className="stats" /> */}
      <Background
        kickPlaying={kickPlaying}
        percPlaying={percPlaying}
        samplePlaying={samplePlaying}
        chordsPlaying={chordsPlaying}
        bassPlaying={bassPlaying}
        play={play}
        setPlay={setPlay}
      />
      <div className="pointer-events-none absolute h-screen w-screen px-8 pt-12 pb-16 lowercase flex flex-col justify-between items-center">
        <div className="w-full flex justify-between items-center">
          <button className="pointer-events-auto text-white" onClick={() => router.back()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="30.186"
              viewBox="0 0 32 30.186"
            >
              <path
                id="Icon_ionic-md-arrow-round-back"
                data-name="Icon ionic-md-arrow-round-back"
                d="M34.851,18.513H15.391l7.548-7.22a3.008,3.008,0,0,0,0-4.11,2.689,2.689,0,0,0-3.928,0L6.443,19.368A2.77,2.77,0,0,0,5.625,21.4v.036a2.77,2.77,0,0,0,.818,2.037L19,35.663a2.689,2.689,0,0,0,3.928,0,3.008,3.008,0,0,0,0-4.11l-7.548-7.22h19.46a2.847,2.847,0,0,0,2.783-2.91A2.817,2.817,0,0,0,34.851,18.513Z"
                transform="translate(-5.625 -6.33)"
                fill="currentColor"
              />
            </svg>
          </button>
          <h1 className="uppercase text-lg">Ujjjjayi</h1>
        </div>

        { play ?
        <div className="flex justify-center flex-wrap">
          <MuteButton
            name="chords"
            playing={chordsPlaying}
            setPlaying={setChordsPlaying}
          />
          <MuteButton
            name="kick"
            playing={kickPlaying}
            setPlaying={setKickPlaying}
          />
          <MuteButton
            name="bass"
            playing={bassPlaying}
            setPlaying={setBassPlaying}
          />
          <MuteButton
            name="perc"
            playing={percPlaying}
            setPlaying={setPercPlaying}
          />
          <MuteButton
            name="sample"
            playing={samplePlaying}
            setPlaying={setSamplePlaying}
          />

        </div>
         : null }
      </div>
    </div>
  );
}

export default Track;
