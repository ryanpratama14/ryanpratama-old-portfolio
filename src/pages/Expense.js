import { React, useEffect, useState } from "react";
import Table from "./components/Table";
import InputField from "./components/InputField";

const Expense = () => {
  useEffect(() => {
    document.title = "#5: Expense Tracker App";
  }, []);

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
        </div>
      </section>
    </div>
  );
};

export default Expense;
