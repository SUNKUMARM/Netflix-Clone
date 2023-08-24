import React, { createContext, useContext, useState } from "react";

const NetflixContext = createContext(null);

const NetflixContextProvider = ({ children }) => {
  const [fav, setFav] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <NetflixContext.Provider
      value={{ fav, setFav, email, setEmail, password, setPassword }}
    >
      {children}
    </NetflixContext.Provider>
  );
};

export default NetflixContextProvider;

export const useNetflixContext = () => useContext(NetflixContext);
