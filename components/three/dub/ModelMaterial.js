import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Object3D, Vector3 } from "three";
import { createAudio } from "../../audio/createAudio";
import { suspend } from "suspend-react";
import { LayerMaterial, Depth, Noise } from "lamina";

function ModelMaterial({ url, obj = new Object3D(), playingProps, ...props }) {
  const noise = useRef();
  const depth = useRef();

  const { gain, context, update, data } = suspend(
    () => createAudio("/dub/chords.mp3"),
    ["/dub/chords.mp3"]
  );

  useEffect(() => {
    // Play Audio
    gain.connect(context.destination);

    return () => gain.disconnect();
  }, [gain, context]);

  useEffect(() => {
    if (playingProps.playing ) gain.gain.setTargetAtTime(1, context.currentTime, .015)
    else if (!playingProps.playing) gain.gain.setTargetAtTime(0, context.currentTime, .015)
  }, [playingProps.playing])

  useFrame((state, delta) => {
    let avg = update();
    // Set the hue according to the frequency average
    // ref.current.material.color.setHSL(avg / 25, 0.75, 0.75);
    // ref.current.instanceMatrix.needsUpdate = true
    noise.current.offset.x += delta / 30;
    depth.current.far = playingProps.playing ? (data.avg / 14) : 0;
    depth.current.near = playingProps.playing ? (data.avg / 14) : 0;
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
