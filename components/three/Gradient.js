import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

import { LayerMaterial, Depth, Noise } from 'lamina'


const colors = {
    dark: {
        noise: {
            
            a: "#FF006E",
            b: "#FB5607",
            c: "#3A86FF", 
        },
        depth: {
            a: "#000000",
            b: "#fef9fc",
            near: 10,
            far: 50,
            alpha: .7
        }
    }
}

const Gradient = () => {
    const noise = useRef(null)
    const depth = useRef(null)
    useFrame(({ clock }) => {
        //Animate Noise Layer
        noise.current.offset.x = Math.sin(clock.getElapsedTime() / 100) * 50
        noise.current.offset.y = Math.sin(clock.getElapsedTime() / 100) * 50
        noise.current.offset.z = (clock.getElapsedTime() / 2)
        //Animate Depth Layer
        depth.current.origin.x = Math.sin(clock.getElapsedTime() / 4) * 20
        depth.current.origin.y = Math.cos(clock.getElapsedTime() / 4) * 20
    })
    return (
        <mesh castShadow scale={[3, 3, 3]} position={[0,0,-30]}>
            <planeGeometry args={[40, 24]} />
            <LayerMaterial name={'Gradient'}>
                <Noise
                    ref={noise}
                    colorA={"#FF006E"}
                    colorB={"#FB5607"}
                    colorC={"#3A86FF"}
                    colorD={"#FFFFFF"}
                    scale={.1}
                    mode={'normal'}
                />
                <Depth
                    ref={depth}
                    near={colors.dark.depth.near}
                    far={colors.dark.depth.far}
                    origin={[20, 0, 0]}
                    colorA={colors.dark.depth.a}
                    colorB={colors.dark.depth.b}
                    alpha={colors.dark.depth.alpha}
                    mode={"softlight"}

                />
            </LayerMaterial>
        </mesh>
    )
}

export default Gradient
