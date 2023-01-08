import { React, useState } from "react";
import toast from "react-hot-toast";

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
  const [counter, setCounter] = useState(0);
  return (
    <div class="text-primary-content shadow-2xl rounded-xl w-96 my-3 md:m-3 p-6 overflow-hidden from-primary via-secondary to-accent bg-gradient-to-br background-animation">
      <div class="flex items-center border-neutral border-b-2 mb-2 pb-2">
        <img
          class="w-12 h-12 relative object-cover"
          alt="tasks"
          src="https://cdn-icons-png.flaticon.com/512/4697/4697260.png"
        />
        <div class="pl-3">
          <div class="font-extrabold  text-2xl  tracking-tighter">
            {nameProps}
          </div>
        </div>
      </div>
      <div class="w-full">
        <p class="font-extrabold text-2xl mb-2">{taskProps}</p>
        <p
          style={{ textDecoration: todo.isDone ? "line-through" : "" }}
          class="text-lg font-bold"
        >
          📆 {dateProps}
          <br />⏰ {timeProps}
        </p>
        <p class="text-left text-lg">
          {todo.isDone ? "🙌" : "💪 on progress..."}
        </p>
      </div>
      <div className="card-actions justify-between mt-4">
        <button
          class="btn border-transparent btn-error"
          onClick={() => {
            removeTodo(index);
            toast.error("Deleted");
          }}
        >
          Delete
        </button>
        <button
          class="btn btn-success"
          onClick={(event) => {
            markTodo(index);
            setCounter(counter + 1);
            if (counter === 0) {
              toast.success("Marked as done");
            } else if (counter === 1) {
              toast(`You're doing great`, {
                icon: "🙌",
              });
            } else {
              event.preventDefault();
            }
          }}
        >
          {todo.isDone ? "Marked as Done" : "Mark as Done"}
        </button>
      </div>
    </div>
  );
};

export default ToDoCard;
