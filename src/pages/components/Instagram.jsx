import React from "react";

const Instagram = () => {
  return (
    <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
      <div>
        <a
          title="Follow me on Instagram"
          href="https://www.instagram.com/ryanpratama14"
          target="_blank"
          class="block w-12 h-12 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
        >
          <img
            class="object-cover object-center w-full h-full rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
          />
        </a>
      </div>
    </div>
  );
};

export default Instagram;
