import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import { Environment, OrbitControls, useHelper } from "@react-three/drei";

import Scene from "./Scene";
import MyCamera from "./MyCamera";


function Background() {

  

  return (
    <div className="canvas-container">
      <Canvas shadows camera={{ position: [0, 0, 40], fov: 25 }}>
        {/* <MyCamera /> */}
        <color attach="background" args={["black"]} />
        {/* <fog attach="fog" args={['white', 60, 110]} /> */}
        <Scene />
        {/* <OrbitControls /> */}
        {/* <Environment preset="city" /> */}
      </Canvas>
    </div>
  );
}

export default Background;
