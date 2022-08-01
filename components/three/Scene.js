import React, { Suspense, useRef } from "react";
import { SpotLight, useHelper, Stars, Cloud } from "@react-three/drei";
import { DirectionalLightHelper, Vector3 } from "three";

import Gradient from "./Gradient";
import Circle from "./Circle";
import Model from "./Model";
import { useFrame, useThree } from "@react-three/fiber";

function Scene() {
  const lightRef = useRef(null);
  const starRef = useRef(null);

  const { camera, mouse } = useThree();
  const vecPosition = new Vector3();
  const vecLookAt = new Vector3();

  useHelper(lightRef, DirectionalLightHelper, "blue");

  useFrame((state) => {
    state.camera.lookAt(vecLookAt.set(0, 0, 0.5));
    state.camera.position.lerp(
      vecPosition.set(mouse.x * 8, mouse.y * 4, camera.position.z),
      0.05
    );
  });

  return (
    <scene>
      <pointLight intensity={5} position={[0, 0, -3]} />
      <directionalLight
        intensity={1}
        ref={lightRef}
        position={[0.5, 0.5, 0.5]}
        shadow
      />
      <Suspense fallback={null}>
        {/* <Gradient /> */}
        <Circle />
        <Model />
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
      </Suspense>
    </scene>
  );
}

export default Scene;
