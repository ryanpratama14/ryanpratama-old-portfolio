import React from "react";

const Instagram = () => {
  return (
    <div class="flex items-end justify-end fixed top-0 right-0 mt-[4.2rem] mr-1 z-10">
      <div>
        <a
          title="email: hire me"
          href="mailto:ru.ryanpratama@gmail.com"
          rel="noreferrer"
          target="_blank"
          class="text-primary-content block transition-all transform hover:scale-110  duration-400 "
        >
          <img
            alt="hire me"
            src={require("./components/hireme.png")}
            class="w-[60px] text-primary"
          />
        </a>
      </div>
    </div>
  );
};

export default Instagram;
