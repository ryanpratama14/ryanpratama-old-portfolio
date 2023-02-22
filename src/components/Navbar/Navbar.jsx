import React, { useEffect, useRef, useState } from "react";
import ThemeChanger from "./components/ThemeChanger";
import { NavLink } from "react-router-dom";
import { routeNavbarOptions } from "../../store/helper/Routes";
import SocialMedia from "./components/SocialMedia";
import useReadingProgress from "./components/UseReadingProgress";

const Navbar = () => {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const dropdownMenu = useRef(null);
  const dropdownMenuButton = useRef(null);
  useEffect(() => {
    if (!dropdownOpened) {
      document.activeElement.blur();
    } else if (
      dropdownOpened &&
      !dropdownMenu.current.contains(document.activeElement)
    ) {
      setDropdownOpened(false);
    }
  }, [dropdownOpened]);
  const completion = useReadingProgress();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="
    sticky top-0 z-30  bg-opacity-90 backdrop-blur duration-100 
    text-primary-content shadow
    "
    >
      <div className="navbar flex justify-center items-center">
        <div className="navbar-start">
          <div ref={dropdownMenu} className="dropdown">
            <label
              ref={dropdownMenuButton}
              onBlur={(e) => {
                setDropdownOpened(false);
              }}
              onClick={(e) => {
                if (dropdownOpened) {
                  setDropdownOpened(false);
                } else {
                  setDropdownOpened(true);
                }
              }}
              tabindex="0"
              className="btn btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              onBlur={(e) => {
                dropdownMenuButton.current.focus();
              }}
              onFocus={(e) => {
                setDropdownOpened(true);
              }}
              tabindex="0"
              className="font-bold menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 drop-1 bg-base-100 text-base-content"
            >
              <li>
                {routeNavbarOptions?.map((e) => {
                  return (
                    <NavLink
                      to={e.path}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-primary text-primary-content my-0.5 pSmaller "
                          : "my-0.5 pSmaller"
                      }
                      ref={dropdownMenuButton}
                      onBlur={(e) => {
                        setDropdownOpened(false);
                      }}
                      onClick={(e) => {
                        scrollToTop();
                        if (dropdownOpened) {
                          setDropdownOpened(false);
                        } else {
                          setDropdownOpened(true);
                        }
                      }}
                    >
                      {e.label}
                    </NavLink>
                  );
                })}
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost normal-case font-bold h2"
                : "btn btn-ghost normal-case font-bold h2"
            }
            onClick={() => {
              scrollToTop();
            }}
          >
            Homepage
          </NavLink>
        </div>
        <div className="navbar-end">
          <ThemeChanger />
          <SocialMedia />
        </div>
        <span
          style={{ transform: `translateX(${completion - 100}%)` }}
          className="absolute bg-primary-content h-1 w-full bottom-0"
        />
      </div>
    </div>
  );
};

export default Navbar;
