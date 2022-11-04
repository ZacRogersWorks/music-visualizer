import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { suspend } from "suspend-react";
import { Plane, PlaneGeometry, PointLight } from "three";
import { Cone, OrbitControls, Sphere, softShadows } from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  DepthOfField,
  SSAO,
} from "@react-three/postprocessing";
import { BlurPass, Resizer, KernelSize } from "postprocessing";

import { Headphones } from "./Headphones";
import Backdrop from "./Backdrop";
import PicFrame from "./PicFrame";
import Plant from "./Plant";
import CylinderLamp from "./CylinderLamp";

softShadows();

const mobileBreakpoint = 500;
const initialWidth = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth;
  }
};

function Background(props) {
  const [ready, setReady] = useState(false);
  const [width, setWidth] = useState(initialWidth);
  const [fov, setFov] = useState(10);
  const headphonesRef = useRef(null);

  if (typeof window !== "undefined") {
    //   const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  }

  useEffect(() => {
    console.log(width);
    if (width < mobileBreakpoint) {
    }
  }, [width]);

  const playAudio = () => {};

  useEffect(() => {
    window?.addEventListener("resize", () => {
      setWidth(window?.innerWidth);
      console.log("Updated Width");
    });
  }, []);

  return (
    <div className="canvas-container flex justify-center">
      <Canvas
        camera={{
          position: [0, 10, 25],
          rotation: [0, 0, 0],
          fov: 50,
          near: 2,
          far: 100,
          lookat: [0, -25, 0],
        }}
        shadows
      >
        {/* <EffectComposer>

          <SSAO />
        </EffectComposer> */}
        <ambientLight color={"white"} intensity={0.5} />
        <directionalLight
          intensity={3}
          position={[10, 10, 10]}
          color={"blue"}
          castShadow
          shadow-mapSize-height={1024}
          shadow-mapSize-width={1024}
          // shadow-camera-far={50}
          // shadow-camera-left={-10}
          // shadow-camera-right={10}
          // shadow-camera-top={10}
          // shadow-camera-bottom={-10}
        />

        <directionalLight
          intensity={1}
          position={[-20, 5, 0]}
          color={"red"}
          castShadow
          shadow-mapSize-height={1024}
          shadow-mapSize-width={1024}
          // shadow-camera-far={50}
          // shadow-camera-left={-10}
          // shadow-camera-right={10}
          // shadow-camera-top={10}
          // shadow-camera-bottom={-10}
        />
        <color attach="background" args={["black"]} />
        <Backdrop />
        <Headphones />
        <Cone
          args={[5, 25, 64]}
          position={[-19, 12, -8]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial
            color={"pink"}
            metalness={[0.1]}
            roughness={0}
          />
        </Cone>
        <Sphere args={[0.4, 16, 16]} position={[-1, 0.6, 1]} castShadow>
          <meshStandardMaterial color={"0Xabdbe3"} />
        </Sphere>
        <PicFrame />
        <Plant />
        <CylinderLamp />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Background;
