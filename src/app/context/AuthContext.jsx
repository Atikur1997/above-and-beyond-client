"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

// Create the Auth Context
export const AuthContext = createContext(null);

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const LogInUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    setUser,
    LogInUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

// Custom hook to use Auth Context
export const useAuthContext = () => {
  return useContext(AuthContext);
};
