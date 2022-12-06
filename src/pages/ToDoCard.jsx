import { React, useState, createContext, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";

const ToDoCard = ({
  nameProps,
  taskProps,
  dateProps,
  timeProps,
  removeTodo,
  index,
  todo,
  markTodo,
}) => {
  const [count, setCounter] = useState(0);
  const [isDone2, setIsDone2] = useState("MARK AS DONE");
  const [word, setWord] = useState("on progress...💪");

  return (
    <div class=" mx-2 my-6  shadow-lg rounded-xl w-96 md:w-96 py-6 px-6 bg-white overflow-hidden">
      <Toaster />
      <div class="flex items-center border-b-2 mb-2 pb-2">
        <img
          class="w-10 h-10 object-cover "
          alt="tasks"
          src="https://cdn-icons-png.flaticon.com/512/2098/2098402.png"
        />
        <div class="pl-3">
          <div class="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-gray-700 to-black tracking-tighter">
            {nameProps}
          </div>
        </div>
      </div>
      <div class="w-full">
        <p
          style={{ textDecoration: todo.isDone ? "line-through" : "" }}
          class="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-800 to-black"
        >
          {taskProps}
        </p>
        <p
          style={{ textDecoration: todo.isDone ? "line-through" : "" }}
          class="text-gray-800 text-l font-bold tracking-tighter"
        >
          ⏰ {timeProps}
          <br />
          📆 {dateProps}
        </p>

        <p class="text-stone-900 text-sm text-left mt-2">{word}</p>
      </div>

      <div className="card-actions justify-between mt-2">
        <button
          class="btn border-transparent hover:border-transparent text-white font-medium rounded-lg text-sm  text-center bg-red-700 dark:bg-red-700 hover:bg-red-900 dark:hover:bg-red-900"
          onClick={() => {
            removeTodo(index);
            toast("Deleted", {
              icon: "⛔️",
            });
            setCounter(0);
          }}
        >
          Delete
        </button>
        <button
          class="btn border-transparent hover:border-transparent text-white font-medium rounded-lg text-sm  text-center bg-green-700 dark:bg-green-700 hover:bg-green-900 dark:hover:bg-green-900"
          onClick={(event) => {
            markTodo(index);
            setCounter(count + 1);
            if (count === 1 - 1) {
              setWord("you're up 🙌");
              toast.success("Marked as done");
              setIsDone2("TASK COMPLETED");
            } else if (count === 1) {
              toast("You've done it! Good job", {
                icon: "👋",
              });
            } else if (count > 1) {
              setCounter(0);
              event.preventDefault();
            }
          }}
        >
          {isDone2}
        </button>
      </div>
    </div>
  );
};

export default ToDoCard;
