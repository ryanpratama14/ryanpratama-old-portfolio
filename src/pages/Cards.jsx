import { useState, useEffect } from "react";
import Card from "./components/Card";
import InputField from "./components/InputField";
import useLocalStrorage from "./LocalStorage";
import toast, { Toaster } from "react-hot-toast";

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
    <div class="pt-32 from-primary to-secondary text-primary-content bg-gradient-to-b App App-header font-mono">
      {data?.map((element) => {
        return (
          <div className="mt-4 ">
            <Card nameProps={element.name} ageProps={element.age} />
          </div>
        );
      })}
      <Toaster />
      <div>
        <InputField
          valueTyped={(e) => {
            setName(e);
          }}
          type="text"
          lengthMax={20}
          placeholderValue="Your Name"
        />
      </div>
      <div>
        <InputField
          valueTyped={(e) => {
            setAge(e);
          }}
          lengthMax={2}
          placeholderValue="18+"
        />
      </div>
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
        className="btn btn-primary mt-6 mb-4 w-72"
      >
        Add new card
      </button>
    </div>
  );
}

export default Cards;
