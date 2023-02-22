import React, { useEffect, useRef, useState } from "react";
import { themeChange } from "theme-change";
import { dataTheme } from "../../../store/helper/DataTheme";

const ThemeChanger = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div title="Change Theme" class="dropdown dropdown-end">
      <div tabIndex="0" class="btn gap-1 btn-ghost" data-choose-theme>
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          ></path>
        </svg>
        <span class="hidden md:inline normal-case p font-bold">Theme</span>
        <svg
          width="12px"
          height="12px"
          class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <div class="w-48 sm:w-52 dropdown-content bg-base-100 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] overflow-y-auto shadow-2xl mt-16">
        <div class="grid grid-cols-1 gap-3 p-3" tabindex="0">
          {dataTheme.map((e) => {
            return (
              <div
                class="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2 outline"
                data-set-theme={e.theme}
                data-act-class="outline"
              >
                <div
                  data-theme={e.theme}
                  class="bg-base-100 text-base-content w-full cursor-pointer"
                >
                  <div class="flex flex-row justify-between px-4 py-3">
                    <p class="pSmaller font-bold">{e.theme}</p>
                    <div class="flex gap-1">
                      <div class="bg-primary w-[0.4rem] rounded"></div>
                      <div class="bg-secondary w-[0.4rem] rounded"></div>
                      <div class="bg-accent w-[0.4rem] rounded"></div>
                      <div class="bg-neutral w-[0.4rem] rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThemeChanger;
