import React, { Suspense, useEffect, useRef } from "react";
import { SpotLight, useHelper, Stars, Cloud } from "@react-three/drei";
import { DirectionalLightHelper, Vector3 } from "three";

import Gradient from "./Gradient";
import Circle from "./Circle";
import Model from "./Model";
import { useFrame, useThree } from "@react-three/fiber";
import Orbit from "./Orbit";
import MyLight from "./MyLight";
import Pyramid from "./Pyramid";

import Loading from "../../Loading";

function DubScene({ playingProps, chords, kick, bass, perc, sample }) {
  const lightRef = useRef(null);
  const starRef = useRef(null);

  const { gl } = useThree();

  const { camera, mouse } = useThree();
  const vecPosition = new Vector3();
  const vecLookAt = new Vector3();

  useHelper(lightRef, DirectionalLightHelper, "blue");

  useEffect(() => {
   console.log(gl.info) 
  })

  useFrame((state) => {
    state.camera.lookAt(vecLookAt.set(0, 0, 0.5));
    state.camera.position.lerp(
      vecPosition.set(mouse.x * 8, mouse.y * 4, camera.position.z),
      0.05
    );
  });

  return (
    <scene>
      <MyLight playing={playingProps.samplePlaying} sample={sample} />
      <directionalLight
        intensity={1}
        ref={lightRef}
        position={[0.5, 0.5, 0.5]}
      />
        {/* <Gradient /> */}
        <Pyramid playing={playingProps.bassPlaying} bass={bass}/>
        <Circle playing={playingProps.kickPlaying} kick={kick} />
        <Model  playing={playingProps.chordsPlaying} chords={chords} />
        <Orbit playing={playingProps.percPlaying} perc={perc} />
        <Stars
          ref={starRef}
          radius={1}
          depth={10}
          count={5000}
          factor={1}
          saturation={1}
          fade
          speed={6}
        />
        <Cloud
          opacity={0.3}
          speed={0.2} // Rotation speed
          width={10} // Width of the full cloud
          depth={1.5} // Z-dir depth
          segments={20} // Number of particles
          position={[0, 0, -8]}
        />
    </scene>
  );
}

export default DubScene;
