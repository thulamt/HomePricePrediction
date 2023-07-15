"use client";
import Image from "next/image";
import { useState } from "react";
import Page from "./page";

// @refresh reset

export default function SideBar() {
  const [savebar, setSaveBar] = useState(null);

  const handleOpen = (reason) => {
    setSaveBar(true);
  };
  const handleClose = (reason) => {
    setSaveBar(false);
  };
  return (
    <main>
      <div className="fixed transition ease-in-out justify-center items-center  w-screen  w-screen p-8 ">
        <button onClick={handleOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>

      <div
        // bg-violet-600
        //from-[#ffffff] to-[#f2f2f2]
        // from-[#581db5] to-[#5500b6]
        className={`relative shadow-2xl bg-gradient-to-b from-[#581db5] to-[#5500b6] ease-in-out duration-300 left-0 w-96 h-full  ${
          false ? "translate-x-1000 w-96 h-full" : " -translate-x-full"
        }`}
      >
        <div className="flex flex-row">
          <div className=" p-5  w-4/6 font-bold text-white text-2xl">
            <p>Saved Homes</p>
          </div>
          <div className=" flex w-2/6  justify-end  p-4">
            <button onClick={handleClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="white"
                class="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* bg-violet-700 */}
        <div className="flex w-full h-full justify-center">
          <div className="  bg-slate-100  w-11/12 h-11/12 mb-24   outline outline-4 outline-slate-100 shadow-[#a3a3a3] shadow-xl drop-shadow-lg rounded-lg"></div>
        </div>
      </div>
    </main>
  );
}
