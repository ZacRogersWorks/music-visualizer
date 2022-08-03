
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import ModelMaterial from "./ModelMaterial";

export default function Model(props) {
  const group = useRef();
  const { nodes } = useGLTF("/bustExport.glb");
  

  useFrame(({ clock }, delta) => {
    // group.current.rotation.y += Math.sin((delta)) / 2;
  });
  
  return (
    <group ref={group} {...props} dispose={null}
    scale={40}
    position={[0, 0, .5]}
    rotation={[0,0,0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BustBaseMesh_Decimated.geometry}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <ModelMaterial url="/testAudio.wav" playingProps={props} />
        </mesh>
    </group>
  );
}

useGLTF.preload("/bustExport.glb");

