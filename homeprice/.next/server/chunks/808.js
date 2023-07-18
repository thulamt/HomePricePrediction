"use strict";
exports.id = 808;
exports.ids = [808];
exports.modules = {

/***/ 6317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1198);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1978);
/* harmony import */ var _savebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3341);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);
/* __next_internal_client_entry_do_not_use__ default auto */ 






// @refresh reset
function Home(prop) {
    const { user } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__/* .useAuthContext */ .Eu)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (user == null) {
            router.push("/");
        } else {
            router.push("/admin");
        }
    }, [
        user
    ]);
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const [HomeData, setHomeData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [savebar, setSaveBar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isCollapsible, setIsCollapsible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(" overflow-hidden", {
        ["w-[480px]"]: !savebar,
        ["w-0"]: savebar
    });
    const handleOpen = (reason)=>{
        setSaveBar(!savebar);
    };
    const fetchData = async ()=>{
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
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch("/api/homeData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message
                })
            });
            const data = await response.json();
            setResponse(data);
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: " min-h-screen",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex flex-row",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col w-full",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex  bg-violet-700 p-8 shadow-md  justify-between ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-row",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    className: " flex flex-row justify-center items-center space-x-2",
                                    onClick: ()=>router.push("/"),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: 1.5,
                                            stroke: "currentColor",
                                            className: "w-8 h-8",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                className: "text-3xl font=[league spartan] font-bold",
                                                children: [
                                                    "valueX",
                                                    " "
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                class: "flex space-x-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "bg-slate-100 pr-5 pl-5   hover:scale-125 transition delay-150 duration-300 ease-in-out rounded shadow-md",
                                        onClick: signUp,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "text-black",
                                            children: "Sign Up"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: " bg-violet-600 pr-5 pl-5 rounded shadow-md hover:scale-125 transition delay-150 duration-300 ease-in-out",
                                        onClick: signIn,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "text-white   ",
                                            children: "Sign In"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex  justify-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: " rounded-3xl shadow-xl justify-self  bg-slate-100  pl-24 pr-24 py-10 mt-10",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex text-black text-[25px] font-bold justify-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: " House Price Predictor"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col items-center mt-10  space-y-20",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row    space-x-20",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-black",
                                                            children: " Year Built"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            className: "rounded-md shadow-2xl w-full py-2  sm:text-md dark:text-black px-10",
                                                            type: "date",
                                                            placeholder: "0",
                                                            onChange: (e)=>setYearBuilt(e.target.value)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-black",
                                                            children: " Year Renovated"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            className: "rounded-md  shadow-2xl w-full py-2  sm:text-md dark:text-black px-10",
                                                            type: "date",
                                                            placeholder: "0",
                                                            onChange: (e)=>setRenovated(e.target.value)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-black",
                                                            children: " Number of Bedroom"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            className: "rounded-md shadow-2xl w-full py-2 px-5  sm:text-md dark:text-black",
                                                            type: "number",
                                                            placeholder: "0",
                                                            onChange: (e)=>setBedroom(e.target.value)
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row  space space-x-20",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-black",
                                                            children: " Number of Bathroom"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            className: "rounded-md shadow-2xl   w-full py-2 px-5 sm:text-md dark:text-black",
                                                            type: "number",
                                                            placeholder: "0",
                                                            onChange: (e)=>setBath(e.target.value)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-black",
                                                            children: " Number of Floors"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            className: "rounded-md shadow-2xl w-full py-2 px-5  sm:text-md dark:text-black",
                                                            type: "number",
                                                            placeholder: "0",
                                                            onChange: (e)=>setFloor(e.target.value)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-black",
                                                            children: " Square Footage of the Lot"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            className: "rounded-md   shadow-2xl w-full py-2 px-5 sm:text-md dark:text-black",
                                                            type: "number",
                                                            placeholder: "0",
                                                            onChange: (e)=>setLot(e.target.value)
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row  space space-x-20",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-black",
                                                            children: " Square Footage of Living"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            className: "rounded-md shadow-2xl w-full py-2 px-5  sm:text-md dark:text-black",
                                                            type: "number",
                                                            placeholder: "0",
                                                            onChange: (e)=>setLiving(e.target.value)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-black",
                                                            children: " Square Footage of Roof"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            className: "rounded-md shadow-2xl w-full py-2 px-5 sm:text-md dark:text-black",
                                                            type: "number",
                                                            placeholder: "0",
                                                            onChange: (e)=>setRoof(e.target.value)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-black",
                                                            children: " Square Footage of Basement"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            className: "rounded-md shadow-2xl w-full py-2 px-5 sm:text-md dark:text-black",
                                                            type: "number",
                                                            placeholder: "0",
                                                            onChange: (e)=>setBasement(e.target.value)
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex flex-row space space-x-20",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                                onSubmit: handleSubmit,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "bg-violet-600 hover:bg-violet-400 text-[20px]  text-white-800 font-bold py-4 px-20 rounded-xl  shadow-lg shadow-[#4e26ab]  items-center",
                                                    onClick: test,
                                                    type: "submit",
                                                    children: "Predict"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    response && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "small-modal",
                        tabindex: "-1",
                        className: "fixed  z-50  w-full  overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid place-items-center w-full  h-full ",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative w-96 rounded-lg shadow-xl border-p bg-gradient-to-r from-white to-white ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex items-center justify-center   p-5  rounded-t ",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "text-xl font-medium text-gray-900 dark:text-black",
                                            children: "Home Price Prediction"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-center p-6  space-y-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-base text-lg leading-relaxed text-gray-500 dark:text-gray-400",
                                            children: response.message
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "flex  justify-center p-6 space-x-10  rounded-b dark:border-gray-600",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            "data-modal-hide": "small-modal",
                                            type: "button",
                                            className: "text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600",
                                            onClick: ()=>setResponse(false),
                                            children: "Close"
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
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
        y_renovated
    ];
    return array;
}
function hideModal() {} // import Image from "next/image";
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


/***/ }),

/***/ 3341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6317);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1978);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4003);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5087);
/* harmony import */ var _firebase_firestore_getData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5820);
/* __next_internal_client_entry_do_not_use__ default auto */ 









// @refresh reset
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__/* .getAuth */ .v0)(_firebase_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
function SideBar() {
    const router = useRouter();
    const [savebar, setSaveBar] = useState(null);
    const [count, setCount] = useState(0);
    const handleOpen = (reason)=>{
        setSaveBar(true);
    };
    const handleClose = (reason)=>{
        setSaveBar(false);
    };
    const handleForm = async ()=>{
        const { result, error } = await getData("users" + "/" + auth.currentUser.uid + "/homedata", auth.currentUser.uid, "multi");
        if (error) {
            return console.log(error);
        }
        if (result) {
            console.log("testing");
            setResult(result);
            setCount(count + 1);
        }
    };
    useEffect(()=>{
        // This effect runs after every render
        console.log("Effect ran");
        handleForm();
        // Cleanup function (optional)
        return ()=>{
            console.log("Cleanup ran");
        };
    }, []);
    const updateCount = (value)=>{
        setCount(count + 1);
    };
    const data = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "5",
        "6",
        "7",
        "8"
    ];
    return /*#__PURE__*/ _jsx("main", {
        className: "flex min-h-screen ",
        children: /*#__PURE__*/ _jsxs("div", {
            // bg-violet-600
            //from-[#ffffff] to-[#f2f2f2] bg-gradient-to-b from-[#581db5] to-[#5500b6]
            // from-[#581db5] to-[#5500b6]
            className: "relative shadow-2xl  max-h-screen shadow-innder bg-gradient-to-b from-[#581db5] to-[#5500b6] ease-in-out duration-300 left-0 w-96",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "flex   flex-row  p-9",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: " w-4/6 font-bold text-white text-2xl",
                        children: /*#__PURE__*/ _jsx("p", {
                            children: " Homes"
                        })
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "flex w-full min-h-screen max-h-screen justify-center ",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "  flex flex-col items-center   w-11/12   mb-24   overflow-auto   shadow-[#3b0696] shadow-2xl drop-shadow-lg rounded-lg ",
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                className: "hidden",
                                children: [
                                    " ",
                                    count
                                ]
                            }),
                            Object.keys(getResult()).map((key)=>/*#__PURE__*/ _jsx("div", {
                                    className: "flex flex-rown items-center ",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: " w-11/12 mt-5  shrink w-64 h-14  pt-5 pb-5 mb-5 rounded shadow-2xl bg-white  text-white",
                                        children: /*#__PURE__*/ _jsx("label", {
                                            children: "TEST"
                                        })
                                    })
                                }))
                        ]
                    })
                })
            ]
        })
    });
}
let data = {};
function setResult(p) {
    data = p;
    console.log("testing", data);
}
function getResult() {
    return data;
}


/***/ }),

/***/ 5820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getDoument)
/* harmony export */ });
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4003);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2698);



const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .getFirestore */ .ad)(_firebase_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
async function getDoument(collection_, id, type) {
    console.log("5:12", collection_, id);
    let result = {};
    let error = null;
    if (type === "single") {
        let docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .doc */ .JU)(db, collection_, id);
        try {
            result = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .getDoc */ .QT)(docRef);
        } catch (e) {
            error = e;
        }
    } else if (type === "multi") {
        const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .getDocs */ .PL)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .collection */ .hJ)(db, collection_));
        console.log("getting data", collection_);
        querySnapshot.forEach((doc)=>{
            // doc.data() is never undefined for query doc snapshots
            result[doc.id] = doc.data();
            console.log(doc.id, " => ", doc.data());
        });
    } else if (type === "del") {
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .deleteDoc */ .oe)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .doc */ .JU)(db, collection_, id));
    }
    return {
        result,
        error
    };
}


/***/ })

};
;