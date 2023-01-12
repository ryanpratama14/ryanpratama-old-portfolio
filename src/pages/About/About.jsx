import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "faoTech: About";
  }, []);
  return (
    <section
      id="about"
      className="-mt-[4rem] px-[8vw] md:px-[4vw] w-full pt-[4rem] pb-[20rem] from-primary via-secondary to-accent text-primary-content bg-gradient-to-b"
    >
      {/* TITLE */}
      <div className="font-bold sm:text-5xl text-4xl  my-20 text-center">
        <h1>Meet our CEO</h1>
      </div>
      <div className="flex justify-center items-center">
        <div>
          <img
            src={require("./photos/ceo.png")}
            className="mx-auto h-36 w-36 rounded-full object-cover shadow-xl"
            alt="profile"
          />
          <div className="-mt-6 flex flex-col justify-between rounded-lg px-10 py-12 text-center shadow-xl w-full sm:w-[30rem] mx-auto">
            <p className="font-bold text-2xl md:text-3xl ">Fakhrul Oktavian</p>
            <p className="mt-0.5 md:text-lg text-primary-content font-bold ">
              Instructor
            </p>
            {/* Social Media */}
            <div className="flex items-center justify-center mt-2">
              <a
                title="Follow me on Instagram"
                href="https://www.instagram.com/fao30/"
                target="_blank"
                rel="noreferrer"
                className="mx-1 block w-6 h-6 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
              >
                <img
                  alt="instagram"
                  className=" object-cover object-center w-full h-full rounded-full"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                />
              </a>
              <a
                title="Follow me on LinkedIn"
                href="https://www.linkedin.com/in/fakhrul-arifin/"
                target="_blank"
                rel="noreferrer"
                className="mx-1 block w-6 h-6 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
              >
                <img
                  alt="linkedin"
                  className=" object-cover object-center w-full h-full rounded-full"
                  src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                />
              </a>
              <a
                title="Text me on Telegram"
                href="https://t.me/faofao"
                target="_blank"
                rel="noreferrer"
                className="mx-1 block w-6 h-6 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
              >
                <img
                  alt="telegram"
                  className=" object-cover object-center w-full h-full rounded-full"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
                />
              </a>
            </div>
            {/* End of social media */}
            <p className="mt-4 text-lg md:text-xl text-primary-content font-semibold">
              "For me, it matters that we drive tech as an equalizing force, as
              an enabler for everyone around the world. Feel free to join."
            </p>
            <a
              className="btn mt-5 btn-secondary-focus"
              href="https://www.instagram.com/fao30/"
              target="_blank"
              rel="noreferrer"
            >
              Ask him anything
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
