import React from "react";
import { useNavigate } from "react-router-dom";
import "./Background.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div class="navbar font-mono text-white dark:text-white">
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
            class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 drop-1"
          >
            <li>
              <a
                onClick={() => {
                  navigate("/cards");
                }}
              >
                #1: Member Card
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/appform");
                }}
              >
                #2: Form App
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/zikrapp");
                }}
              >
                #3: Zikr App
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/todoapp");
                }}
              >
                #4: To Do List App
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/financial-tracker");
                }}
              >
                #5: Financial Tracker App
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/currency-converter");
                }}
              >
                #6: Currency Converter
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/reviews");
                }}
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/about");
                }}
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <a
          onClick={() => {
            navigate("/");
          }}
          class="btn btn-ghost normal-case text-2xl "
        >
          Homepage
        </a>
      </div>
      <div class="navbar-end">
        <div class="dropdown dropdown-end ml-4">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://sun9-61.userapi.com/impg/WRTTQu00rB8FiNpm2WpRZLzu0U0zzWlvjaDDqg/HtZweihYsKo.jpg?size=2160x2160&quality=96&sign=88c8dc5b5f04b0ff17f0a1ca5d7e0a54&type=album" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="mt-3 p-2 shadow menu menu-compact dropdown-content  rounded-box w-52 drop-2"
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
                Linkedin <span class="badge">in</span>
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
    </div>
  );
};

export default Navbar;
