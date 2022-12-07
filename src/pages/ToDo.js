import "/Users/ryanpratama/Desktop/faotech-projects-app/src/App.css";
import React from "react";
import "./Background.css";
import InputField from "./components/InputField";
import toast, { Toaster } from "react-hot-toast";

import { useState } from "react";
import { createContext, useEffect } from "react";
import ToDoCard from "./ToDoCard";

const ToDo = () => {
  useEffect(() => {
    document.title = "#4: To Do App";
  }, []);
  const UserContext = createContext();
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [data, setData] = useState([
    {
      name: "Full-Stack Web Development at FaoTech",
      task: "Mastering Tailwind CSS",
      date: "2022-30-12",
      time: "22:45",
      isDone: false,
    },
  ]);

  const markTodo = (index) => {
    const newData = [...data];
    newData[index].isDone = true;
    setData(newData);
  };

  const removeTodo = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div class="font-mono">
      <Toaster />
      <section class=" text-white reviews" id="ceo">
        <div class="px-12 py-12 sm:px-6  lg:px-8">
          <div class="mx-auto max-w-xl text-center mb-12">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
              Welcome to
              <br />
              <span class="text-sky-300">To </span>
              <span class="text-red-300">Do </span>App!
            </h2>
          </div>
          <div class="flex flex-wrap justify-center">
            {data?.map((todo, index) => {
              return (
                <ToDoCard
                  nameProps={todo.name}
                  taskProps={todo.task}
                  dateProps={todo.date}
                  timeProps={todo.time}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              );
            })}
          </div>
          <div class="flex flex-col justify-center items-center w-full">
            <InputField
              fieldProps={"Field"}
              valueTyped={(e) => {
                setName(e);
              }}
              type="text"
              lengthMax={256}
              placeholderValue="Japanese lesson"
            />

            <InputField
              fieldProps={"Task"}
              valueTyped={(e) => {
                setTask(e);
              }}
              type="text"
              lengthMax={256}
              placeholderValue="Listening chapter 26"
            />

            <InputField
              fieldProps={"Date"}
              valueTyped={(e) => {
                setDate(e);
              }}
              type="date"
            />

            <InputField
              fieldProps={"Time"}
              valueTyped={(e) => {
                setTime(e);
              }}
              type="time"
              placeholderValue="12:45 PM"
            />
          </div>
          <div class="text-center">
            <button
              onClick={() => {
                if (
                  name.length > 0 &&
                  task.length > 0 &&
                  date.length > 0 &&
                  time.length > 0
                ) {
                  setData([...data, { name, task, date, time }]);
                  toast.success("Added");
                } else {
                  toast.error("All fields are required");
                }
              }}
              className="btn btn-primary mt-6 mb-4 w-48"
            >
              Add new task
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// export default ToDo = React.createContext(data[0].totalTask);
export default ToDo;
