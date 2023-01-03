import React from "react";
import InputFieldCenter from "./components/InputFieldCenter";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";
import useLocalStrorage from "../LocalStorage";
import ToDoCard from "./components/ToDoCard";

const ToDo = () => {
  useEffect(() => {
    document.title = "#4: To Do List App";
  }, []);
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [data, setData] = useLocalStrorage("todo-app", [
    {
      name: "Full-Stack Engineer",
      task: "Mastering Tailwind CSS",
      date: "2022-30-12",
      time: "22:45",
      isDone: false,
    },
    {
      name: "World Cup 2022 Final",
      task: "France vs. Argentina",
      date: "2022-18-12",
      time: "22:00",
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

  const [searchText, updateSearchText] = useState("");
  const [filteredTransaction, updateTxn] = useState(data);

  const filterData = (searchText) => {
    if (!searchText || !searchText.trim().length) {
      updateTxn(data);
      return;
    }
    let txn = [...data];
    txn = txn.filter((todo) =>
      todo.name.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    updateTxn(txn);
  };

  useEffect(() => {
    filterData(searchText);
  }, [data]);

  return (
    <div class="-mt-[5rem] pt-32 from-primary to-secondary text-primary-content bg-gradient-to-b">
      <Toaster
        toastOptions={{
          className: "font-semibold bg-primary text-primary-content",
          duration: 1300,
        }}
      />
      <section>
        <div class="px-12 py-12">
          <div class="mx-auto max-w-xl text-center mb-12">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
              Welcome to
              <br />
              <span class="text-primary-content">To Do </span>
              <span class="text-primary-content">List </span>App!
            </h2>
          </div>
          <div class="flex justify-center">
            <input
              placeholder="Search task..."
              class="input input-bordered input-sm w-96 mt-4 mb-3 text-base-content"
              onChange={(e) => {
                updateSearchText(e.target.value);
                filterData(e.target.value);
              }}
            />
          </div>
          <div class="flex flex-wrap justify-center">
            {filteredTransaction?.map((todo, index) => {
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
          <div class="flex flex-col justify-center items-center w-full text-center">
            <InputFieldCenter
              fieldProps={"Field"}
              valueTyped={(e) => {
                setName(e);
              }}
              type="text"
              lengthMax={256}
              placeholderValue="Japanese lesson"
            />

            <InputFieldCenter
              fieldProps={"Task"}
              valueTyped={(e) => {
                setTask(e);
              }}
              type="text"
              lengthMax={256}
              placeholderValue="Listening chapter 26"
            />

            <InputFieldCenter
              fieldProps={"Date"}
              valueTyped={(e) => {
                setDate(e);
              }}
              type="date"
            />

            <InputFieldCenter
              fieldProps={"Time"}
              valueTyped={(e) => {
                setTime(e);
              }}
              type="time"
              placeholderValue="12:45 PM"
            />
          </div>
          <div class="text-center text-base-content w-full items-center">
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
              className="btn btn-secondary-focus mt-8 mb-4 w-48"
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
