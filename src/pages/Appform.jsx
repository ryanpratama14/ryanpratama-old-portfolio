import { React, useEffect, useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

function Appform() {
  useEffect(() => {
    document.title = "#2: App Form";
  }, []);
  const [word, setWord] = useState("Note: valid answers only");
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
      setWord("All done!");
      isFilledAll.current = true;
      // console.log("KEISI SEMUA MANTAPPU JIWA");
    } else {
      setWord("Note: valid answers only");
      isFilledAll.current = false;
      // console.log("ISI SEMUA DONG");
    }
    if (age < 18) {
      setWord("You are underage");
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
    <div className=" pt-32 App from-primary to-base-200 text-primary-content bg-gradient-to-b font-mono">
      <Toaster />
      <div className="ceo">
        {/* This is Title */}
        <div class="px-12 py-12 sm:px-6  lg:px-8">
          <div class="mx-auto max-w-xl text-center mb-12">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
              Passionate about programming?
            </h2>
            <br />
            <h2 class="text-3xl font-bold tracking-tight sm:text-5xl">
              <span class="text-base-content">Join FaoTech</span>,
              <span class="text-base-content"> NOW</span>.
            </h2>

            {/* This is end of Title */}
            {/* This is Form */}
            <div class="w-full text-left mt-16">
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label class="block mb-2 text-m font-medium  text-base-content">
                    First Name
                  </label>
                  <input
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-base-100"
                    placeholder="Ryan"
                    required
                    maxLength={20}
                    onChange={(e) => setFName(e.target.value)}
                  />
                </div>
                <div>
                  <label class="block mb-2 text-m font-medium text-base-content">
                    Last Name
                  </label>
                  <input
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-base-100"
                    placeholder="Pratama"
                    required
                    maxLength={20}
                    onChange={(e) => setLName(e.target.value)}
                  />
                </div>
                <div>
                  <label class="block mb-2 text-m font-medium text-base-content">
                    Age
                  </label>
                  <input
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-base-100"
                    placeholder="18+ only"
                    required
                    maxLength={2}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div>
                  <label class="block mb-2 text-m font-medium text-base-content">
                    Phone Number
                  </label>
                  <input
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-base-100"
                    placeholder="8 996 100 52 02"
                    required
                    maxLength={16}
                    onChange={(e) => setTelephoneNum(e.target.value)}
                  />
                </div>
              </div>
              <div class="mb-6">
                <label class="block mb-2 text-m font-medium text-base-content">
                  Instagram Username
                </label>
                <input
                  class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-base-100"
                  placeholder="@ryanpratama14"
                  required
                  maxLength={30}
                  onChange={(e) => setInstagram(e.target.value)}
                />
              </div>
              <div class="mb-6">
                <label class="block mb-2 text-m font-medium text-base-content">
                  Email Address
                </label>
                <input
                  maxLength={30}
                  class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-base-100"
                  placeholder="partnership@faotech.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label class="block mb-2 text-m font-medium text-base-content">
                    Country
                  </label>

                  <CountryDropdown
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-base-100"
                    value={country}
                    onChange={(val) => setCountry(val)}
                  />
                </div>
                <div>
                  <label class="block mb-2 text-m font-medium text-base-content">
                    Region
                  </label>

                  <RegionDropdown
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-base-100"
                    country={country}
                    value={region}
                    onChange={(val) => setRegion(val)}
                  />
                </div>
              </div>

              <div class="mb-6">
                <label class="block mb-2 text-m font-medium text-base-content">
                  Address
                </label>
                <input
                  maxLength={50}
                  class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-base-100"
                  placeholder="Jackson Street 91"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div class="text-center">
                <button
                  onClick={(event) => {
                    isSubmitted = isSubmitted + 1;
                    if (isFilledAll.current === true && isSubmitted === 1) {
                      notifySuccess();
                    } else if (
                      isFilledAll.current === true &&
                      isSubmitted === 2
                    ) {
                      toast("Already submitted, thank you", {
                        icon: "🙌",
                      });
                    } else if (
                      isFilledAll.current === true &&
                      isSubmitted > 2
                    ) {
                      event.preventDefault();
                    } else {
                      notifyError();
                    }
                  }}
                  type="submit"
                  class=" btn btn-secondary"
                >
                  Submit
                </button>
              </div>
              <p class=" text-xs mt-3 mb-8 text-center text-base-content">
                {word}
              </p>
            </div>
            {/* This is end of Form */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appform;
