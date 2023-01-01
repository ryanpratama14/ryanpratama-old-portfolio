import React from "react";

const Footer = () => {
  return (
    <div class="bg-base-200 text-base-content">
      <footer class="footer footer-center p-4 font-mono">
        <div>
          <p class="text-base-content">
            © 2023 FaoTech. All Rights Reserved. <br />
            Made by Ryan <br />
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
    </div>
  );
};

export default Footer;
