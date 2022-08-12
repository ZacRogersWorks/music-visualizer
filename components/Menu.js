import React from "react";
import SocialLinks from "./SocialLinks";
import Link from "next/link";

function Menu({ setMenuOpen }) {
  return (
    <div
      className={`absolute top-0 right-0 h-screen w-full md:w-[50%] px-6 md:px-12 pt-8 pb-32 lowercase bg-midnight`}
    >
      <div className={`relative h-full w-full flex flex-col items-end`}>
        <button
          className={` text-sky`}
          onClick={() => setMenuOpen(false)}
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
                stroke="currentColor"
                strokeWidth="4"
              />
              <line
                id="Line_2"
                data-name="Line 2"
                x1="25"
                y2="25.261"
                transform="translate(263.5 250.5)"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
            </g>
          </svg>
        </button>
        <div className="h-full border-r-2 my-8 text-clay"></div>
        <div className="mb-8">
          <ul className="text-right text-3xl uppercase text-sky font-light">
          <li>
            <Link href="#home" onMouseDown={() => setMenuOpen(false)}>
            Home
            </Link>
          </li>
          <li>
            <Link href="#gallery" onMouseDown={() => setMenuOpen(false)}>
            Sound Gallery
            </Link>
          </li>
          <li>
            <Link href="#about" onMouseDown={() => setMenuOpen(false)}>
            About Me
            </Link>
          </li>
          </ul>
        </div>
        <SocialLinks />
      </div>
    </div>
  );
}

export default Menu;
