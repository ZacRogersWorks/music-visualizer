import { softShadows } from '@react-three/drei'
import React from 'react'

softShadows();

function Backdrop() {
  return (
    <>
    <mesh rotation={[-(Math.PI / 2), 0, 0]} receiveShadow >
    <planeGeometry args={[100, 50]}  />
    <meshStandardMaterial color={"white"}/>
  </mesh>
  <mesh rotation={[0, 0, 0]} position={[0, 25, -25]} receiveShadow >
    <planeGeometry args={[100, 50]}  />
    <meshStandardMaterial color={"white"}/>
  </mesh>
    </>
  )
}

export default Backdrop