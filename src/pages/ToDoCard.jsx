import { React, useState } from "react";
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
    <div class="mt-2 mb-6 shadow-lg rounded-xl w-96 md:w-96 md:mx-6 md:my-6 py-6 px-6 bg-white overflow-hidden">
      <Toaster />
      <div class="flex items-center border-gray-400 border-b-2 mb-2 pb-2">
        <img
          class="w-14 h-14 object-cover "
          alt="tasks"
          src="https://www.pngkit.com/png/detail/924-9245281_todo-list-icon-do-list-icon-png.png"
        />
        <div class="pl-3">
          <div class="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-gray-600 to-black tracking-tighter">
            {nameProps}
          </div>
        </div>
      </div>
      <div class="w-full">
        <p class="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-indigo-600 to-black mb-2">
          {taskProps}
        </p>
        <p
          style={{ textDecoration: todo.isDone ? "line-through" : "" }}
          class="text-gray-800 text-l font-bold tracking-tighter"
        >
          📆 {dateProps}
          <br />⏰ {timeProps}
        </p>

        <p class="text-stone-900 text-sm text-left mt-2">{word}</p>
      </div>

      <div className="card-actions justify-between mt-2">
        <button
          class="btn border-transparent hover:border-transparent text-white font-extrabold rounded-lg text-sm  text-center bg-red-700 dark:bg-red-700 hover:bg-red-900 dark:hover:bg-red-900"
          onClick={() => {
            removeTodo(index);
            toast.error("Deleted");
            setCounter(0);
          }}
        >
          Delete
        </button>
        <button
          class="btn border-transparent hover:border-transparent text-white font-extrabold rounded-lg text-sm  text-center bg-green-700 dark:bg-green-700 hover:bg-green-900 dark:hover:bg-green-900"
          onClick={(event) => {
            markTodo(index);
            setCounter(count + 1);
            if (count === 1 - 1) {
              setWord("you're doing great 🙌");
              toast.success("Marked as done");
              setIsDone2("TASK COMPLETED");
            } else if (count === 1) {
              toast("You've done it! Good job", {
                icon: "👋",
              });
            } else if (count > 1) {
              // setCounter(0);
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
