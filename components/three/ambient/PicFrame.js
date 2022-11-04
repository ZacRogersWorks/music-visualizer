import React from 'react'
import { Brush, Subtraction } from '@react-three/csg'
import { BoxGeometry } from 'three'
import Picture from './Picture'

const PicFrame = () => {
    return (
        <group position={[10, 20 ,-24]} scale={[1, 1, 1]}>
        <mesh castShadow receiveShadow >
            <Subtraction>
                <Brush a>
                <boxGeometry args={[15, 20, 2]} />
                </Brush>
                <Brush b>
                <boxGeometry args={[14, 19, 2]} />
                </Brush>
            </Subtraction>
            <meshStandardMaterial color={"white"} />
        </mesh>
        <Picture />
        </group>
    )
}

export default PicFrame