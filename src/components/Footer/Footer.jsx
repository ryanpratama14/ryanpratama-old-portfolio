import React from "react";
import { linkSocial } from "../../store/helper/NavbarSocial";
import BackgroundDaisy from "./components/BackgroundDaisy";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="from-secondary to-secondary-focus bg-gradient-to-b text-secondary-content">
      <footer className="footer footer-center p-4">
        <div>
          <p>
            © 2023{" "}
            <a
              href="https://faotech.dev/"
              rel="noreferrer"
              target="_blank"
              className="font-[600]"
            >
              faoTech.
            </a>{" "}
            All rights reserved.
            <div className="flex justify-center text-secondary-content gap-1 my-1">
              {linkSocial.map((e) => (
                <a
                  href={e.linkSocial}
                  target="_blank"
                  rel="noreferrer"
                  className=" transition-all transform hover:scale-125 duration-400 "
                >
                  <Icon icon={e.label} width="25" height="25" />
                </a>
              ))}
            </div>
            Special thanks to{" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="font-extrabold"
              href="https://tailwindcss.com/ "
            >
              tailwindcss
            </a>{" "}
            &
            <a
              target="_blank"
              rel="noreferrer"
              className="font-extrabold"
              href="https://www.daisyui.com "
            >
              {" "}
              daisyUI
            </a>
          </p>
        </div>
      </footer>
      <BackgroundDaisy />
    </div>
  );
};

export default Footer;
