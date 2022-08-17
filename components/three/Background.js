import React, {
  Suspense,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { suspend } from "suspend-react";
import addAudio from "../audio/addAudio";

import DubScene from "./dub/DubScene";
import Loading from "../Loading";
import Play from "../Play";

const mobileBreakpoint = 500;
const initialWidth = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth
  }
}

function Background(props) {

  const [ready, setReady] = useState(false);
  const [width, setWidth] = useState(initialWidth);
  const [fov, setFov] = useState(17)

  let chords
  let kick
  let bass
  let perc
  let sample

  if (typeof window !== "undefined") {
    const audioCtx = new AudioContext()

    chords = suspend(
      () => addAudio(audioCtx, "/dub/chords.mp3"),
      ["/dub/chords.mp3"]
    );
    kick = suspend(
      () => addAudio(audioCtx, "/dub/kick.mp3"),
      ["/dub/kick.mp3"]
    );
    bass = suspend(
      () => addAudio(audioCtx, "/dub/bass.mp3"),
      ["/dub/bass.mp3"]
    );
    perc = suspend(
      () => addAudio(audioCtx, "/dub/perc.mp3"),
      ["/dub/perc.mp3"]
    );
    sample = suspend(
      () => addAudio(audioCtx, "/dub/sample.mp3"),
      ["/dub/sample.mp3"]
    );
  }

  useEffect(() => {
    if (width < mobileBreakpoint) {
      setFov(25)
    } else {
      setFov(17)
    }
  }, [width])

  const playAudio = () => {
    if (ready) {
      if (
        !chords.started &&
        !kick.started &&
        !bass.started &&
        !perc.started &&
        !sample.started
      ) {
        chords?.source.start(1);
        kick?.source.start(1);
        bass?.source.start(1);
        perc?.source.start(1);
        sample?.source.start(1);
      }

      chords?.gain.connect(chords.context.destination);
      kick?.gain.connect(kick.context.destination);
      bass?.gain.connect(bass.context.destination);
      perc?.gain.connect(perc.context.destination);
      sample?.gain.connect(sample.context.destination);

      chords.started = true;
      kick.started = true;
      bass.started = true;
      perc.started = true;
      sample.started = true;

      props.setPlay(true);
    }
  };

  useEffect(() => {
    const handleResizeWindow = () => {
      if (typeof window !== "undefined") {
        setWidth(window?.innerWidth)
      }
    };
    if (typeof window !== "undefined") {
      window?.addEventListener("resize", handleResizeWindow);
    }
    
    return () => {
      if (typeof window !== "undefined") {
        window?.removeEventListener("resize", handleResizeWindow);

      }
      if (chords.ready) {
        chords?.gain.disconnect();
        kick?.gain.disconnect();
        bass?.gain.disconnect();
        perc?.gain.disconnect();
        sample?.gain.disconnect();

      //  if (audioCtx) audioCtx.close();
      }
    };
  }, []);

  useEffect(() => {
    if (
      chords?.ready &&
      kick?.ready &&
      bass?.ready &&
      perc?.ready &&
      sample?.ready
    ) {
      setReady(true);
    }
  }, [chords?.ready, kick?.ready, bass?.ready, perc?.ready, sample?.ready]);

  return (
    <div className="canvas-container flex justify-center">
      <Canvas camera={{ position: [0, 0, 60], fov: fov, near: 2, far: 100 }}>
        <color attach="background" args={["black"]} />
        {props.play ? (
          <Suspense fallback={<Loading />}>
            <DubScene
              playingProps={props}
              chords={chords}
              kick={kick}
              bass={bass}
              perc={perc}
              sample={sample}
            />
          </Suspense>
        ) : (
          <Play playAudio={playAudio} />
        )}
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
}

export default Background;
