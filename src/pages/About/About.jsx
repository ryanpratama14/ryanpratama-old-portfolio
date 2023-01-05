import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "FaoTech: About";
  }, []);
  return (
    <div className="-mt-[5rem] pt-32 from-primary to-secondary text-primary-content bg-gradient-to-b">
      <section>
        <div class="mx-auto max-w-screen-xl px-8 py-12 sm:px-6 sm:pb-36 lg:px-8">
          <div class="mx-auto max-w-xl text-center">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl text-primary-content">
              Meet <span class="text-primary-content">our</span>{" "}
              <span class="">CEO</span>
            </h2>
          </div>

          <div class="flex justify-center mt-16 min-w-screen">
            <div>
              <img
                src={require("./photos/ceo.png")}
                class="mx-auto h-48 w- rounded-full object-cover shadow-xl"
                alt="CEO"
              />

              <blockquote class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
                <p class="font-bold  text-2xl ">
                  Fakhrul Oktavian
                  <br />
                  <span class="font-bold  text-xl ">Instructor</span>
                </p>
                <div class="flex items-center justify-center mt-2">
                  <a
                    title="Follow me on Instagram"
                    href="https://www.instagram.com/fao30/"
                    target="_blank"
                    rel="noreferrer"
                    class="mx-1 block w-6 h-6 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
                  >
                    <img
                      alt="instagram"
                      class=" object-cover object-center w-full h-full rounded-full"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    />
                  </a>
                  <a
                    title="Follow me on LinkedIn"
                    href="https://www.linkedin.com/in/fakhrul-arifin/"
                    target="_blank"
                    rel="noreferrer"
                    class="mx-1 block w-6 h-6 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
                  >
                    <img
                      alt="linkedin"
                      class=" object-cover object-center w-full h-full rounded-full"
                      src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                    />
                  </a>
                  <a
                    title="Text me on Telegram"
                    href="https://t.me/faofao"
                    target="_blank"
                    rel="noreferrer"
                    class="mx-1 block w-6 h-6 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
                  >
                    <img
                      alt="telegram"
                      class=" object-cover object-center w-full h-full rounded-full"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
                    />
                  </a>
                </div>
                <p class="mt-4 text-lg  lg:w-96 md:w-96 sm:w-96  font-semibold">
                  "For me, it matters that we drive tech as an equalizing force,
                  as an enabler for everyone around the world. Feel free to
                  join."
                </p>

                <a
                  class="btn mt-5 btn-secondary-focus"
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
