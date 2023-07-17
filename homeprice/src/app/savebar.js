"use client";
import Image from "next/image";
import { useState } from "react";
import Page from "./page";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect } from "react";
import firebase_app from "@/firebase/config";
import { onAuthStateChanged, getAuth } from "firebase/auth";

import getData from "@/firebase/firestore/getData";
// @refresh reset
const auth = getAuth(firebase_app);

export default function SideBar() {
  const router = useRouter();
  const [savebar, setSaveBar] = useState(null);
  const [count, setCount] = useState(0);

  const handleOpen = (reason) => {
    setSaveBar(true);
  };
  const handleClose = (reason) => {
    setSaveBar(false);
  };

  const handleForm = async () => {
    const { result, error } = await getData(
      "users" + "/" + auth.currentUser.uid + "/homedata",
      auth.currentUser.uid,
      "multi"
    );

    if (error) {
      return console.log(error);
    }
    if (result) {
      console.log("testing");
      setResult(result);
      setCount(count + 1);
    }
  };
  useEffect(() => {
    // This effect runs after every render
    console.log("Effect ran");
    handleForm();

    // Cleanup function (optional)
    return () => {
      console.log("Cleanup ran");
    };
  }, []);

  const updateCount = (value) => {
    setCount(count + 1);
  };

  const data = ["1", "2", "3", "4", "5", "6", "7", "8", "5", "6", "7", "8"];

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
        //from-[#ffffff] to-[#f2f2f2] bg-gradient-to-b from-[#581db5] to-[#5500b6]
        // from-[#581db5] to-[#5500b6]
        className="relative shadow-2xl  max-h-screen shadow-innder bg-gradient-to-b from-[#581db5] to-[#5500b6] ease-in-out duration-300 left-0 w-96"
      >
        <div className="flex   flex-row  p-9">
          <div className=" w-4/6 font-bold text-white text-2xl">
            <p> Homes</p>
          </div>
        </div>
        {/* bg-violet-700 */}
        <div className="flex w-full min-h-screen max-h-screen justify-center ">
          <div className="  flex flex-col items-center   w-11/12   mb-24   overflow-auto   shadow-[#3b0696] shadow-2xl drop-shadow-lg rounded-lg ">
            <div className="hidden"> {count}</div>

            {Object.keys(getResult()).map((key) => (
              <div className="flex flex-rown items-center ">
                <div className=" w-11/12 mt-5  shrink w-64 h-14  pt-5 pb-5 mb-5 rounded shadow-2xl bg-white  text-white">
                  <label>TEST</label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

let data = {};

function setResult(p) {
  data = p;

  console.log("testing", data);
}

function getResult() {
  return data;
}
