import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useLocalStrorage from "../LocalStorage";

function Zikirapp() {
  useEffect(() => {
    document.title = "Zikr App";
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
    <section
      id="zikr-app"
      class="-mt-[4rem] w-full px-[8vw] md:px-[4vw] pt-[4rem] pb-[20rem] from-primary via-secondary to-accent text-primary-content bg-gradient-to-b"
    >
      <Toaster
        toastOptions={{
          className: "font-semibold bg-primary text-primary-content",
          duration: 1300,
        }}
      />
      {/* TITLE */}
      <div class="text-center font-bold text-primary-content text-4xl sm:text-5xl my-20">
        <h1>
          Welcome to Zikr App!
          <h2 class="text-3xl sm:text-4xl">Pray, Pray, Pray. </h2>
        </h1>
      </div>

      <div class="text-center">
        <p class="mb-2 text-primary-content">{num}</p>
        <p class="text-5xl text-primary-content">{doa}</p>
      </div>
      {/* BUTTON */}
      <div class="flex flex-col justify-center items-center">
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
          class="btn btn-success w-64  my-6"
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
          class="btn btn-error w-64 mb-6"
        >
          Reset
        </button>
      </div>
      <div class="text-center mt-20">
        <h1 className="font-bold sm:text-5xl text-4xl">
          <span className=" ">
            Declare your faith{" "}
            <span
              onClick={() => {
                navigate("declare");
              }}
              className=" hover:cursor-pointer"
            >
              here.{" "}
            </span>
          </span>
        </h1>
      </div>
    </section>
  );
}

export default Zikirapp;
