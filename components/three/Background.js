
import React, {Suspense, useEffect, useRef, useState } from "react";

import { Canvas, useFrame } from "@react-three/fiber";

import { Environment, OrbitControls, useHelper } from "@react-three/drei";


import DubScene from "./dub/DubScene";
import Loading from "../Loading";

import addAudio from "../audio/addAudio";

function Background() {
  const audioCtx = new AudioContext();
  const [ready, setReady] = useState(false)
  
  const chords = addAudio(audioCtx, "/dub/chords.mp3")
  const kick = addAudio(audioCtx, "/dub/kick.mp3")
  const bass = addAudio(audioCtx, "/dub/bass.mp3")
  const perc = addAudio(audioCtx, "/dub/perc.mp3")
  const sample = addAudio(audioCtx, "/dub/sample.mp3")

  useEffect(() => {
    if( chords.ready && kick.ready && bass.ready && perc.ready && sample.ready) {
      setReady(true)
      console.log("Testing ready", ready)
    }
  }, [chords.ready, kick.ready, bass.ready, perc.ready, sample.ready])


  return (
    <div className="canvas-container">
      <Canvas shadows camera={{ position: [0, 0, 60], fov: 12 }}>
        <color attach="background" args={["black"]} />
        <Suspense fallback={<Loading />}>
          <DubScene playingProps={props} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Background;
