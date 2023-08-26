import React, { createContext, useContext, useState } from "react";

const NetflixContext = createContext(null);

const NetflixContextProvider = ({ children }) => {
  const [fav, setFav] = useState([]);
  return (
    <NetflixContext.Provider value={{ fav, setFav }}>
      {children}
    </NetflixContext.Provider>
  );
};
export default NetflixContextProvider;

export const useNetflixContext = () => useContext(NetflixContext);
