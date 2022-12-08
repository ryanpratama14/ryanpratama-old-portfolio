import { React, useEffect, useState } from "react";
import ExpenseCard from "./ExpenseCard";
import InputField from "./components/InputField";
import InputFieldInt from "./components/InputFieldInt";

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
          <section class="flex flex-wrap justify-around items-center w-full">
            <div>
              <div class="md:w-96 w-80 mx-2 my-2">
                <div class="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex justify-between items-center">
                    <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white text-right">
                      BALANCE HERE: $
                    </h3>
                    <button className="btn btn-primary">ADD</button>
                  </div>
                  <div
                    className="font-extrabold mt-4 border-b-2 mb-2 pb-2 border-indigo-600 flex flex-wrap justify-between items-center w-full
"
                  >
                    <p>💸 Income</p>
                    <p>🛍️ Expense</p>
                  </div>

                  <div
                    className="mt-1 mb-6 flex flex-wrap justify-between items-center w-full
"
                  >
                    <p class=" text-xl font-semibold text-emerald-400">
                      INCOME HERE
                    </p>
                    <p class=" text-xl font-semibold text-red-400">
                      EXPENSE HERE
                    </p>
                  </div>
                  <div class="flex justify-between items-center mb- mt-2">
                    <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                      History
                    </h3>
                  </div>
                  <input
                    type="text"
                    placeholder="Search..."
                    class="input input-bordered input-sm w-full mt-4"
                  />
                  <ExpenseCard />
                  {/* {data?.map((expense, index) => {
                    return (
                      <ExpenseCard
                        expenseNameProps={expense.expenseName}
                        dateProps={expense.date}
                        totalMoneyProps={expense.totalMoney}
                        transactionProps={expense.transaction}
                        index={index}
                        expense={expense}
                        removeExpense={removeExpense}
                        balance={balance}
                      />
                    );
                  })} */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Expense;
