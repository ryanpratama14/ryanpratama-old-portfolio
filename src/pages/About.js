import React from "react";
import "./Background.css";

// py-44

const About = () => {
  return (
    <div class="font-mono">
      <section class=" text-white ceo" id="ceo">
        <div class="mx-auto max-w-screen-xl px-8 py-20 sm:px-6 sm:pb-24 lg:px-8">
          <div class="mx-auto max-w-xl text-center">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
              Meet <span class="text-blue-300">our</span>{" "}
              <span class="text-red-300">CEO</span>
            </h2>
          </div>

          <div class="flex justify-center mt-8 min-w-screen">
            <div>
              <img
                src={require("./ceo.png")}
                class="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
                alt="CEO"
              />

              <blockquote class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
                <p class="text-xl font-bold text-white-700">
                  Fakhrul Oktavian <br />
                  aka Fao
                </p>

                <p class="mt-4 text-l text-white-500">
                  "For me, it matters that we drive tech as an equalizing force,{" "}
                  <br />
                  as an enabler for everyone around the world. <br /> Feel free
                  to join."
                </p>

                <a
                  class="btn mt-5 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-violet-600 dark:bg-violet-600 hover:bg-violet-500 dark:hover:bg-violet-500"
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
