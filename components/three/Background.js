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

function Background(props) {
  const audioCtx = new AudioContext();

  const [ready, setReady] = useState(false);

  let chords = suspend(
    () => addAudio(audioCtx, "/dub/chords.mp3"),
    ["/dub/chords.mp3"]
  );
  let kick = suspend(
    () => addAudio(audioCtx, "/dub/kick.mp3"),
    ["/dub/kick.mp3"]
  );
  let bass = suspend(
    () => addAudio(audioCtx, "/dub/bass.mp3"),
    ["/dub/bass.mp3"]
  );
  let perc = suspend(
    () => addAudio(audioCtx, "/dub/perc.mp3"),
    ["/dub/perc.mp3"]
  );
  let sample = suspend(
    () => addAudio(audioCtx, "/dub/sample.mp3"),
    ["/dub/sample.mp3"]
  );

  const playAudio = () => {
    if (ready) {
      if (
        !chords.started &&
        !kick.started &&
        !bass.started &&
        !perc.started &&
        !sample.started
      ) {
        chords.source.start(1);
        kick.source.start(1);
        bass.source.start(1);
        perc.source.start(1);
        sample.source.start(1);
      }
      console.log("source started", chords);

      chords.gain.connect(chords.context.destination);
      kick.gain.connect(kick.context.destination);
      bass.gain.connect(bass.context.destination);
      perc.gain.connect(perc.context.destination);
      sample.gain.connect(sample.context.destination);

      chords.started = true;
      kick.started = true;
      bass.started = true;
      bass.started = true;
      bass.started = true;

      props.setPlay(true);
    }
  };

  useEffect(() => {
    return () => {
      if (chords.ready) {
        chords.gain.disconnect();
        kick.gain.disconnect();
        bass.gain.disconnect();
        perc.gain.disconnect();
        sample.gain.disconnect();

        audioCtx.close();
      }
    };
  }, []);

  useEffect(() => {
    if (
      chords.ready &&
      kick.ready &&
      bass.ready &&
      perc.ready &&
      sample.ready
    ) {
      setReady(true);
    }
  }, [chords.ready, kick.ready, bass.ready, perc.ready, sample.ready]);

  return (
    <div className="canvas-container flex justify-center">
      <Canvas camera={{ position: [0, 0, 60], fov: 20, near:2, far: 100}}>
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
