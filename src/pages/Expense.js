import { React, useEffect, useState } from "react";
import ExpenseCard from "./components/ExpenseCard";
import InputField from "./components/InputField";

const Expense = () => {
  useEffect(() => {
    document.title = "#5: Expense Tracker App";
  }, []);

  const ruble = "₽";
  const [data, setData] = useState([
    {
      expenseTitle: 320,
      currency: "$",
      date: "2022-30-12",
    },
  ]);

  return (
    <div className="ceo font-mono">
      <section class=" text-white reviews" id="ceo">
        <div class="px-8 py-12 sm:px-6  lg:px-8">
          <div class="mx-auto max-w-xl text-center mb-12">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
              Welcome to
              <br />
              <span class="text-sky-300">Expense </span>
              <span class="text-red-300">Tracker </span>App!
            </h2>
          </div>
          <section class="flex flex-wrap justify-around items-center w-full">
            <ExpenseCard />
          </section>
        </div>
      </section>
    </div>
  );
};

export default Expense;
