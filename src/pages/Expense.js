import { React, useEffect, useState } from "react";
import ExpenseCard from "./components/ExpenseCard";
import InputField from "./components/InputField";
import InputFieldInt from "./components/InputFieldInt";

const Expense = () => {
  useEffect(() => {
    document.title = "#5: Expense Tracker App";
  }, []);
  const [expenseName, setExpenseName] = useState("");
  const [transaction, setTransaction] = useState();
  let [balance, setBalance] = useState(0);
  let [income, setIncome] = useState(0);
  let [expense, setExpense] = useState(0);
  const [date, setDate] = useState("");
  let [data, setData] = useState([
    {
      expenseName,
      transaction,
      date,
    },
  ]);

  const removeExpense = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

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
              <div class=" w-96 mx-2 my-2">
                <div class="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                  <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white mb-4 text-right">
                    Balance: {balance} USD
                  </h3>
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
                      +{income}
                    </p>
                    <p class=" text-xl font-semibold text-red-400">{expense}</p>
                  </div>
                  <div class="flex justify-end items-end mb- mt-2">
                    <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                      History
                    </h3>
                  </div>
                  {data?.map((expense, index) => {
                    return (
                      <ExpenseCard
                        expenseNameProps={expense.expenseName}
                        dateProps={expense.date}
                        totalMoneyProps={expense.totalMoney}
                        transactionProps={expense.transaction}
                        index={index}
                        expense={expense}
                        removeExpense={removeExpense}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
          <div class="flex flex-col justify-center items-center w-full text-left">
            <InputField
              fieldProps={"Income / Expense"}
              valueTyped={(e) => {
                setExpenseName(e);
              }}
              type="text"
              lengthMax={256}
              placeholderValue="BTS Concert"
            />

            <InputFieldInt
              fieldProps={"Amount (+ or -)"}
              valueTyped={(e) => {
                setTransaction(e);
              }}
              type="number"
              placeholderValue="-2490"
            />

            <InputField
              fieldProps={"Date"}
              valueTyped={(e) => {
                setDate(e);
              }}
              type="date"
            />
          </div>
          <div class="flex justify-center items-center mt-6">
            <button
              class="btn border-transparent hover:border-transparent text-white font-extrabold rounded-lg text-sm  text-center bg-indigo-700 dark:bg-indigo-700 hover:bg-indigo-900 dark:hover:bg-indigo-900"
              onClick={() => {
                if (
                  expenseName.length > 0 &&
                  transaction > 0 &&
                  date.length > 0
                ) {
                  setData([...data, { expenseName, transaction, date }]);
                  setBalance((balance += transaction));
                  setIncome((income += transaction));
                } else if (
                  expenseName.length > 0 &&
                  transaction < 0 &&
                  date.length > 0
                ) {
                  setData([...data, { expenseName, transaction, date }]);
                  setBalance((balance += transaction));
                  setExpense((expense += transaction));
                }
              }}
            >
              ADD TO LIST
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expense;
