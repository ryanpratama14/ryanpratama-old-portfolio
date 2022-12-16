import "/Users/ryanpratama/Desktop/faotech-projects-app/src/App.css";
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Declare = () => {
  useEffect(() => {
    document.title = "#3 Declare Your Shahada";
  }, []);
  const [word, setWord] = useState("أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰ");
  const [button, setButton] = useState("Next");
  // const openInNewTab = (url) => {
  //   const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  //   if (newWindow) newWindow.opener = null;
  // };

  const navigate = useNavigate();
  const notifySuccess2 = () =>
    toast("Welcome, brother!", {
      icon: "😇",
    });

  return (
    <div class="font-mono ">
      <Toaster />
      <section class=" text-white reviews min-h-screen" id="ceo">
        <div class="px-8 py-12 sm:px-6  lg:px-8">
          <div class="mx-auto max-w-xl text-center mt-12 mb-27">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
              Declare your <span class="text-red-300">Shahada</span>
              <br />
            </h2>
          </div>
          <div class="text-center mt-32">
            <p class="text-2xl mb-6  text-white dark:text-white">repeat:</p>
            <p class="text-3xl text-white dark:text-white">{word}</p>
          </div>
          <div class="flex flex-col flex-wrap justify-center items-center text-center">
            <button
              onClick={() => {
                if (word === "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰ") {
                  setWord("وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ ٱللَّٰ");
                  setButton("Finish");
                } else {
                  notifySuccess2();
                }
              }}
              class="btn mt-5 border-transparent hover:border-transparent text-white font-semibold  rounded-lg text-sm w-44 px-5 py-2.5 text-center bg-indigo-600 dark:bg-indigo-600 hover:bg-indigo-700 dark:hover:bg-indigo-700"
            >
              {button}
            </button>
          </div>
          <div class="mx-auto max-w-xl text-center mt-32 mb-27">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
              <span
                onClick={() => {
                  navigate("/zikir-app");
                }}
                className="text-white"
              >
                Back to
              </span>
              <span
                onClick={() => {
                  navigate("/zikrapp");
                }}
                className="text-blue-300 dark:text-blue-300"
              >
                {" "}
                Zikr App
              </span>
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Declare;
