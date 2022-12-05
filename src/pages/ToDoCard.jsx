import { React, useState, createContext, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";

const ToDoCard = ({
  nameProps,
  taskProps,
  dateProps,
  totalTaskProps,
  timeProps,
}) => {
  const notifySuccess = () => toast.success("Marked as done");
  const [count, setCounter] = useState(0);
  const [isDone, setIsDone] = useState("DONE ONE TASK");
  const [word, setWord] = useState("On progress...");

  return (
    <div class=" mx-10 my-6  shadow-lg rounded-xl w-80 md:w-96 p-4 bg-white overflow-hidden">
      <Toaster />
      <div class="flex items-center border-b-2 mb-2 py-2">
        <img
          class="w-10 h-10 object-cover "
          alt="tasks"
          src="https://cdn-icons-png.flaticon.com/512/2098/2098402.png"
        />
        <div class="pl-3">
          <div class="font-medium text-black">{nameProps}</div>
        </div>
      </div>
      <div class="w-full">
        <p class="text-gray-800 text-sm font-medium mb-2">Working On:</p>
        <p class="text-gray-800 text-xl font-medium mb-2">{taskProps}</p>
        <p class="text-gray-800 text-l font-bold mb-2">Due: {dateProps}</p>
        <p class="text-gray-800 text-l font-bold mb-2">{timeProps}</p>
        <p class="text-stone-900 text-sm">{word}</p>
      </div>
      <div className="card-actions justify-between mt-2">
        <button
          className="btn btn-primary"
          onClick={() => {
            if (word === "You're up 🙌") {
              setCounter(0);
              setIsDone("DONE ONE TASK");
              setWord("On progress...");
            }
          }}
        >
          Undo
        </button>
        <button
          className="btn btn-primary"
          onClick={(event) => {
            setCounter(count + 1);
            if (count === 1 - 1) {
              setWord("You're up 🙌");
              notifySuccess();
              setIsDone("TASK COMPLETED");
            } else if (count === 1) {
              event.preventDefault();
            }
          }}
        >
          {isDone}
        </button>
      </div>
    </div>
  );
};

export default ToDoCard;
