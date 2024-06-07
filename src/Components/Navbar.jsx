import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home", path: "/" },
    { id: 2, link: "about", path: "/about" },
    { id: 3, link: "project", path: "/Services" },
    { id: 4, link: "experience", path: "/experience" },
    { id: 5, link: "contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-between items-center w-full bg-gradient-to-r from-pink-700 to-blue-600 z-50   h-20 px-4 top-0 sticky">
      <div>
        <NavLink to="/">
          <h1 className="text-4xl font-bold ml-2">
            DP<span className="text-blue-400 text-5xl">.</span>
          </h1>
        </NavLink>
      </div>
      <ul className="hidden lg:flex mr-6 md:text-lg lg:text-2xl lg:gap-4 justify-center items-center">
        {links.map(({ id, link, path }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 relative"
          >
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "text-pink-700 border-b-2 border-pink-700" : ""
              }
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 lg:hidden z-10"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 right-0 w-3/4 h-screen rounded-bl-lg bg-gradient-to-br from-pink-700 to-yellow-600">
          {links.map(({ id, link, path }) => (
            <li
              key={id}
              className="w-full text-center px-4 cursor-pointer capitalize py-6 text-2xl"
            >
              <NavLink
                to={path}
                onClick={() => setNav(false)}
                className={({ isActive }) =>
                  isActive ? " border-b-2 border-blue-700" : ""
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
