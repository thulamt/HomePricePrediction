"use client";
import React from "react";
import signIn from "@/firebase/auth/signIn";
import { useRouter } from "next/navigation";
import { Input } from "postcss";

export default function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  function gotoSignUP() {
    console.log("test");
    router.push("/signup");
  }
  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/admin");
  };
  return (
    <main className="flex min-h-screen  overflow-hidden">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-row h-1/2 justify-center items-center">
          <div className="flex flex-col bg-slate-100 shadow-md rounded-xl h-full p-10  ">
            <h1 className=" flex justify-center pb-10  text-xl  text-black">
              Sign In
            </h1>
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
