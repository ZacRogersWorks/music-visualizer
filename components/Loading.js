import React from 'react'
import { Html } from '@react-three/drei'

function Loading() {
  return (
    <Html prepend center>
      <div className="loader"/>
        <div className={"text-sky text-4xl uppercase font-light italic w-full h-full flex-col"}>
            loading assets...
        </div>
    </Html>
  )
}

export default Loading