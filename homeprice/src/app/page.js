"use client";
import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { Federant } from "next/font/google";
import { Duplex } from "stream";
import { document } from "postcss";
import SideBar from "./savebar";
import { useRouter } from "next/navigation";

// @refresh reset

export default function Home(prop) {
  const router = useRouter();
  const [HomeData, setHomeData] = useState(null);
  const [savebar, setSaveBar] = useState(null);

  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(null);

  const [isCollapsible, setIsCollapsible] = useState(false);

  const wrapperClasses = classNames(" overflow-hidden", {
    ["w-96"]: !savebar,
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
    setMessage(getJsonData());
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

  return (
    <main className=" min-h-screen">
      <div className="flex flex-row">
        <div
          className={wrapperClasses}
          style={{ transition: "width 200ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
        >
          <SideBar></SideBar>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex  bg-violet-700 p-8 shadow-md  justify-between ">
            <div className="flex flex-row">
              <button className="pr-10" onClick={handleOpen}>
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

              <a>
                <h1 className="text-3xl font-bold">ValueX </h1>
              </a>
            </div>
            <div class="flex space-x-4">
              <button onClick={signUp}>
                <label>Sign Up</label>
              </button>
              <button onClick={signIn}>
                <label>Sign In</label>
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
                      placeholder="0"
                      onChange={(e) => setYearBuilt(e.target.value)}
                    />
                  </div>
                  <div>
                    <p className="text-black"> Year Renovated</p>
                    <input
                      className="rounded-md  shadow-2xl w-full py-2  sm:text-md dark:text-black px-10"
                      type="date"
                      placeholder="0"
                      onChange={(e) => setRenovated(e.target.value)}
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
                      onChange={(e) => setBedroom(e.target.value)}
                    />
                  </div>
                  <div>
                    <p className="text-black"> Number of Bathroom</p>
                    <input
                      className="rounded-md shadow-2xl   w-full py-2 px-5 sm:text-md dark:text-black"
                      type="number"
                      placeholder="0"
                      onChange={(e) => setBath(e.target.value)}
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
                      onChange={(e) => setFloor(e.target.value)}
                    />
                  </div>
                  <div>
                    <p className="text-black"> Square Footage of the Lot</p>
                    <input
                      className="rounded-md   shadow-2xl w-full py-2 px-5 sm:text-md dark:text-black"
                      type="number"
                      placeholder="0"
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
                      onChange={(e) => setLiving(e.target.value)}
                    />
                  </div>
                  <div>
                    <p className="text-black"> Square Footage of Roof</p>
                    <input
                      className="rounded-md shadow-2xl w-full py-2 px-5 sm:text-md dark:text-black"
                      type="number"
                      placeholder="0"
                      onChange={(e) => setRoof(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-row space space-x-20">
                  <form onSubmit={handleSubmit}>
                    {/* <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            /> */}
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
          </div>
          {response && (
            <div
              id="small-modal"
              tabindex="-1"
              className="fixed  z-50  w-full  overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="grid place-items-center w-full  h-full ">
                <div className="relative w-96 rounded-lg shadow-xl border-p bg-gradient-to-r from-white to-white ">
                  <div className="flex items-center justify-center   p-5  rounded-t ">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-black">
                      Home Price Prediction
                    </h3>
                  </div>
                  <div className="flex justify-center p-6  space-y-6">
                    <p className="text-base text-lg leading-relaxed text-gray-500 dark:text-gray-400">
                      {response.message}
                    </p>
                  </div>
                  <div class="flex  justify-center p-6 space-x-10  rounded-b dark:border-gray-600">
                    <button
                      type="button"
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
    </main>
  );
}

var year_built = 0;
var num_bath = 0;
var num_floor = 0;
var y_renovated = 0;
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

function getJsonData() {
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
  return array;
}

function hideModal() {}

// import Image from "next/image";
// // @refresh reset
// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="bg-purple-400"></div>
//       <div>
//         <a>
//           <h1 className="text-3xl font-bold items-center">
//             Home Price Predictor
//           </h1>
//         </a>
//       </div>
//     </main>
//   );
// }
