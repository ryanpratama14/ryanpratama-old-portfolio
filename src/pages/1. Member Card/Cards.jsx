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
    <section
      id="cards"
      className="pb-[20rem] -mt-[4rem] px-[8vw] md:px-[4vw] w-full pt-[4rem] from-primary via-secondary to-accent text-primary-content bg-gradient-to-b"
    >
      <Toaster
        toastOptions={{
          className: "font-semibold bg-primary text-primary-content",
          duration: 1300,
        }}
      />
      {/* TITLE  */}
      <div className="my-20 text-center font-bold sm:text-5xl text-4xl text-primary-content">
        <h1>
          faoTech
          <br />
          Member Card
        </h1>
      </div>
      {/* CARDS */}
      <div className="flex flex-wrap justify-center items-center">
        {data?.map((element) => {
          return <Card nameProps={element.name} ageProps={element.age} />;
        })}
      </div>
      {/* INPUT FIELD */}
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
        {/* BUTTON */}
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
          className="btn btn-secondary-focus mt-6 w-72"
        >
          Add New Card
        </button>
      </div>
    </section>
  );
}

export default Cards;
