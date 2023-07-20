"use client";
import { useState } from "react";
import classNames from "classnames";
import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";

import SideBar from "./savebar";
import { useRouter } from "next/navigation";
import { Bitter } from "next/font/google";

// @refresh reset

export default function Home(prop) {
  const { user } = useAuthContext();
  useEffect(() => {
    if (user == null) {
      router.push("/");
    } else {
      router.push("/admin");
    }
  }, [user]);

  const router = useRouter();
  const [HomeData, setHomeData] = useState(null);
  const [savebar, setSaveBar] = useState(null);

  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(null);

  const [isCollapsible, setIsCollapsible] = useState(false);

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
        <div className="flex flex-col w-full">
          <div className="flex  bg-violet-700 p-8 shadow-md  justify-between ">
            <div className="flex flex-row">
              <button
                className=" flex flex-row justify-center items-center space-x-2"
                onClick={() => router.push("/")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <a>
                  <h1 className="text-3xl font=[league spartan] font-bold">
                    valueX{" "}
                  </h1>
                </a>
              </button>
            </div>
            <div class="flex space-x-4">
              <button
                className="bg-slate-100 pr-5 pl-5   hover:scale-125 transition delay-150 duration-300 ease-in-out rounded shadow-md"
                onClick={signUp}
              >
                <label className="text-black">Sign Up</label>
              </button>
              <button
                className=" bg-violet-600 pr-5 pl-5 rounded shadow-md hover:scale-125 transition delay-150 duration-300 ease-in-out"
                onClick={signIn}
              >
                <label className="text-white   ">Sign In</label>
              </button>
            </div>
          </div>
          <div className="flex  justify-center">
            {/* ml-[500px] mr-[500px] */}
            <div className=" rounded-3xl shadow-xl justify-self  bg-slate-100  pl-24 pr-24 py-10 mt-10">
              <div className="flex text-black text-[25px] font-bold justify-center">
                <p> House Price Predictor</p>
              </div>

              <div className="flex flex-col items-center mt-10  space-y-20">
                <div className="flex flex-row    space-x-20">
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
                  <div>
                    <p className="text-black"> Number of Bedroom</p>
                    <input
                      className="rounded-md shadow-2xl w-full py-2 px-5  sm:text-md dark:text-black"
                      type="number"
                      placeholder="0"
                      onChange={(e) => setBedroom(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-row  space space-x-20">
                  <div>
                    <p className="text-black"> Number of Bathroom</p>
                    <input
                      className="rounded-md shadow-2xl   w-full py-2 px-5 sm:text-md dark:text-black"
                      type="number"
                      placeholder="0"
                      onChange={(e) => setBath(e.target.value)}
                    />
                  </div>
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
                      onChange={(e) => setLot(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-row  space space-x-20">
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
                  <div>
                    <p className="text-black"> Square Footage of Basement</p>
                    <input
                      className="rounded-md shadow-2xl w-full py-2 px-5 sm:text-md dark:text-black"
                      type="number"
                      placeholder="0"
                      onChange={(e) => setBasement(e.target.value)}
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
  let date = new Date(p);
  if(isNaN(date)){
    year_built="0";
  }else{
    let year=date.getFullYear();
    if(year<0){
      year=0;
    }
    year_built = date.getFullYear().toString();
  }
  console.log(year_built);
}
function setBath(p) {
  num_bath = p;
  if(isNaN(num_bath)){
    num_bath=0;
  }else if(num_bath<0){
    num_bath=0;
  }
  console.log(num_bath);
}
function setFloor(p) {
  num_floor = p;
  if(isNaN(num_floor)){
    num_floor=0;
  }else if(num_floor<0){
    num_floor=0;
  }
  console.log(num_floor);
}
function setLot(p) {
  sqft_lot = p;
  if(isNaN(sqft_lot)){
    sqft_lot=0;
  }else if(sqft_lot<0){
    sqft_lot=0;
  }
  console.log(sqft_lot);
}
function setRoof(p) {
  sqft_roof = p;
  if(isNaN(sqft_roof)){
    sqft_roof=0;
  }else if(sqft_roof<0){
    sqft_roof=0;
  }
  console.log(sqft_roof);
}
function setLiving(p) {
  sqft_living = p;
  if(isNaN(sqft_living)){
    sqft_living=0;
  }else if(sqft_living<0){
    sqft_living=0;
  }
  console.log(sqft_living);
}
function setBasement(p) {
  sqft_basement = p;
  if(isNaN(sqft_basement)){
    sqft_basement=0;
  }else if(sqft_basement<0){
    sqft_basement=0;
  }
  console.log(sqft_basement);
}

function setRenovated(p) {
  let date = new Date(p);
  if(isNaN(date)){
    y_renovated=0;
  }else{
    y_renovated = date.getFullYear();
    if(y_renovated<0){
      y_renovated=0;
    }
  }
  console.log(y_renovated);
}
function setBedroom(p) {
  num_bedroom = p;
  if(isNaN(num_bedroom)){
    num_bedroom=0;
  }else if(num_bedroom<0){
    num_bedroom=0;
  }
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
//module.exports = { year_built, num_bath, num_floor, y_renovated, num_bedroom, sqft_roof, sqft_basement, sqft_living, sqft_lot};
module.exports = {
  setYearBuilt,
  setBath,
  setFloor,
  setLot,
  setRoof,
  setLiving,
  setBasement,
  setRenovated,
  setBedroom,
  getJsonData,
  year_built, 
  num_bath, 
  num_floor, 
  y_renovated, 
  num_bedroom, 
  sqft_roof, 
  sqft_basement, 
  sqft_living, 
  sqft_lot
};