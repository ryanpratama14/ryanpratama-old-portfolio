import React, { useEffect, useState, useRef } from "react";
import { themeChange } from "theme-change";
import { dataTheme } from "../../../store/helper/DataTheme";
import { linkSocial } from "../../../store/helper/NavbarSocial";
import { Icon } from "@iconify/react";

const SocialMedia = () => {
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
  return (
    <div ref={dropdownMenu} className="dropdown dropdown-end ml-1">
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
        className="btn btn-ghost btn-circle avatar flex items-center"
      >
        <div className="rounded-full">
          <img
            alt="ryan display profile"
            src={require("../../assets/ryanpratama.jpeg")}
          />
        </div>
      </label>
      <ul
        onBlur={(e) => {
          dropdownMenuButton.current.focus();
        }}
        onFocus={(e) => {
          setDropdownOpened(true);
        }}
        tabindex="0"
        className="mt-3 p-2 bg-base-100 shadow menu menu-compact dropdown-content rounded-box w-48 drop-2 text-base-content font-bold"
      >
        <li>
          {linkSocial?.map((e) => {
            return (
              <a
                className="justify-between items-center active:bg-primary-focus hover:bg-primary hover:text-primary-content"
                target="_blank"
                rel="noreferrer"
                href={e.linkSocial}
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
  );
};

export default SocialMedia;
