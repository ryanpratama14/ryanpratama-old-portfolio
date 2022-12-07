import React, { useEffect } from "react";
import "./Background.css";

// py-44

const About = () => {
  useEffect(() => {
    document.title = "FaoTech: About";
  }, []);
  return (
    <div class="font-mono">
      <section class=" text-white ceo" id="ceo">
        <div class="mx-auto max-w-screen-xl px-8 py-12 sm:px-6 sm:pb-24 lg:px-8">
          <div class="mx-auto max-w-xl text-center">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
              Meet <span class="text-blue-300">our</span>{" "}
              <span class="text-red-300">CEO</span>
            </h2>
          </div>

          <div class="flex justify-center mt-16 min-w-screen">
            <div>
              <img
                src={require("./ceo.png")}
                class="mx-auto h-48 w- rounded-full object-cover shadow-xl"
                alt="CEO"
              />

              <blockquote class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
                <p class="font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                  Fakhrul Oktavian
                  <br />
                  <span class="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-red-300 to-white">
                    Instructor
                  </span>
                </p>
                <div class="flex items-center justify-center mt-2">
                  <a
                    title="Follow me on Instagram"
                    href="https://www.instagram.com/fao30/"
                    target="_blank"
                    class="mx-1 block w-6 h-6 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
                  >
                    <img
                      class=" object-cover object-center w-full h-full rounded-full"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    />
                  </a>
                  <a
                    title="Follow me on Linkedin"
                    href="https://www.linkedin.com/in/fakhrul-arifin/"
                    target="_blank"
                    class="mx-1 block w-6 h-6 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
                  >
                    <img
                      class=" object-cover object-center w-full h-full rounded-full"
                      src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                    />
                  </a>
                  <a
                    title="Text me on Telegram"
                    href="https://t.me/faofao"
                    target="_blank"
                    class="mx-1 block w-6 h-6 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
                  >
                    <img
                      class=" object-cover object-center w-full h-full rounded-full"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
                    />
                  </a>
                </div>
                <p class="mt-4 text-l text-white-500">
                  "For me, it matters that we drive tech as an equalizing force,{" "}
                  <br />
                  as an enabler for everyone around the world. <br /> Feel free
                  to join."
                </p>

                <a
                  class="btn mt-5 border-transparent hover:border-transparent text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-violet-600 dark:bg-violet-600 hover:bg-violet-700 dark:hover:bg-violet-700"
                  href="https://www.instagram.com/fao30/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ask him anything
                </a>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
