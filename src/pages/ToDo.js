import "/Users/ryanpratama/Desktop/faotech-projects-app/src/App.css";
import React from "react";
import "./Background.css";
import InputField from "./components/InputField";

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
    },
  ]);

  return (
    <div class="font-mono ">
      <section class=" text-white reviews" id="ceo">
        <div class="px-8 py-12 sm:px-6  lg:px-8">
          <div class="mx-auto max-w-xl text-center mb-12">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
              Welcome to
              <br />
              <span class="text-sky-300">To </span>
              <span class="text-red-300">Do </span>App!
            </h2>
          </div>
          <div class="flex flex-wrap justify-center">
            {data?.map((e, index) => {
              // console.log("EHEHEH");
              return (
                <div>
                  <ToDoCard
                    nameProps={e.name}
                    taskProps={e.task}
                    dateProps={e.date}
                    timeProps={e.time}
                  />
                </div>
              );
            })}
          </div>
          <div class="text-center text-black dark:text-white">
            <div className=" mt-4">
              <InputField
                valueTyped={(e) => {
                  setName(e);
                }}
                type="text"
                lengthMax={256}
                placeholderValue="Field"
              />
            </div>
            <div className=" mt-4">
              <InputField
                valueTyped={(e) => {
                  setTask(e);
                }}
                type="text"
                lengthMax={256}
                placeholderValue="Task"
              />
            </div>

            <div className=" mt-4">
              <InputField
                valueTyped={(e) => {
                  setDate(e);
                }}
                type="date"
              />
            </div>
            <div className=" mt-4">
              <InputField
                valueTyped={(e) => {
                  setTime(e);
                }}
                type="time"
                placeholderValue="12:45 PM"
              />
            </div>
            <button
              onClick={() => {
                if (
                  name.length > 0 &&
                  task.length > 0 &&
                  date.length > 0 &&
                  time.length > 0
                ) {
                  setData([...data, { name, task, date, time }]);
                }
              }}
              className="btn btn-primary mt-4 mb-4 w-72"
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
