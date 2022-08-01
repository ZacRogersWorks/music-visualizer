import React, { useState } from "react";
import Modal from "./Modal";

function HomeContent({ ready, setReady }) {
  const [modalOpen, setModalOpen] = useState();

  return (
    <>
      <div
        className={`${ready ? "ready" : "notready"} ${
          ready && "clicked"
        } h-screen w-screen px-8 pt-12 pb-16 lowercase bg-gradient-to-b from-black to-gray-800`}
      >
        <div className={`relative h-full w-full flex flex-col justify-around`}>
          <button
            className={`${modalOpen && "hidden"} absolute top-0 right-0`}
            onClick={() => setModalOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
            >
              <g
                id="Icon_feather-info"
                data-name="Icon feather-info"
                transform="translate(-1.5 -1.5)"
              >
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M33,18A15,15,0,1,1,18,3,15,15,0,0,1,33,18Z"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                />
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M18,24V18"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                />
                <path
                  id="Path_3"
                  data-name="Path 3"
                  d="M18,12h0"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                />
              </g>
            </svg>
          </button>
          <h1 className="text-7xl font-bold">Shoyei</h1>
          <div>
            <p className="text-4xl font-bold mb-5">Welcome!</p>
            <p className="text-xl">
              Let me show you an idea I’ve been working on to make my music more
              enjoyable, interactive, and meditative
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <button
              className="border-4 rounded-full p-8 shadow-glow mb-4"
              onClick={() => setReady(true)}
            >
              <svg
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
                  fill="#fff"
                />
              </svg>
            </button>
            <p>Start the experience</p>
          </div>
        </div>
      </div>
      {modalOpen && <Modal setModalOpen={setModalOpen}/>}
    </>
  );
}

export default HomeContent;
