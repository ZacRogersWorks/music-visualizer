import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import { LayerMaterial, Noise, Displace, Depth } from "lamina";

const colors = {
  dark: {
    noise: {
      a: "#FF006E",
      b: "#FB5607",
      c: "#3A86FF",
    },
    depth: {
      a: "#000000",
      b: "#fef9fc",
      near: 10,
      far: 50,
      alpha: 0.7,
    },
  },
};

const Picture = () => {
  const noise = useRef(null);
  const displace = useRef(null);
  useFrame(({ clock }) => {
      //Animate Noise Layer
      noise.current.offset.x = Math.sin(clock.getElapsedTime() / 100) * 50
      noise.current.offset.y = Math.sin(clock.getElapsedTime() / 100) * 50
      noise.current.offset.z = (clock.getElapsedTime() / 2)
      //Animate Depth Layer
      displace.current.offset.z = clock.getElapsedTime()
    //   displace.current.offset = Math.cos(clock.getElapsedTime() / 4) * 20
  })
  return (
    <mesh castShadow receiveShadow scale={[1, 1, 1]} position={[0, 0, -1]}>
      <planeGeometry args={[14, 19, 50, 75]} />
      <LayerMaterial name={"Gradient"} lighting={"physical"}>
        <Noise
          ref={noise}
          colorA={"#FF006E"}
          colorB={"#FB5607"}
          colorC={"#3A86FF"}
          colorD={"#FFFFFF"}
          scale={0.1}
          mode={"normal"}
        />
        <Displace
          ref={displace}
          type={"simplex"}
          scale={.25}
          strength={2.5}
          offset={[0, 0, 0]}
        />
      </LayerMaterial>
    </mesh>
  );
};

export default Picture;
