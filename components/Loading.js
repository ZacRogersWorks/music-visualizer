import React from 'react'
import { Html } from '@react-three/drei'

function Loading() {
  return (
    <Html prepend center>
        <div className={"text-white text-4xl font-bold w-full h-full flex justify-center items-center"}>
            loading assets...
        </div>
    </Html>
  )
}

export default Loading