import { Box, Instances, Instance, Octahedron } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { MeshStandardMaterial } from "three";
import { suspend } from "suspend-react";
import { createAudio } from "../../audio/createAudio";

const number_of_meshes = 2048;
const radius = 7;
const radian_interval = (2.0 * Math.PI) / number_of_meshes;
const center_of_wheel = {
  x: 0,
  y: 0,
};

let initArray = [];

const initializeArray = () => {
  for (let i = 1; i < number_of_meshes + 1; i++) {
    initArray = [
      ...initArray,
      {
        id: i,
        x: center_of_wheel.x + Math.cos(radian_interval * i) * radius,
        y: center_of_wheel.y + Math.sin(radian_interval * i) * radius,
      },
    ];
  }
};

initializeArray();

function Circle({ playing, kick }) {
  const ref = useRef();
  const [circleArray, setCircleArray] = useState(initArray);

  // const { gain, context, update, data } = suspend(
  //   () => createAudio(`/dub/kick.mp3`),
  //   ["/dub/kick.mp3"]
  // );

  // useEffect(() => {
  //   // Connect the gain node, which plays the audio
  //   gain.connect(context.destination);
  //   // Disconnect it on unmount
  //   console.log(gain);
  //   return () => {
  //     gain.disconnect();
  //   };
  // }, [gain, context]);

  useEffect(() => {
    if (playing) kick.gain.gain.setTargetAtTime(1, kick.context.currentTime, 0.015);
    else if (!playing) kick.gain.gain.setTargetAtTime(0, kick.context.currentTime, 0.015);
  }, [playing]);

  useFrame((state, delta) => {
    let avg = kick.update();
    // state.camera.fov = 25 - data.avg / 20;
    // state.camera.updateProjectionMatrix();

    ref.current.rotation.z += delta / 2;
    // ref.current.rotation.y += delta / 5;
    ref.current.scale.x = playing ? kick.data.avg / 350 + 1 : ref.current.scale.x;
    ref.current.scale.y = playing ? kick.data.avg / 350 + 1 : ref.current.scale.y;
    ref.current.scale.z = playing ? kick.data.avg / 350 + 1 : ref.current.scale.z;
  });

  return (
    <Instances limit={number_of_meshes} ref={ref} position={[0, 0, -15]}>
      <boxBufferGeometry args={[0.05, 15, 0.05]} />
      <meshStandardMaterial color="#FF006E" metalness={1} />
      {circleArray &&
        circleArray.map((instance) => (
          <ShapeInstance
            key={instance.id}
            id={instance.id}
            xPosition={instance.x}
            yPosition={instance.y}
            avg={kick.data.avg}
          />
        ))}
    </Instances>
  );
}

function ShapeInstance({ id, xPosition, yPosition, avg }) {
  const ref = useRef(null);

  // useEffect(() => {
  //   ref.current.position.set(position)
  // }, [])

  useFrame(({ clock }, delta) => {
    ref.current.rotation.z =
      Math.sin(clock.getElapsedTime() * 0.05) * (id / 60);
    ref.current.rotation.x =
      Math.sin(clock.getElapsedTime() * 0.05) * (id / 60);
    ref.current.scale.set = [avg, avg, avg];
    // ref.current.rotation.z += (delta + id) / 50000;
    // ref.current.rotation.x += (delta + id) / 50000;
    // ref.current.rotation.y += (delta ) + (id / 20);
    // ref.current.rotation.z += (delta ) + (id / 20);
  });

  return (
    <Instance
      ref={ref}
      scale={0.5}
      position={[xPosition, yPosition, 0]}
      color="#ffffff"
    />
  );
}

export default Circle;
