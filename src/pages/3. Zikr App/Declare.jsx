import React, { useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Declare = ({ title }) => {
  const [word, setWord] = useState("أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰ");
  const [button, setButton] = useState("Next");
  const navigate = useNavigate();
  const notifySuccess2 = () =>
    toast("Welcome, brother!", {
      icon: "😇",
    });

  return (
    <section id="zikr-app/declare" className="styleIt">
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <div className="titleIt">
        <h1>
          Declare your <span>Shahada</span>
        </h1>
      </div>

      <div>
        <div className="text-center mt-32">
          <p className="text-2xl mb-6 text-primary-content">repeat:</p>
          <p className="text-5xl text-primary-content">{word}</p>
        </div>
        <div className="flex flex-col flex-wrap justify-center items-center text-center">
          <button
            onClick={() => {
              if (word === "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰ") {
                setWord("وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ ٱللَّٰ");
                setButton("Finish");
              } else {
                notifySuccess2();
              }
            }}
            className="btn mt-10 btn-success w-64"
          >
            {button}
          </button>
        </div>
      </div>
      <div className="text-center mt-32">
        <h2 className="text-4xl font-bold sm:text-5xl">
          <span
            onClick={() => {
              navigate("/zikr-app");
            }}
          >
            Back to
          </span>
          <span
            onClick={() => {
              navigate("/zikr-app");
            }}
            className=" hover:cursor-pointer"
          >
            {" "}
            Zikr App
          </span>
        </h2>
      </div>
    </section>
  );
};

export default Declare;
