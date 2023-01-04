import React from "react";
import { linkSocial } from "../store/helper/NavbarSocial";
import BackgroundDaisy from "./BackgroundDaisy";

const Footer = () => {
  return (
    <div class="from-secondary to-secondary-focus bg-gradient-to-b text-secondary-content">
      <footer class="footer footer-center p-4 sm:md:lg:text-base">
        <div>
          <p>
            © 2023 FaoTech. All rights reserved.
            <div className="flex justify-center text-secondary-content gap-2 my-1">
              {linkSocial.map((e) => (
                <a href={e.linkSocial} target="_blank" rel="noreferrer">
                  {e.label}
                </a>
              ))}
            </div>
            Special thanks to{" "}
            <a
              target="_blank"
              rel="noreferrer"
              class="font-extrabold"
              href="https://tailwindcss.com/ "
            >
              tailwindcss
            </a>{" "}
            &
            <a
              target="_blank"
              rel="noreferrer"
              class="font-extrabold"
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
