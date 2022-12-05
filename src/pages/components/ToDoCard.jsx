import { React, useState, createContext, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";

const ToDoCard = ({ nameProps, taskProps, dateProps, totalTaskProps }) => {
  const notifySuccess = () => toast.success("Marked as done");
  const [count, setCounter] = useState(0);
  const [isDone, setIsDone] = useState("DONE ONE TASK");

  return (
    <div class="mx-10 my-6 shadow-lg rounded-xl w-96 md:w-96 p-4 bg-white overflow-hidden">
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
        <p class="text-gray-800 text-xs font-bold mb-2">Due: {dateProps}</p>
        <p class="text-stone-900 text-sm">
          {count}/{totalTaskProps} task completed
        </p>
      </div>
      <div className="card-actions justify-between mt-2">
        <button
          className="btn btn-primary"
          onClick={() => {
            if (count > 0) {
              setCounter(count - 1);
            }
          }}
        >
          Undo
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setCounter(count + 1);
            if (count === 7) {
              setCounter(count);
              notifySuccess();
              setIsDone("TASK COMPLETED");
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
