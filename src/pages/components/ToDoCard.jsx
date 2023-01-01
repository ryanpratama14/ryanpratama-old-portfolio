import { React, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useLocalStrorage from "../LocalStorage";

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
    <div class="mt-2 mb-6 shadow-2xl rounded-xl w-96 md:w-96 md:mx-6 md:my-6 py-6 px-6 overflow-hidden from-white to-primary text-primary-content bg-gradient-to-br">
      <Toaster />
      <div class="flex items-center border-neutral border-b-2 mb-2 pb-2">
        <img
          class="w-12 h-12 relative object-cover"
          alt="tasks"
          src="https://cdn-icons-png.flaticon.com/512/4697/4697260.png"
        />
        <div class="pl-3">
          <div class="font-extrabold  text-xl text-primary-content tracking-tighter">
            {nameProps}
          </div>
        </div>
      </div>
      <div class="w-full">
        <p class="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary-content to-neutral mb-2">
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
          class="btn border-transparent btn-error"
          onClick={() => {
            removeTodo(index);
            toast.error("Deleted");
            setCounter(0);
          }}
        >
          Delete
        </button>
        <button
          class="btn btn-success"
          onClick={(event) => {
            markTodo(index);
            setCounter(count + 1);
            if (count === 0) {
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
