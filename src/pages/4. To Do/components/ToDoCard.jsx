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
    <div className="text-primary-content shadow-2xl rounded-xl w-96 my-3 md:m-3 p-6 overflow-hidden from-primary to-secondary bg-gradient-to-br background-animation">
      <div className="flex items-center border-neutral border-b-2 mb-2 pb-2">
        <img
          className="w-12 h-12 relative object-cover"
          alt="tasks"
          src="https://cdn-icons-png.flaticon.com/512/4697/4697260.png"
        />
        <div className="pl-3">
          <h2 className="font-extrabold tracking-tighter">{nameProps}</h2>
        </div>
      </div>
      <div className="w-full">
        <h2 className="font-extrabold mb-2">{taskProps}</h2>
        <p
          style={{ textDecoration: todo.isDone ? "line-through" : "" }}
          className="font-bold"
        >
          📆 {dateProps}
          <br />⏰ {timeProps}
        </p>
        <p className="text-left">{todo.isDone ? "🙌" : "💪 on progress..."}</p>
      </div>
      <div className="card-actions justify-between mt-4">
        <button
          className="btn border-transparent btn-error"
          onClick={() => {
            removeTodo(index);
            toast.error("Deleted");
          }}
        >
          Delete
        </button>
        <button
          className="btn btn-success"
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
