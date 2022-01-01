import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Profile from "./Pages/Profile";
import { Routes, Route } from "react-router-dom";

export const AppContext = React.createContext();

export const Pages = {
  Profile: 0,
  Skills: 1,
  Experience: 2,
  Education: 3,
};

export default function Main() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [currentPage, setCurrentPage] = useState(Pages.Profile);

  const myContext = {
    appUI: {
      isDesktop: isDesktop,
      isMobile: isMobile,
    },
    showNav: showNav,
    setShowNav: setShowNav,
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
  };

  useEffect(() => {
    function handleresize() {
      if (window.innerWidth < 720) {
        setIsMobile(true);
        setIsDesktop(false);
      } else {
        setIsDesktop(true);
        setIsMobile(false);
      }
    }
    window.addEventListener("resize", handleresize);
    handleresize();
  }, []);
  return (
    <>
      <div className={isDesktop ? `flex flex-row` : ``}>
        <AppContext.Provider value={myContext}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Profile />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/education" element={<h1>Hello World</h1>} />
          </Routes>
        </AppContext.Provider>
      </div>
    </>
  );
}
