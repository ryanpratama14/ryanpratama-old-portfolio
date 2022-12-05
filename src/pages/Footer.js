import React from "react";
import "./Background.css";

const Footer = () => {
  return (
    <footer class="footer footer-center p-4 font-mono">
      <div>
        <a>
          © 2022 FaoTech™. All Rights Reserved. <br />
          Made by Ryan <br />
          Special thanks to{" "}
          <a
            target="_blank"
            rel="noreferrer"
            class="font-extrabold"
            href="https://www.daisyui.com "
          >
            daisy
          </a>
          UI
        </a>
      </div>
    </footer>
  );
};

export default Footer;
