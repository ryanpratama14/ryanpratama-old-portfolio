import { motion } from "framer-motion";
import React from "react";
import CarouselItem from "./components/CarouselItem";

const Homepage = () => {
  return (
    <section
      id="homepage"
      class="w-full  items-center px-[8vw] md:px-[4vw] -mt-[4rem] pt-[4rem] pb-[20rem] from-primary via-secondary to-accent bg-gradient-to-b"
    >
      <h1 class=" sm:text-5xl text-4xl   font-bold text-center py-20 text-primary-content">
        Hi! 👋
        <br />
        I'm Ryan
      </h1>

      <div class="w-full flex justify-between flex-wrap px-[4vw] lg:px-[5vw]">
        <div class="w-full lg:w-[55%]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h1 class="background-animation text-5xl md:text-6xl font-bold text-left text-transparent bg-clip-text bg-gradient-to-br from-primary-content to-secondary-focus">
              Front-end
              <br /> developer<span class="text-primary-content">.</span>
            </h1>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h2 class="text-xl md:text-2xl mt-6 text-primary-content w-full md:w-[70%]">
              I have a passion for creating visually appealing and user-friendly
              websites and web applications.
            </h2>
          </motion.div>
          <div class="w-full flex justify-between mt-12 md:mt-20">
            <div class="w-[45%]">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 1 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h3 class="md:text-lg">
                  I have had the opportunity to work on a variety of projects
                  and have gained valuable experience collaborating with
                  designers and back end developers.
                </h3>
              </motion.div>
            </div>
            <div class="w-[45%]">
              <motion.div
                class="flex h-full items-end justify-between flex-col flex-wrap"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 1 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h3 class="md:text-lg">
                  I am excited to continue growing and learning in my career as
                  a front-end developer.
                </h3>
                <a
                  href="https://t.me/ryanpratama14"
                  target="_blank"
                  rel="noreferrer"
                  class="btn btn-primary w-36"
                >
                  Contact Me
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        {/* <div class="w-full lg:w-[45%] transition-all transform hover:scale-110 hover:cursor-ew-resize">
          <div class="carousel carousel-center rounded-box space-x-4">
          
            <CarouselItem
              carouselPictureProps={require("./components/screenHeader.jpeg")}
            />
            <CarouselItem
              carouselPictureProps={require("./components/screenHeader.jpeg")}
            />
            <CarouselItem
              carouselPictureProps={require("./components/screenHeader.jpeg")}
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Homepage;
