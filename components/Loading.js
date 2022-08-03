import React from 'react'
import { Html } from '@react-three/drei'

function Loading() {
  return (
    <Html prepend center>
        <div className={"text-white font-bold w-full h-full flex justify-center items-center"}>
            Loading...
        </div>
    </Html>
  )
}

export default Loading