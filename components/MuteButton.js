import React from "react";

function MuteButton({ name, playing, setPlaying }) {
  const togglePlay = () => {
    playing ? setPlaying(false) : setPlaying(true);
  };
  return (
    <button
      className={`${
        playing && "playing"
      } pointer-events-auto relative h-20 w-24 text-center font-bold justify-center
      before:content=["] before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:h-20 before:w-20 before:border-solid before:border-4 before:rounded-full`}
      onClick={togglePlay}
    >
      {name}
    </button>
  );
}

export default MuteButton;
