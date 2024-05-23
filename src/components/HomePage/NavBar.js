import React, { useState, useEffect } from "react";
import KonnectUslogo from "./Konnect1.png";
import Search from "../Search and Filtering/Search";
import { NavLink, useLocation } from "react-router-dom";
import DropDown from "./DropDown";

export default function NavBar({
  isSignedIn,
  setSignedIn,
  searchTerm,
  setSearchTerm,
}) {
  const [showDropDown, setShowDropDown] = useState(false);
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);


  const toggleMenu = () => {
    setShowMenu(!showMenu); 
  };

  const closeMenu = () => {
    setShowMenu(false); 
  };
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const buttons = [
    {
      name: "Home",
      link: "/HomePage",
    },
    {
      name: "About Us",
      link: "/AboutUs/AboutUs",
    },
    {
      name: "Products",
      link: "/product listing/ProductsPage"
    },
    {
      name: "Team",
      link: "/Team",
    },
   
    {
      name: "Reviews",
      link: "/RatingAndReviews/ReviewsPage",
    },
    {
      name: "Contact Us",
      link: "/ContactUs",
    },
  ];

  const mapButtons = (button) => (
    <li
      key={button.name}
      className="font-bold mx-6 text-lg hover:text-green-500 py-1 cursor-pointer"
    >
      <NavLink to={button.link}>{button.name}</NavLink>
    </li>
  );

  return (
    <div className="grid grid-cols-[1fr_3fr] p-3 m-0 h-[80px]">
      <img
        src={KonnectUslogo}
        alt="KonnectUs Logo"
        className="mb-4 h-14 w-[50]"
      />

<div className="flex justify-end items-center">
        
        {isSmallScreen ? (
          <div
            className="block lg:hidden top-6 right-3 absolute cursor-pointer"
            onClick={toggleMenu} 
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
        ) : null}
       


      <ul className={`${
            isSmallScreen ? (showMenu ? "block" : "hidden") : "flex"
          } lg:flex lg:justify-end lg:items-center`}>
        {buttons.map(mapButtons)}
        {isSignedIn ? (
          <li
            onClick={(e) => {
              e.preventDefault();
              setShowDropDown(!showDropDown);
            }}
            className="font-bold mx-6 text-lg hover:text-green-500 py-1 cursor-pointer"
          >
            <DropDown isOpen={showDropDown} />
          </li>
        ) : (
          <NavLink to="/Login">
            <li className="font-bold mx-6 text-lg hover:text-green-500 py-1 cursor-pointer">
              Login
            </li>
          </NavLink>
        )}

{!isSmallScreen && location.pathname === "/Alt/ProductsPage" && (
            <li className="ml-6">
              <Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            </li>
          )}
      </ul>
    </div>
    </div>
  );
}
