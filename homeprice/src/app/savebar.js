"use client";
import Image from "next/image";
import { useState } from "react";
import Page from "./page";
import { useRouter } from "next/navigation";
// @refresh reset

export default function SideBar() {
  const router = useRouter();
  const [savebar, setSaveBar] = useState(null);

  const handleOpen = (reason) => {
    setSaveBar(true);
  };
  const handleClose = (reason) => {
    setSaveBar(false);
  };
  return (
    <main className="flex min-h-screen ">
      {/* <div className="fixed transition ease-in-out justify-center items-center  w-screen  w-screen p-8 ">
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
      </div> */}

      <div
        // bg-violet-600
        //from-[#ffffff] to-[#f2f2f2]
        // from-[#581db5] to-[#5500b6]
        className="relative shadow-2xl shadow-innder bg-gradient-to-b from-[#581db5] to-[#5500b6] ease-in-out duration-300 left-0 w-96"
      >
        <div className="flex flex-row">
          <div className=" p-5  w-4/6 font-bold text-white text-2xl">
            <p>Homes</p>
          </div>
        </div>
        {/* bg-violet-700 */}
        <div className="flex w-full h-full justify-center">
          <div className="  bg-slate-100  w-11/12 h-11/12 mb-24   outline outline-4 outline-slate-100 shadow-[#3b0696] shadow-xl drop-shadow-lg rounded-lg"></div>
        </div>
      </div>
    </main>
  );
}
