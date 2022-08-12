import React from "react";
import { Html } from "@react-three/drei";

const Play = ({ playAudio }) => {
  return (
    <Html prepend center>
      <div
        className={
          "bg-mi font-bold w-full h-full flex justify-center items-center"
        }
      >
        <button
          className={"text-sky text-4xl font-light italic flex flex-col items-center "}
          onClick={() => playAudio()}
        >
          <svg
            className={"mb-4 "}
            xmlns="http://www.w3.org/2000/svg"
            width="27.998"
            height="32"
            viewBox="0 0 27.998 32"
          >
            <path
              id="Icon_awesome-play"
              data-name="Icon awesome-play"
              d="M26.524,13.418,4.525.413A2.983,2.983,0,0,0,0,2.994V29A3,3,0,0,0,4.525,31.58l22-13a3,3,0,0,0,0-5.162Z"
              transform="translate(0 -0.002)"
              fill="#B28686"
            />
          </svg>
          start
        </button>
      </div>
    </Html>
  );
};

export default Play;
