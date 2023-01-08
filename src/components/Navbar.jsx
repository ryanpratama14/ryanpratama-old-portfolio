import React from "react";
import ThemeChanger from "./ThemeChanger";
import useReadingProgress from "./UseReadingProgress";
import { NavLink } from "react-router-dom";
import { linkSocial } from "../store/helper/NavbarSocial";
import { routeNavbarOptions } from "../store/helper/Routes";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const completion = useReadingProgress();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  let activeClassName = "bg-primary  text-primary-content my-0.5";
  return (
    <div
      class="
    sticky top-0 z-30  bg-opacity-90 backdrop-blur duration-100 
    text-primary-content shadow
    "
    >
      <div class="navbar flex justify-center items-center">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
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
              tabindex="0"
              class="font-bold menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 drop-1 bg-base-100 text-base-content"
            >
              <li>
                {routeNavbarOptions.map((e) => {
                  return (
                    <NavLink
                      to={e.path}
                      className={({ isActive }) =>
                        isActive ? activeClassName : "my-0.5"
                      }
                      onClick={() => {
                        scrollToTop();
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
        <div class="navbar-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost normal-case font-bold text-2xl"
                : "btn btn-ghost normal-case font-bold text-2xl"
            }
            onClick={() => {
              scrollToTop();
            }}
          >
            Homepage
          </NavLink>
        </div>
        <div class="navbar-end">
          <ThemeChanger />
          <div class="dropdown dropdown-end ml-1">
            <label
              tabindex="0"
              class="btn btn-ghost btn-circle avatar flex items-center"
            >
              <div class="w-16 rounded-full">
                <img
                  alt="ryan display profile"
                  src={require("./components/ryanpratama.jpeg")}
                />
              </div>
            </label>
            <ul
              tabindex="0"
              class="mt-3 p-2 bg-base-100 shadow menu menu-compact dropdown-content rounded-box w-48 drop-2 text-base-content font-bold"
            >
              <li>
                {linkSocial.map((e) => {
                  return (
                    <a
                      class="justify-between items-center active:bg-primary-focus hover:bg-primary"
                      target="_blank"
                      rel="noreferrer"
                      href={e.linkSocial}
                    >
                      {e.socialMedia}{" "}
                      <span>
                        <Icon icon={e.label} width="25" height="25" />
                      </span>
                    </a>
                  );
                })}
              </li>
            </ul>
          </div>
        </div>
        <span
          style={{ transform: `translateX(${completion - 100}%)` }}
          class="absolute bg-primary-content h-1 w-full bottom-0"
        />
      </div>
    </div>
  );
};

export default Navbar;
