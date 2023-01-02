import { React, useState } from "react";
import { Icon } from "@iconify/react";

const LoadToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      class={
        visible
          ? "flex items-end justify-end fixed bottom-0 right-0 mb-16 mr-4 z-10"
          : "hidden"
      }
    >
      <div>
        <a
          href
          onClick={scrollToTop}
          class="block transition-all transform hover:scale-110 hover:-translate-y-2 duration-400 cursor-pointer "
        >
          <Icon
            icon="uil:top-arrow-to-top"
            width="40"
            class="text-primary"
            height="40"
          />
        </a>
      </div>
    </div>
  );
};

export default LoadToTop;
