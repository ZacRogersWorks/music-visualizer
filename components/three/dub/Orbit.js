import { Box, Sphere, Instances, Instance, Octahedron } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { MeshStandardMaterial } from "three";
import { suspend } from "suspend-react";
import { createAudio } from "../../audio/createAudio";



function Orbit({playing, perc}) {
  const ref = useRef();

  // const { gain, context, update, data } = suspend(
  //   () => createAudio(`/dub/perc.mp3`),
  //   ["/dub/perc.mp3"]
  // );

  // useEffect(() => {
  //   // Connect the gain node, which plays the audio
  //   gain.connect(context.destination);
  //   // Disconnect it on unmount
  //   console.log(gain)
  //   return () => gain.disconnect();
  // }, [gain, context]);

  useEffect(() => {
    if (playing ) perc.gain.gain.setTargetAtTime(1, perc.context.currentTime, .015)
    else if (!playing) perc.gain.gain.setTargetAtTime(0, perc.context.currentTime, .015)
  }, [playing])

  useFrame((state, delta) => {
    let avg = perc.update();
    ref.current.position.x = Math.sin(state.clock.getElapsedTime() / 1.5) * 5
    ref.current.position.y = Math.sin(state.clock.getElapsedTime() * .7) * 1.5
    ref.current.position.z = Math.cos(state.clock.getElapsedTime() / 1.5) * 5

    ref.current.rotation.x = state.clock.getElapsedTime()
    ref.current.rotation.z = state.clock.getElapsedTime()

    ref.current.scale.x = playing ? (perc.data.avg/8 + 1) : ref.current.scale.x
    ref.current.scale.y = playing ? (perc.data.avg/8 + 1) : ref.current.scale.y
    ref.current.scale.z = playing ? (perc.data.avg/8 + 1) : ref.current.scale.z
  });

  return (
    <Sphere ref={ref} args={[.1, 16, 16]} position={[0, 2.5, 0]} castShadow>
        <meshStandardMaterial color={"#FCDC86"} metalness={1} roughness={0} />
    </Sphere>
  );
}

export default Orbit