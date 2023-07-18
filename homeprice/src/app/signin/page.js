"use client";
import React from "react";
import signIn from "@/firebase/auth/signIn";
import { useRouter } from "next/navigation";
import { Input } from "postcss";

export default function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const router = useRouter();
  function gotoSignUP() {
    console.log("test");
    router.push("/signup");
  }
  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      {
        setError("Invalid email or password. Please try again.");

        return console.log(error.code);
      }
    }

    // else successful
    console.log(result);
    return router.push("/admin");
  };
  return (
    <main className="flex min-h-screen  overflow-hidden">
      <div className="fixed w-full">
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
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center min-h-screen items-center w-full">
        <div className="flex flex-row h-1/2 justify-center items-center">
          <div className="flex flex-col bg-slate-100 shadow-md rounded-xl  p-10  ">
            <h1 className=" flex justify-center pb-10  text-xl  text-black">
              Sign In
            </h1>
            {error && <p className="text-red-500 mb-5">{error}</p>}
            <form
              onSubmit={handleForm}
              className="flex flex-col space-y-[80px]"
            >
              <label htmlFor="email">
                <p className="text-black">Email</p>
                <input
                  className="rounded-md shadow-2xl w-full py-2  sm:text-md dark:text-black px-10"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@mail.com"
                />
              </label>
              <label htmlFor="password">
                <p className="text-black">Password</p>
                <input
                  className="rounded-md shadow-2xl w-full py-2  sm:text-md dark:text-black px-10"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                />
              </label>
              <div className="flex flex-row space-x-10">
                <input
                  className="bg-gray-600 hover:bg-gray-400 text-[20px]  text-white-800 font-bold  py-2 px-10 rounded-xl  shadow-lg shadow-[#4f4f4f]  items-center"
                  onClick={gotoSignUP}
                  type="button"
                  value={"Sign Up"}
                />
                <button
                  className="bg-violet-600 hover:bg-violet-400 text-[20px]  text-white-800 font-bold  py-2 px-10 rounded-xl  shadow-lg shadow-[#4e26ab]  items-center"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
