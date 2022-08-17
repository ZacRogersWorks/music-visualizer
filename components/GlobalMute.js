import React from "react";
import Image from "next/image";

function GlobalMute({ globalMute, setGlobalMute }) {
  const toggleMute = () => {
    globalMute ? setGlobalMute(false) : setGlobalMute(true);
  };

  return (
    <button className={`${globalMute && "muted"} pointer-events-auto`} onClick={toggleMute}>
      <Image src={"/images/globalMute.svg"} alt="Mute All" width={48} height={48} placeholder="blur"></Image>
    </button>
  );
}

export default GlobalMute;
