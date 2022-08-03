import { useState } from "react";
import Background from "../components/three/Background";
import HomeContent from "../components/HomeContent";

export default function Home() {
  const [ready, setReady] = useState(false);

  return (
    <>
      {/* {ready && <Background />} */}
      <HomeContent ready={ready} setReady={setReady} />
    </>
  );
}
