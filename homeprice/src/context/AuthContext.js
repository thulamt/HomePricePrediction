import React from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "@/firebase/config";

const auth = getAuth(firebase_app);

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
        console.log("user found");
      } else {
        setUser(null);
        console.log("user NOT found");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="min-h-screen">
      <AuthContext.Provider value={{ user }}>
        {loading ? <div>Loading...</div> : children}
      </AuthContext.Provider>
    </main>
  );
};
