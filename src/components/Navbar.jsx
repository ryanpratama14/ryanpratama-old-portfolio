import React from "react";
import ThemeChanger from "./ThemeChanger";
// import useReadingProgress from "./UseReadingProgress";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // const completion = useReadingProgress();
  let activeClassName = "bg-primary my-0.5";
  return (
    <div
      class="
    sticky top-0 z-30  h-16 bg-opacity-90 backdrop-blur duration-100 
    text-base-content shadow font-mono 
    "
    >
      <div class="navbar flex justify-center">
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
              class="font-bold menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 drop-1 bg-base-200 text-base-content"
            >
              <li>
                <NavLink
                  to="/cards"
                  className={({ isActive }) =>
                    isActive ? activeClassName : "my-0.5"
                  }
                >
                  #1: Member Card
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/appform"
                  className={({ isActive }) =>
                    isActive ? activeClassName : "my-0.5"
                  }
                >
                  #2: Form App
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/zikirapp"
                  className={({ isActive }) =>
                    isActive ? activeClassName : "my-0.5"
                  }
                >
                  #3: Zikr App
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/todoapp"
                  className={({ isActive }) =>
                    isActive ? activeClassName : "my-0.5"
                  }
                >
                  #4: To Do List App
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/financial-tracker"
                  className={({ isActive }) =>
                    isActive ? activeClassName : "my-0.5"
                  }
                >
                  #5: Financial Tracker App
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/reviews"
                  className={({ isActive }) =>
                    isActive ? activeClassName : "my-0.5"
                  }
                >
                  Reviews
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? activeClassName : "my-0.5"
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost normal-case text-2xl"
                : "btn btn-ghost normal-case text-2xl"
            }
          >
            Homepage
          </NavLink>
        </div>
        <div class="navbar-end ">
          <ThemeChanger />
          <div class="dropdown dropdown-end ml-0.5">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="ryan display profile"
                  src="https://sun9-61.userapi.com/impg/WRTTQu00rB8FiNpm2WpRZLzu0U0zzWlvjaDDqg/HtZweihYsKo.jpg?size=2160x2160&quality=96&sign=88c8dc5b5f04b0ff17f0a1ca5d7e0a54&type=album"
                />
              </div>
            </label>
            <ul
              tabindex="0"
              class="mt-3 p-2 bg-base-200 shadow menu menu-compact dropdown-content rounded-box w-52 drop-2 text-base-content font-bold"
            >
              <li>
                <a
                  class="justify-between"
                  href="mailto:ru.ryanpratama@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Email <span class="badge">@</span>
                </a>
              </li>
              <li>
                <a
                  class="justify-between"
                  href="https://www.linkedin.com/in/ryanpratama14"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <span class="badge">in</span>
                </a>
              </li>
              <li>
                <a
                  class="justify-between"
                  href="https://www.instagram.com/ryanpratama14"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram<span class="badge">ig</span>
                </a>
              </li>
              <li>
                <a
                  class="justify-between"
                  href="https://t.me/ryanpratama14"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram<span class="badge">tg</span>
                </a>
              </li>
              <li>
                <a
                  class="justify-between"
                  href="https://wa.me/+79961005202"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp<span class="badge">wa</span>
                </a>
              </li>
              <li>
                <a
                  class="justify-between"
                  href="https://vk.com/ryanpratama"
                  target="_blank"
                  rel="noreferrer"
                >
                  ВКонтакте<span class="badge">vk</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <span
          style={{ transform: `translateX(${completion - 100}%)` }}
          class="absolute bg-base-content h-1 w-full bottom-0"
        /> */}
      </div>
    </div>
  );
};

export default Navbar;
