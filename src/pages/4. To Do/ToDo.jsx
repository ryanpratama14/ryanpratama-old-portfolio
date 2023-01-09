import React from "react";
import InputFieldCenter from "./components/InputFieldCenter";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";
import useLocalStrorage from "../LocalStorage";
import ToDoCard from "./components/ToDoCard";

const ToDo = () => {
  useEffect(() => {
    document.title = "To Do List App";
  }, []);
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [data, setData] = useLocalStrorage("todo-app", [
    {
      name: "World Cup 2022 Final",
      task: "France vs. Argentina",
      date: "2022-18-12",
      time: "22:00",
      isDone: true,
    },
    {
      name: "Full-Stack Engineer",
      task: "Mastering ReactJS",
      date: "2023-30-01",
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
    <section
      id="to-do-list-app"
      class="-mt-[4rem] w-full px-[8vw] md:px-[4vw] pt-[4rem] pb-[20rem] from-primary via-secondary to-accent text-primary-content bg-gradient-to-b"
    >
      <Toaster
        toastOptions={{
          className: "font-semibold bg-primary text-primary-content",
          duration: 1300,
        }}
      />
      {/* TITLE */}
      <div class="text-center font-bold sm:text-5xl text-4xl tracking-tight my-20">
        <h1>
          Welcome to
          <br />
          To Do List App!
        </h1>
      </div>
      <div class="flex justify-center">
        <input
          placeholder="Search task..."
          class="input input-bordered input-sm w-72 md:w-96 my-6 text-base-content"
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
      <div class="flex flex-col justify-center items-center w-full text-left">
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
          className="btn btn-secondary-focus mt-8 w-72 md:w-96"
        >
          Add new task
        </button>
      </div>
    </section>
  );
};

export default ToDo;
