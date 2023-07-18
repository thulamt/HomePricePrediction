"use client";
import React from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import classNames from "classnames";
import { useCallback } from "react";
import { updateCount } from "@/app/savebar";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import SideBar from "@/app/savebar";
import firebase_app from "@/firebase/config";
import addData from "@/firebase/firestore/addData";
import { Arapey } from "next/font/google";
import getData from "@/firebase/firestore/getData";
import { homedir } from "os";
import Home from "../page";

const auth = getAuth(firebase_app);

export default function Page() {
  const { user } = useAuthContext();

  useEffect(() => {
    if (user == null) {
      router.push("/");
    } else {
    }
  }, [user]);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      // Optional: Add any additional logic or redirect after sign-out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  const router = useRouter();
  const [HomeData, setHomeData] = useState(null);
  const [savebar, setSaveBar] = useState(null);
  const [count, setCount] = useState(0);
  const [delDoc, SetDelDoc] = useState(0);

  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(null);

  // state for input fields
  const [y_built, setYBuilt_Field] = useState("");
  const [y_renovated, setYRenovated_Field] = useState("");
  const [num_bedroom, setBed_Field] = useState("");
  const [num_bath, setBath_Field] = useState("");
  const [num_floor, setFloor_Field] = useState("");
  const [basement, setBasement_Field] = useState("");
  const [lot, setLot_Field] = useState("");
  const [living, setLiving_Field] = useState("");
  const [roof, setRoof_Field] = useState("");

  const handle_Y_built = (event) => {
    setYBuilt_Field(event.target.date);
    setYearBuilt(event.target.value);
  };
  const handle_Y_renovated = (event) => {
    setYRenovated_Field(event.target.value);
    setRenovated(event.target.value);
  };
  const handle_Num_bedroom = (event) => {
    setBed_Field(event.target.value);
    setBedroom(event.target.value);
  };
  const handle_Num_bathroom = (event) => {
    setBath_Field(event.target.value);
    setBath(event.target.value);
  };
  const handle_Num_floor = (event) => {
    setFloor_Field(event.target.value);
    setFloor(event.target.value);
  };
  const handle_Living = (event) => {
    setLiving_Field(event.target.value);
    setLiving(event.target.value);
  };

  const handle_basement = (event) => {
    setBasement_Field(event.target.value);
    setBasement(event.target.value);
  };
  const handle_roof = (event) => {
    setRoof_Field(event.target.value);
    setRoof(event.target.value);
  };
  const handle_lot = (event) => {
    setLot_Field(event.target.value);
    setLot(event.target.value);
  };

  ///////////////////////

  const wrapperClasses = classNames(" overflow-hidden", {
    ["w-[480px]"]: !savebar,
    ["w-0"]: savebar,
  });
  const handleOpen = (reason) => {
    setSaveBar(!savebar);
  };

  const fetchData = async () => {
    try {
      const response = await fetch("/api/hello");
      const data = await response.json();
      setHomeData(data);
      console.log(data);
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  function test() {
    setMessage(getJsonData(0));
    fetchData();
  }
  function signUp() {
    router.push("/signup");
  }
  function signIn() {
    router.push("/signin");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/homeData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const handleForm = async () => {
    const { result, error } = await addData(
      "users" + "/" + auth.currentUser.uid + "/homedata",
      getJsonData(1).name,
      getJsonData(1)
    );

    if (error) {
      return console.log(error);
    }
    handleForm2();
    setResponse(false);
  };

  const handleForm2 = async () => {
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
    handleForm2();
    return () => {};
  }, []);
  const deleteDoc = async (key) => {
    const { result, error } = await getData(
      "users" + "/" + auth.currentUser.uid + "/homedata",
      key,
      "del"
    );

    if (error) {
      return console.log(error);
    }
    if (result) {
      console.log("working");
      handleForm2();
    }
  };

  const autoFill = (key) => {
    let data = getResult();
    let homeData = data[key];
    setYBuilt_Field(`${homeData.built}-01-01`);
    setYRenovated_Field(`${homeData.renovated}-01-01`);
    // console.log("year", `${homeData.renovated}-01-01`, homeData.renovated);

    setBed_Field(homeData.bed);
    setBedroom(homeData.bed);
    setBath_Field(homeData.bath);
    setBath(homeData.bath);
    setFloor_Field(homeData.floor);
    setFloor(homeData.floor);
    setBasement_Field(homeData.basement);
    setBasement(homeData.basement);
    setLot_Field(homeData.lot);
    setLot(homeData.lot);
    setLiving_Field(homeData.living);
    setLiving(homeData.living);
    setRoof_Field(homeData.roof);
    setRoof(homeData.roof);
    //setYBuilt_Field(homeData.built);
  };

  return (
    <main className=" min-h-screen overflow-hidden">
      <div className="flex flex-row">
        <div
          className={wrapperClasses}
          style={{ transition: "width 200ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
        >
          {/* bg-gradient-to-b from-[#581db5] to-[#5500b6] */}
          <div className="flex flex-col   shadow-inner shadow-2xl shadow[#000000] bg-white ">
            <div className="flex   flex-row  p-9">
              <div className=" w-4/6 font-bold text-black text-2xl">
                <p> Homes</p>
              </div>
            </div>
            {/* bg-violet-700 */}
            <div className="flex w-full h-full  justify-center ">
              {/*                <div className="  flex flex-col items-center   w-11/12   mb-24   overflow-auto     bg-slate-100 shadow-[#17023b] shadow-2xl drop-shadow-3xl rounded-lg ">
               */}
              <div className="  flex flex-col items-center   w-11/12  overflow-scroll    min-h-screen max-h-screen bg-white shadow-[#17023b] shadow-2xl drop-shadow-3xl rounded-xl  ">
                <div className="hidden"> {count}</div>

                {Object.keys(getResult()).map((key) => (
                  <div className="flex flex-row justify-center items-center ">
                    <button
                      // className=" flex justify-center items-center  text-xl text-white  w-11/12 mt-5  shrink w-64 h-14  pt-5 pb-5 mb-5 rounded-l-lg shadow-xl  "
                      className=" bg-gray-600 hover:bg-violet-400 text-xl  text-white-800 font-bold  w-11/12 mt-5 w-64 h-14  pt-5 pb-5 mb-5 rounded-l-lg hover:scale-90  transition delay-150 duration-300 ease-in-out shadow-lg shadow-[#4e26ab]  items-center"
                      onClick={() => autoFill(key)}
                      placeholder={key}
                    >
                      {key}
                    </button>
                    <button
                      type="button"
                      id={key}
                      className=" flex justify-center items-center bg-violet-600  h-14 rounded-r-lg hover:scale-110  transition delay-150 duration-300 ease-in-out shadow-md "
                      onClick={() => deleteDoc(key)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex  bg-violet-700 p-8 shadow-md  justify-between ">
            <div className="flex flex-row">
              <button className="pr-10" onClick={handleOpen}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={
                      !savebar
                        ? "M6 18L18 6M6 6l12 12"
                        : " M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    }
                  />
                </svg>
              </button>

              <a>
                <h1 className="text-3xl font-bold">ValueX </h1>
              </a>
            </div>
            <div class="flex space-x-4">
              <button
                className="bg-slate-100 pr-5 pl-5   hover:scale-110 transition delay-150 duration-300 ease-in-out rounded shadow-md"
                onClick={handleSignOut}
              >
                <label className="text-black">Sign Out</label>
              </button>
            </div>
          </div>
          <div className="flex  justify-center">
            {/* ml-[500px] mr-[500px] */}
            <div className=" rounded-3xl shadow-xl justify-self  bg-slate-100  pl-24 pr-24 py-10 mt-10">
              <div className="flex text-black text-[25px] font-bold justify-center">
                <p> House Price Predictor</p>
              </div>

              <div className="flex flex-col items-center mt-10 space-y-10">
                <div className="flex flex-row  space-x-20">
                  <div>
                    <p className="text-black"> Year Built</p>
                    <input
                      className="rounded-md shadow-2xl w-full py-2  sm:text-md dark:text-black px-10"
                      type="date"
                      id="in_built"
                      placeholder="0"
                      value={y_built}
                      onChange={handle_Y_built}
                    />
                  </div>
                  <div>
                    <p className="text-black"> Year Renovated</p>
                    <input
                      className="rounded-md  shadow-2xl w-full py-2  sm:text-md dark:text-black px-10"
                      type="date"
                      placeholder="0"
                      value={y_renovated}
                      onChange={handle_Y_renovated}
                    />
                  </div>
                </div>
                <div className="flex flex-row space space-x-20">
                  <div>
                    <p className="text-black"> Number of Bedroom</p>
                    <input
                      className="rounded-md shadow-2xl w-full py-2 px-5  sm:text-md dark:text-black"
                      type="number"
                      placeholder="0"
                      value={num_bedroom}
                      onChange={handle_Num_bedroom}
                    />
                  </div>
                  <div>
                    <p className="text-black"> Number of Bathroom</p>
                    <input
                      className="rounded-md shadow-2xl   w-full py-2 px-5 sm:text-md dark:text-black"
                      type="number"
                      placeholder="0"
                      value={num_bath}
                      onChange={handle_Num_bathroom}
                    />
                  </div>
                </div>
                <div className="flex flex-row space space-x-20">
                  <div>
                    <p className="text-black"> Number of Floors</p>
                    <input
                      className="rounded-md shadow-2xl w-full py-2 px-5  sm:text-md dark:text-black"
                      type="number"
                      placeholder="0"
                      value={num_floor}
                      onChange={handle_Num_floor}
                    />
                  </div>
                  <div>
                    <p className="text-black"> Square Footage of the Lot</p>
                    <input
                      className="rounded-md   shadow-2xl w-full py-2 px-5 sm:text-md dark:text-black"
                      type="number"
                      placeholder="0"
                      value={lot}
                      onChange={handle_lot}
                    />
                  </div>
                </div>
                <div className="flex flex-row space space-x-20">
                  <div>
                    <p className="text-black"> Square Footage of Living</p>
                    <input
                      className="rounded-md shadow-2xl w-full py-2 px-5  sm:text-md dark:text-black"
                      type="number"
                      placeholder="0"
                      value={living}
                      onChange={handle_Living}
                    />
                  </div>
                  <div>
                    <p className="text-black"> Square Footage of Roof</p>
                    <input
                      className="rounded-md shadow-2xl w-full py-2 px-5 sm:text-md dark:text-black"
                      type="number"
                      placeholder="0"
                      value={roof}
                      onChange={handle_roof}
                    />
                  </div>
                </div>
                <div className="flex flex-row space space-x-20">
                  <form onSubmit={handleSubmit}>
                    <button
                      className="bg-violet-600 hover:bg-violet-400 text-[20px]  text-white-800 font-bold py-4 px-20 rounded-xl  shadow-lg shadow-[#4e26ab]  items-center"
                      onClick={test}
                      type="submit"
                    >
                      Predict
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {response && (
              <div id="small-modal" tabindex="-1" className="fixed h-full ">
                <div className="flex justify-center items-center  h-full ">
                  <div className="relative w-96 rounded-lg shadow-xl border-p bg-gradient-to-r from-white to-white ">
                    <div className="flex items-center justify-center   p-5  rounded-t ">
                      <h3 className="text-xl font-medium text-gray-900 dark:text-black">
                        Home Price Prediction
                      </h3>
                    </div>
                    <div className="flex flex-col justify-center items-center p-6  space-y-6">
                      <p className="text-base text-lg leading-relaxed text-gray-500 dark:text-gray-700">
                        {response.message}
                      </p>
                      <input
                        className="rounded-md shadow-2xl w-full py-2 px-5 sm:text-md dark:text-black"
                        type="name"
                        placeholder="Name for the Home"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div class="flex  justify-center p-6 space-x-10  rounded-b dark:border-gray-600">
                      <button
                        type="button"
                        onClick={handleForm}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Save
                      </button>
                      <button
                        data-modal-hide="small-modal"
                        type="button"
                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        onClick={() => setResponse(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

var year_built = 0;
var num_bath = 0;
var num_floor = 0;
var y_renovated = 0;
var houseName = "";
var num_bedroom = 0;
var sqft_roof = 0;
var sqft_basement = 0;
var sqft_living = 0;
var sqft_lot = 0;

function setYearBuilt(p) {
  9;
  let date = new Date(p);
  year_built = date.getFullYear().toString();

  console.log(year_built);
}
function setBath(p) {
  num_bath = p;
  console.log(num_bath);
}
function setFloor(p) {
  num_floor = p;
  console.log(num_floor);
}
function setLot(p) {
  sqft_lot = p;
  console.log(sqft_lot);
}
function setRoof(p) {
  sqft_roof = p;
  console.log(sqft_roof);
}
function setLiving(p) {
  sqft_living = p;
  console.log(sqft_living);
}
function setBasement(p) {
  sqft_basement = p;
  console.log(sqft_basement);
}

function setRenovated(p) {
  let date = new Date(p);
  y_renovated = date.getFullYear();
  console.log(y_renovated);
}
function setBedroom(p) {
  num_bedroom = p;
  console.log(num_bedroom);
}
function setName(p) {
  houseName = p;
  console.log(houseName);
}

function getJsonData(i) {
  if (i == 0) {
    //bedrooms,bathrooms,sqft_living,sqft_lot,floors,sqft_above,sqft_basement,yr_built,yr_renovated
    const array = [
      num_bedroom,
      num_bath,
      sqft_living,
      sqft_lot,
      num_floor,
      sqft_roof,
      sqft_basement,
      year_built,
      y_renovated,
    ];
    console;
    return array;
  } else if (i == 1) {
    const array = {
      bed: num_bedroom,
      bath: num_bath,
      living: sqft_living,
      lot: sqft_lot,
      floor: num_floor,
      roof: sqft_roof,
      basement: sqft_basement,
      built: year_built,
      renovated: y_renovated,
      name: houseName,
    };
    houseName = "";

    return array;
  }

  return null;
}

let data = {};

function setResult(p) {
  data = p;
}

function getResult() {
  return data;
}
