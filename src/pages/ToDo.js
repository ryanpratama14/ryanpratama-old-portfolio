import React from "react";
import "./Background.css";
import InputField from "./components/InputField";
import ToDoCard from "./components/ToDoCard";
import { useState } from "react";

const ToDo = () => {
  const [name, setName] = useState("");
  const [percent, setPercent] = useState(0);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const regex = /^[a-zA-Z, ЁёА-я]+$/;
  const [data, setData] = useState([
    {
      name: "Ryan",
      task: "Mastering Tailwind CSS",
      percent: 15,
      date: "2022-30-12",
    },
  ]);

  return (
    <div class="font-mono">
      <section class=" text-white reviews" id="ceo">
        <div class="px-8 py-12 sm:px-6  lg:px-8">
          <div class="mx-auto max-w-xl text-center mb-12">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
              Welcome to
              <br />
              <span class="text-sky-300">To Do </span>
              App
            </h2>
          </div>
          <div class="flex flex-wrap justify-center">
            {data?.map((e) => {
              return (
                <div>
                  <ToDoCard
                    nameProps={e.name}
                    taskProps={e.task}
                    dateProps={e.date}
                    percentProps={e.percent}
                  />
                </div>
              );
            })}
          </div>
          <div class="text-center">
            <div className=" mt-4">
              <InputField
                valueTyped={(e) => {
                  setName(e);
                }}
                type="text"
                lengthMax={20}
                placeholderValue="Your Name"
              />
            </div>
            <div className=" mt-4">
              <InputField
                valueTyped={(e) => {
                  setTask(e);
                }}
                type="text"
                lengthMax={360}
                placeholderValue="English lesson chapter 37"
              />
            </div>
            <div className=" mt-4">
              <InputField
                valueTyped={(e) => {
                  setDate(e);
                }}
                type="date"
                placeholderValue="2022-30-12"
              />
            </div>
            <div className=" mt-4">
              <InputField
                valueTyped={(e) => {
                  setPercent(e);
                }}
                type="text"
                lengthMax={2}
                placeholderValue="75"
              />
            </div>
            <button
              onClick={() => {
                if (
                  percent.length >= 0 &&
                  percent.length < 99 &&
                  name.length > 0 &&
                  name.match(regex) &&
                  task.length > 0 &&
                  task.match(regex) &&
                  date.length > 0
                ) {
                  setData([...data, { name, task, date, percent }]);
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

export default ToDo;
