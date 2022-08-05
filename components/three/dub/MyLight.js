import { Box, Sphere, Instances, Instance, Octahedron } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { MeshStandardMaterial } from "three";
import { suspend } from "suspend-react";
import { createAudio } from "../../audio/createAudio";



function MyLight({playing, sample}) {
  const ref = useRef();

  // const { gain, context, update, data } = suspend(
  //   () => createAudio(`/dub/sample.mp3`),
  //   ["/dub/sample.mp3"]
  // );

  // useEffect(() => {
  //   // Connect the gain node, which plays the audio
  //   gain.connect(context.destination);
  //   // Disconnect it on unmount

  //   return () => gain.disconnect();
  // }, [gain, context]);

  useEffect(() => {
    if (playing) sample.gain.gain.setTargetAtTime(.4, sample.context.currentTime, .015)
    else if (!playing) sample.gain.gain.setTargetAtTime(0, sample.context.currentTime, .015)
  }, [playing])

  useFrame((state, delta) => {
    let avg = sample.update();
    ref.current.intensity = playing ? sample.data.avg / 3 : 2
  });

  return (
    <pointLight ref={ref} position={[0, 0, -14]} color={"#FCDC86"} castShadow/>
  );
}

export default MyLight