import React, { createContext, useContext } from "react";

const NetflixContext = createContext(null);

const NetflixContextProvider = ({ children }) => {
  const navLists = [
    { id: 1, title: "Home", link: "/home" },
    { id: 2, title: "My List", link: "/my_list" },
    { id: 3, title: "Search", link: "/search" },
  ];
  return (
    <NetflixContext.Provider value={{ navLists }}>
      {children}
    </NetflixContext.Provider>
  );
};

export default NetflixContextProvider;

export const useNetflixContext = () => useContext(NetflixContext);
