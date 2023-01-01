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
    <div class="-mt-[5rem] pt-32 font-mono from-primary to-base-200 text-primary-content bg-gradient-to-b">
      <Toaster />
      <section class="  reviews min-h-screen">
        <div class="px-8 py-12 sm:px-6  lg:px-8">
          <div class="mx-auto max-w-xl text-center mt-12 mb-27">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
              Declare your <span class="text-base-content">Shahada</span>
              <br />
            </h2>
          </div>
          <div class="text-center mt-32">
            <p class="text-2xl mb-6 text-primary-content">repeat:</p>
            <p class="text-3xl text-base-content">{word}</p>
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
              class="btn mt-5  btn-error  w-44 px-5 py-2.5"
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
              >
                Back to
              </span>
              <span
                onClick={() => {
                  navigate("/zikrapp");
                }}
                className="text-base-content hover:cursor-pointer"
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
