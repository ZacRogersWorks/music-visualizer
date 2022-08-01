import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Object3D, Vector3 } from "three";
import { createAudio } from "../audio/createAudio";
import { suspend } from "suspend-react";
import { LayerMaterial, Depth, Noise } from "lamina";

function ModelMaterial({ url, obj = new Object3D(), ...props }) {
  const noise = useRef();
  const depth = useRef();
  // suspend-react is the library that r3f uses internally for useLoader. It caches promises and
  // integrates them with React suspense. You can use it as-is with or without r3f.
  const { gain, context, update, data } = suspend(
    () => createAudio("/testAudio.wav"),
    ["/testAudio.wav"]
  );

  useEffect(() => {
    // Connect the gain node, which plays the audio
    gain.connect(context.destination);
    // Disconnect it on unmount
    return () => gain.disconnect();
  }, [gain, context]);

  useFrame((state, delta) => {
    let avg = update();
    // state.camera.fov = 25 - data.avg / 10;
    // state.camera.updateProjectionMatrix();

    // Set the hue according to the frequency average
    // ref.current.material.color.setHSL(avg / 25, 0.75, 0.75);
    // ref.current.instanceMatrix.needsUpdate = true
    noise.current.offset.x += delta / 30;
    depth.current.far = data.avg / 12;
    depth.current.near = data.avg / 12;
  });

  return (
    <LayerMaterial
      color="#ffffff" //
      lighting="physical"
    >
      <Noise
        ref={noise}
        colorA={"#FF006E"}
                    colorB={"#FB5607"}
                    colorC={"#3A86FF"}
                    colorD={"#FFFFFF"}
        scale={5}
        offset={[0, 0, 0]}
        mode="normal"
        type="curl"
      />
      <Depth
        ref={depth}
        near={1}
        far={1}
        mode="add"
        colorA={"#FFFFFF"}
        colorB={"black"}
        origin={[0, -1.5, -1.75]}
      />
    </LayerMaterial>
  );
}

export default ModelMaterial;
