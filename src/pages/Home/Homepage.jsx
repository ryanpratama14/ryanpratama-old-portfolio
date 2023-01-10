import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React from "react";
import Marquee from "react-fast-marquee";
import Skills from "../../store/helper/Skills";
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

      <div class="w-full flex justify-between items-center flex-wrap md:px-[5vw]">
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
            <h1 class="background-animation text-5xl sm:text-6xl font-bold text-left text-transparent bg-clip-text bg-gradient-to-br from-primary-content to-secondary-focus drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
              Front-end
              <br />
              developer<span class="text-primary-content">.</span>
            </h1>
          </motion.div>
          {/* i have a passion.. */}
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
            <h2 class="text-xl sm:text-2xl mt-6 text-primary-content w-full sm:w-[70%]">
              I have a passion for creating visually appealing and user-friendly
              websites and web applications.
            </h2>
          </motion.div>
          {/* DETAILS */}
          <div class="w-full flex justify-between mt-12 text-primary-content">
            <div class="w-[45%]">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h3 class="sm:text-lg">
                  I have had the opportunity to work on a variety of projects
                  and have gained valuable experience collaborating with
                  designers and back end developers.
                </h3>
              </motion.div>
            </div>
            <div class="w-[45%]">
              <motion.div
                class="flex h-full w-full items-end justify-between flex-col flex-wrap"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 1 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h3 class="sm:text-lg">
                  I am excited to continue growing and learning in my career as
                  a front-end developer.
                </h3>
                <a
                  href="https://t.me/ryanpratama14"
                  target="_blank"
                  rel="noreferrer"
                  class="shadow-xl btn btn-primary w-full sm:w-[70%] lg:w-[65%] mt-6 sm:mt-6 md:mt-0 relative group overflow-hidden"
                  //                   class="hidden md:flex lg:mt-0 btn text-[1rem] lg:text-[1.3rem]  hover:bg-white normal-case font-semibold rounded-lg border-none bg-white text-[#4C6BDC] w-40 group
                  // relative items-center overflow-hidden"
                >
                  Contact Me
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        <Marquee speed={150} gradient={false}>
          <Skills />
        </Marquee>
        {/* CAROUSEL */}
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
