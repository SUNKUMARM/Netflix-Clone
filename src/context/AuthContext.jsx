import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  //   const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [user, setUser] = useState({});

  const signUp = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
    // setDoc(doc(dataBase, "users", email), { favMovies: [] });
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      //   localStorage.setItem("user", JSON.stringify(currentUser));
      //   setUser(JSON.parse(localStorage.getItem("user")));
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
