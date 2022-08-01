import React from 'react'
import { LayerMaterial, Depth, Noise, Normal } from 'lamina'

function CircleMaterial() {
  return (
    <LayerMaterial
        color="#000000" //
        lighting="standard"
        transmission={1}
      >
        <Noise
        colorA={"#FFFFFF"}
        colorB={"#000000"}
        colorC={"#FFFFFF"}
        colorD={"#000000"}
        scale={0.1}
        offset={[100, 0, 0]}
        mode={"normal"}
      />
      </LayerMaterial>
  )
}

export default CircleMaterial