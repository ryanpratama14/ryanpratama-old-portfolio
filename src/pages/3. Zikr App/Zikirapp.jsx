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
      className="-mt-[4rem] w-full px-[8vw] md:px-[4vw] pt-[4rem] pb-[20rem] from-primary to-secondary text-primary-content bg-gradient-to-b"
    >
      <Toaster
        toastOptions={{
          className: "font-semibold bg-primary text-primary-content",
          duration: 1300,
        }}
      />
      {/* TITLE */}
      <div className="text-center font-bold text-primary-content text-4xl sm:text-5xl my-20">
        <h1>
          Welcome to Zikr App!
          <h2 className="text-3xl sm:text-4xl">Pray, Pray, Pray. </h2>
        </h1>
      </div>

      <div className="text-center">
        <p className="mb-2 text-primary-content">{num}</p>
        <p className="text-5xl text-primary-content">{doa}</p>
      </div>
      {/* BUTTON */}
      <div className="flex flex-col justify-center items-center">
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
          className="btn btn-success w-64  my-6"
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
          className="btn btn-error w-64 mb-6"
        >
          Reset
        </button>
      </div>
      <div className="text-center mt-20">
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
