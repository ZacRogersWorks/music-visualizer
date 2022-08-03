import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import { Environment, OrbitControls, useHelper } from "@react-three/drei";

import DubScene from "./dub/DubScene";
import Loading from "../Loading";

function Background(props) {

  // const audioCtx = new AudioContext



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
