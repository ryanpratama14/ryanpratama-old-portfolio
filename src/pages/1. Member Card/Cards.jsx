import { useState, useEffect } from "react";
import Card from "./components/Card";
import InputField from "./components/InputField";
import toast, { Toaster } from "react-hot-toast";
import useLocalStrorage from "../LocalStorage";

function Cards() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [data, setData] = useLocalStrorage("membercard", [
    { name: "John", age: 19 },
  ]);
  const regex = /^[a-zA-Z, ЁёА-я]+$/;

  useEffect(() => {
    document.title = "#1: Member Card";
  }, []);

  return (
    <div class="pt-32 from-primary to-secondary text-primary-content bg-gradient-to-b -mt-[5rem] pb-20">
      <div class="px-12 py-12 mx-auto max-w-xl text-center">
        <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
          FaoTech
          <br />
          <span class="text-primary-content">Member Card</span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {data?.map((element) => {
          return (
            <div className="mt-4 ">
              <Card nameProps={element.name} ageProps={element.age} />
            </div>
          );
        })}
      </div>
      <Toaster />
      <div className="flex justify-center items-center flex-wrap flex-col">
        <InputField
          valueTyped={(e) => {
            setName(e);
          }}
          type="text"
          lengthMax={20}
          placeholderValue="Your Name"
        />
        <InputField
          valueTyped={(e) => {
            setAge(e);
          }}
          lengthMax={2}
          placeholderValue="18+"
        />
        <button
          onClick={() => {
            if (age >= 18 && name.length > 0 && name.match(regex)) {
              setData([...data, { name, age }]);
              toast.success("Added");
            } else if (name.length > 0 && name.match(regex) && age < 18) {
              toast.error("You are underage");
            } else {
              toast.error("All fields are required");
            }
          }}
          className="btn btn-secondary-focus mt-6 mb-4 w-72"
        >
          Add new card
        </button>
      </div>
    </div>
  );
}

export default Cards;
