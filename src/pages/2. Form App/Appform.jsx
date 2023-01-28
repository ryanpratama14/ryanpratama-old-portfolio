import { React, useEffect, useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

function Appform() {
  useEffect(() => {
    document.title = "#2: Form App";
  }, []);
  const [word, setWord] = useState("valid answers only");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [telephoneNum, setTelephoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [instagram, setInstagram] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [address, setAddress] = useState("");
  const notifySuccess = () => toast.success("Success");
  const notifyError = () =>
    toast.error("Something went wrong, please try again");
  let isFilledAll = useRef(false);
  let isSubmitted = 0;
  const regex = /^[a-zA-Z, ЁёА-я]+$/;
  const regexNum = /^[0-9]+$/;
  const validRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  useEffect(() => {
    if (
      fName.match(regex) &&
      lName.match(regex) &&
      fName.length > 0 &&
      lName.length > 0 &&
      age >= 18 &&
      instagram.length > 0 &&
      telephoneNum.match(regexNum) &&
      telephoneNum.length > 0 &&
      email.match(validRegex) &&
      country.length > 0 &&
      region.length > 0 &&
      address.length > 0
    ) {
      setWord("all done!");
      isFilledAll.current = true;
      // console.log("KEISI SEMUA MANTAPPU JIWA");
    } else {
      setWord("valid answers only");
      isFilledAll.current = false;
      // console.log("ISI SEMUA DONG");
    }
    if (age < 18) {
      setWord("you're underage");
    }
  }, [
    fName,
    lName,
    telephoneNum,
    email,
    age,
    instagram,
    country,
    region,
    address,
    word,
    isFilledAll,
  ]);

  return (
    <section id="form-app" className="styleIt">
      <Toaster
        toastOptions={{
          className: "font-semibold bg-primary text-primary-content",
          duration: 1300,
        }}
      />
      {/* This is Title */}
      <div className="font-bold sm:text-5xl text-4xl text-primary-content my-20 text-center">
        <h1>
          Passionate about programming?
          <br />
          Join faoTech, NOW.
        </h1>
      </div>
      {/* This is end of Title */}

      {/* This is Form */}
      <div className="flex justify-center">
        <div className="w-full md:w-[50%] text-left">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-m font-medium text-primary-content">
                First Name
              </label>
              <input
                className=" input input-bordered w-full text-base-content"
                placeholder="Ryan"
                required
                maxLength={20}
                onChange={(e) => setFName(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 text-m font-medium text-primary-content">
                Last Name
              </label>
              <input
                className=" border input input-bordered w-full text-base-content"
                placeholder="Pratama"
                required
                maxLength={20}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 text-m font-medium text-primary-content">
                Age
              </label>
              <input
                className=" border input input-bordered w-full text-base-content"
                placeholder="18+ only"
                required
                maxLength={2}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 text-m font-medium text-primary-content">
                Phone Number
              </label>
              <input
                className=" border input input-bordered w-full text-base-content"
                placeholder="+7 996 100 52 02"
                required
                maxLength={16}
                onChange={(e) => setTelephoneNum(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-m font-medium text-primary-content">
              Instagram Username
            </label>
            <input
              className=" border input input-bordered w-full text-base-content"
              placeholder="@ryanpratama14"
              required
              maxLength={30}
              onChange={(e) => setInstagram(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-m font-medium text-primary-content">
              Email Address
            </label>
            <input
              maxLength={30}
              className=" border input input-bordered w-full text-base-content"
              placeholder="partnership@faotech.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-m font-medium text-primary-content">
                Country
              </label>

              <CountryDropdown
                className="  input input-bordered w-full text-base-content"
                value={country}
                onChange={(val) => setCountry(val)}
              />
            </div>
            <div>
              <label className="block mb-2 text-m font-medium text-primary-content">
                Region
              </label>

              <RegionDropdown
                className="  input input-bordered w-full text-base-content"
                country={country}
                value={region}
                onChange={(val) => setRegion(val)}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-m font-medium text-primary-content">
              Address
            </label>
            <input
              maxLength={50}
              className="input input-bordered w-full text-base-content"
              placeholder="Jackson Street 91"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={(event) => {
            isSubmitted = isSubmitted + 1;
            if (isFilledAll.current === true && isSubmitted === 1) {
              notifySuccess();
            } else if (isFilledAll.current === true && isSubmitted === 2) {
              toast("Already submitted, thank you", {
                icon: "🙌",
              });
            } else if (isFilledAll.current === true && isSubmitted > 2) {
              event.preventDefault();
            } else {
              notifyError();
            }
          }}
          type="submit"
          className=" btn btn-primary-focus w-36 md:w-64"
        >
          Submit
        </button>
      </div>
      <p className=" text-l mt-3 text-center">{word}</p>

      {/* This is end of Form */}
    </section>
  );
}

export default Appform;
