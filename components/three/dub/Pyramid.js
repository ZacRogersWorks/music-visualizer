import { Cone, Sphere, Instances, Instance, Octahedron } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { MeshStandardMaterial } from "three";
import { suspend } from "suspend-react";
import { createAudio } from "../../audio/createAudio";


function Pyramid({playing, bass}) {
  const ref = useRef();

  // const { gain, context, update, data } = suspend(
  //   () => createAudio(`/dub/bass.mp3`),
  //   ["/dub/bass.mp3"]
  // );

  // useEffect(() => {
  //   // Connect the gain node, which plays the audio
  //   gain.connect(context.destination);
  //   // Disconnect it on unmount

  //   return () => gain.disconnect();
  // }, [gain, context]);

  useEffect(() => {
    if (playing ) bass.gain.gain.setTargetAtTime(1, bass.context.currentTime, .015)
    else if (!playing) bass.gain.gain.setTargetAtTime(0, bass.context.currentTime, .015)
  }, [playing])

  useFrame((state, delta) => {
    let avg = bass.update();
    ref.current.rotation.y = state.clock.getElapsedTime() * .05
    ref.current.scale.x = playing ? (bass.data.avg / 25) + .25 : 1
    ref.current.scale.y = playing ? (bass.data.avg / 25) + .25 : 1
    ref.current.scale.z = playing ? (bass.data.avg / 25) + .25 : 1
  });

  return (
    <Cone ref={ref} args={[15, 15, 4]} position={[0, 0, -30]} >
        <meshStandardMaterial color={"#8338EC"} />
    </Cone>
  );
}

export default Pyramid