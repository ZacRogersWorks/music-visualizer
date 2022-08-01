import React from "react";

function Modal({ setModalOpen }) {
  return (
    <div
      className={`modal absolute top-0 left-0 h-screen w-screen px-8 pt-12 pb-16 lowercase`}
    >
      <div className={`relative h-full w-full flex flex-col justify-around`}>
        <button
          className={`absolute top-0 right-0`}
          onClick={() => setModalOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28.819"
            height="28.257"
            viewBox="0 0 28.819 28.257"
          >
            <g
              id="Group_2"
              data-name="Group 2"
              transform="translate(-261.103 -249.069)"
            >
              <line
                id="Line_1"
                data-name="Line 1"
                x2="26"
                y2="25.395"
                transform="translate(262.5 250.5)"
                fill="none"
                stroke="#fff"
                strokeWidth="4"
              />
              <line
                id="Line_2"
                data-name="Line 2"
                x1="25"
                y2="25.261"
                transform="translate(263.5 250.5)"
                fill="none"
                stroke="#fff"
                strokeWidth="4"
              />
            </g>
          </svg>
        </button>
        <div>
          <h2 className="font-bold text-3xl mb-1">Hi, I'm Shoyei</h2>
          <p className="text-xl">Audio artist and front end developer</p>
        </div>
        <p className="text-lg">
          I made this project with react-three-fiber, next.js, the web audio
          api, and some of my favorite synthesizers. Throughout the rest of
          2022, I’d like to add a few more tracks and visualizations to this
          page for some sort of “virtual EP”. If you’d like to know more, please
          visit or contact me at www.zacrogers.works
        </p>
        <div className="flex">
          <svg
            className="mr-4"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path
              id="Icon_awesome-spotify"
              data-name="Icon awesome-spotify"
              d="M24,.563a24,24,0,1,0,24,24A24.008,24.008,0,0,0,24,.563Zm9.745,35.313a1.846,1.846,0,0,1-1.035-.348c-6.039-3.639-13.065-3.794-20-2.371a6.249,6.249,0,0,1-1.152.252,1.507,1.507,0,0,1-1.529-1.529,1.534,1.534,0,0,1,1.316-1.626c7.926-1.752,16.026-1.6,22.935,2.535a1.637,1.637,0,0,1,.939,1.6,1.462,1.462,0,0,1-1.471,1.49Zm2.6-6.348a2.39,2.39,0,0,1-1.19-.406,31.361,31.361,0,0,0-23.09-2.845,3.986,3.986,0,0,1-1.152.252A1.879,1.879,0,0,1,9.039,24.65a1.9,1.9,0,0,1,1.5-2A32.551,32.551,0,0,1,20,21.33a33.876,33.876,0,0,1,17.129,4.4,2.018,2.018,0,0,1,1.094,1.906,1.875,1.875,0,0,1-1.877,1.887Zm3-7.374a2.226,2.226,0,0,1-1.248-.377c-6.89-4.113-19.21-5.1-27.184-2.874a4.6,4.6,0,0,1-1.248.252,2.233,2.233,0,0,1-2.255-2.284A2.286,2.286,0,0,1,9.1,14.556a40.559,40.559,0,0,1,11.371-1.471c7.065,0,14.468,1.471,19.877,4.626A2.272,2.272,0,0,1,41.594,19.9a2.242,2.242,0,0,1-2.245,2.255Z"
              transform="translate(0 -0.563)"
              fill="#fff"
            />
          </svg>
          <svg
            className="mr-4"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="47.989"
            viewBox="0 0 48 47.989"
          >
            <path
              id="Icon_awesome-instagram"
              data-name="Icon awesome-instagram"
              d="M24,13.928a12.3,12.3,0,1,0,12.3,12.3A12.284,12.284,0,0,0,24,13.928Zm0,20.3a8,8,0,1,1,8-8,8.014,8.014,0,0,1-8,8ZM39.677,13.425a2.87,2.87,0,1,1-2.87-2.87A2.863,2.863,0,0,1,39.677,13.425Zm8.149,2.913c-.182-3.844-1.06-7.25-3.876-10.055S37.739,2.6,33.895,2.406c-3.962-.225-15.838-.225-19.8,0-3.834.182-7.239,1.06-10.055,3.866S.356,12.483.163,16.327c-.225,3.962-.225,15.838,0,19.8.182,3.844,1.06,7.25,3.876,10.055s6.211,3.684,10.055,3.876c3.962.225,15.838.225,19.8,0,3.844-.182,7.25-1.06,10.055-3.876s3.684-6.211,3.876-10.055c.225-3.962.225-15.827,0-19.789Zm-5.119,24.04a8.1,8.1,0,0,1-4.562,4.562C34.987,46.193,27.491,45.9,24,45.9s-11,.278-14.146-.964a8.1,8.1,0,0,1-4.562-4.562c-1.253-3.159-.964-10.655-.964-14.146s-.278-11,.964-14.146A8.1,8.1,0,0,1,9.854,7.525C13.013,6.272,20.509,6.561,24,6.561s11-.278,14.146.964a8.1,8.1,0,0,1,4.562,4.562c1.253,3.159.964,10.655.964,14.146S43.96,37.23,42.707,40.378Z"
              transform="translate(0.005 -2.238)"
              fill="#fff"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path
              id="Icon_awesome-youtube-square"
              data-name="Icon awesome-youtube-square"
              d="M20.014,20.475l10.2,5.8-10.2,5.8ZM48,7.393V45.107a5.144,5.144,0,0,1-5.143,5.143H5.143A5.144,5.144,0,0,1,0,45.107V7.393A5.144,5.144,0,0,1,5.143,2.25H42.857A5.144,5.144,0,0,1,48,7.393ZM43.5,26.282s0-6.386-.814-9.45a4.891,4.891,0,0,0-3.45-3.471C36.2,12.536,24,12.536,24,12.536s-12.2,0-15.236.825a4.891,4.891,0,0,0-3.45,3.471c-.814,3.054-.814,9.45-.814,9.45s0,6.386.814,9.45a4.82,4.82,0,0,0,3.45,3.418C11.8,39.964,24,39.964,24,39.964s12.2,0,15.236-.825a4.82,4.82,0,0,0,3.45-3.418c.814-3.054.814-9.439.814-9.439Z"
              transform="translate(0 -2.25)"
              fill="#fff"
            />
          </svg>
        </div>
        <p>Copyright 2022</p>
      </div>
    </div>
  );
}

export default Modal;
