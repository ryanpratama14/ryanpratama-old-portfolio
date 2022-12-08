import "/Users/ryanpratama/Desktop/faotech-projects-app/src/App.css";
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Zikirapp() {
  useEffect(() => {
    document.title = "#3: Zikir App";
  }, []);
  const [num, setNum] = useState(0);
  const [doa, setDoa] = useState("سُـبْحانَ الله");
  const [totalNum, setTotalNum] = useState(0);
  const [zikir, setZikir] = useState("Start");
  const navigate = useNavigate();
  const notifySuccess = () =>
    toast("The holy gate is near...", {
      icon: "🚪",
    });
  const notifySuccess2 = () =>
    toast("Masha Allah, keep praying brother...", {
      icon: "🤲",
    });

  return (
    <div class="font-mono ">
      <Toaster />
      <section class=" text-white reviews" id="ceo">
        <div class="px-8 py-12 sm:px-6  lg:px-8">
          <div class="mx-auto max-w-2xl text-center mb-12">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
              Welcome to Zikir App!
            </h2>
            <h2 class=" font-bold mt-2 text-3xl sm:text-4xl lg:text-4xl xl:text-4xl">
              <span className="text-blue-300">
                Pray, <span class="text-red-300">Pray, </span>
                Pray.
              </span>
            </h2>
          </div>
          <div class="text-center mt-20">
            <p class="mb-2 text-white dark:text-white">{num}</p>
            <p class="text-5xl text-white dark:text-white">{doa}</p>
          </div>
          <div class="flex flex-col flex-wrap justify-center items-center text-center">
            <button
              onClick={() => {
                setTotalNum(totalNum + 1);
                setNum(num + 1);
                setZikir("Keep praying...");
                if (num === 33) {
                  setNum(1);
                  if (doa === "سُـبْحانَ الله") {
                    setDoa("ٱلْحَمْدُ لِلَّٰهِ");
                  } else if (doa === "ٱلْحَمْدُ لِلَّٰهِ") {
                    setDoa("الله أكبر");
                  } else if (doa === "الله أكبر") {
                    setDoa("سُـبْحانَ الله");
                  }
                }
                if (totalNum === 33 - 1) {
                  notifySuccess();
                } else if (totalNum === 99 - 1) {
                  notifySuccess2();
                }
              }}
              class="btn mt-5 border-transparent hover:border-transparent text-white font-semibold rounded-lg text-sm w-44 px-5 py-2.5 text-center bg-indigo-600 dark:bg-indigo-600 hover:bg-indigo-700 dark:hover:bg-indigo-700"
            >
              {zikir}
            </button>

            <button
              onClick={() => {
                setNum(0);
                setTotalNum(0);
                setZikir("Start");
                setDoa("سُـبْحانَ الله");
              }}
              class="font-semibold  btn mt-3 border-transparent hover:border-transparent text-white rounded-lg text-sm w-44 px-5 py-2.5 text-center bg-violet-600 dark:bg-violet-600 hover:bg-violet-700 dark:hover:bg-violet-700"
            >
              Reset
            </button>
          </div>

          <div class="mx-auto max-w-xl text-center mt-12">
            <h2 className="text-white text-4xl sm:text-6xl md:text-4xl xl:text-5xl font-bold tracking-tight my-32">
              <span className="text-white ">
                Declare your faith{" "}
                <span
                  onClick={() => {
                    navigate("declare");
                  }}
                  className="text-blue-300 "
                >
                  here.{" "}
                </span>
              </span>
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Zikirapp;
