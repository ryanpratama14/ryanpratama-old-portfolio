import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useLocalStrorage from "../LocalStorage";

function Zikirapp() {
  useEffect(() => {
    document.title = "#3: Zikr App";
  }, []);
  const [num, setNum] = useLocalStrorage("zikirNum", 0);
  const [doa, setDoa] = useLocalStrorage("zikirDoa", "سُـبْحانَ الله");
  const [totalNum, setTotalNum] = useLocalStrorage("zikirTotalNum", 0);
  const [zikir, setZikir] = useLocalStrorage("zikirStatus", "Start");
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
    <div class="-mt-[5rem] pt-32  from-primary to-base-200 text-primary-content bg-gradient-to-b">
      <Toaster />
      <section class="" id="ceo">
        <div class="px-8 py-12 sm:px-6  lg:px-8">
          <div class="mx-auto max-w-2xl text-center mb-12">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
              Welcome to Zikr App!
            </h2>
            <h2 class=" font-bold mt-2 text-3xl sm:text-4xl lg:text-4xl xl:text-4xl">
              <span className="text-base-content">
                Pray, <span class="text-base-content">Pray, </span>
                Pray.
              </span>
            </h2>
          </div>
          <div class="text-center mt-20">
            <p class="mb-2 text-primary-content">{num}</p>
            <p class="text-5xl text-base-content">{doa}</p>
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
              class="btn mt-6  btn-success  w-44 px-5 py-2.5"
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
              class="btn mt-3  btn-error  w-44 px-5 py-2.5"
            >
              Reset
            </button>
          </div>

          <div class="mx-auto max-w-xl text-center mt-12">
            <h2 className="text-4xl sm:text-6xl md:text-4xl xl:text-5xl font-bold tracking-tight my-32">
              <span className=" ">
                Declare your faith{" "}
                <span
                  onClick={() => {
                    navigate("declare");
                  }}
                  className="text-base-content hover:cursor-pointer"
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
