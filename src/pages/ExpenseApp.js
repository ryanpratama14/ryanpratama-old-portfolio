import { React, useEffect, useState } from "react";
import ExpenseCard from "./ExpenseCard";
import toast, { Toaster } from "react-hot-toast";

const Expense = () => {
  useEffect(() => {
    document.title = "#5: Financial Tracker App";
  }, []);

  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [date, setDate] = useState();
  const [type, setType] = useState("EXPENSE");
  const [data, setData] = useState([
    {
      amount: 2210,
      desc: "Ticket to Tokyo",
      date: "2023-01-01",
      type: "EXPENSE",
    },
    {
      amount: 5020,
      desc: "Monthly salary",
      date: "2023-02-01",
      type: "INCOME",
    },
    {
      amount: 290,
      desc: "Holiday gifts",
      date: "2023-03-01",
      type: "EXPENSE",
    },
    {
      amount: 140,
      desc: "Utilities",
      date: "2023-04-01",
      type: "EXPENSE",
    },
  ]);
  const [isAddTxnVisible, toggleAddTXn] = useState(false);
  const [expense, updateExpense] = useState(0);
  const [income, updateIncome] = useState(0);

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    data.map((payload) =>
      payload.type === "EXPENSE"
        ? (exp = exp + payload.amount)
        : (inc = inc + payload.amount)
    );
    updateExpense(exp);
    updateIncome(inc);
  };
  useEffect(() => calculateBalance(), [data]);

  const removeExpense = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div className="ceo font-mono ">
      <Toaster />
      <section class=" text-white reviews" id="ceo">
        <div class="px-8 py-12 sm:px-6  lg:px-8">
          <div class="mx-auto max-w-xl text-center mb-12">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
              Welcome to
              <br />
              <span class="text-blue-300">Financial </span>
              <span class="text-red-300">Tracker </span>App!
            </h2>
          </div>
          <section class="flex flex-wrap justify-around items-center w-full">
            <div>
              <div class="md:w-96 w-80 mx-2 my-2 mb-16">
                <div class="p-4 max-w-md rounded-lg border shadow-md sm:p-8 bg-gray-800 border-gray-600">
                  <div class="flex justify-between items-center">
                    <h3 class="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-blue-200 to-white tracking-tighter">
                      BALANCE
                      <br />${income - expense}
                    </h3>

                    <button
                      className="btn btn-primary"
                      onClick={() => toggleAddTXn((isVisible) => !isVisible)}
                    >
                      {isAddTxnVisible ? "CANCEL" : "ADD"}
                    </button>
                  </div>
                  {isAddTxnVisible && (
                    <div class="text-center text-black dark:text-white w-full items-center">
                      <div class="mt-4">
                        <label class="block mb-2 text-m font-medium text-left text-white dark:text-white">
                          Amount
                        </label>
                        <input
                          required
                          type="number"
                          placeholder="$3450"
                          className="input input-bordered w-full"
                          onChange={(e) => {
                            setAmount(parseInt(e.target.value));
                          }}
                        />
                      </div>
                      <div class="mt-4">
                        <label class="block mb-2 text-m font-medium text-left text-white dark:text-white">
                          Date
                        </label>
                        <input
                          required
                          type="date"
                          placeholder="12/12/2023"
                          className="input input-bordered w-full"
                          onChange={(e) => {
                            setDate(e.target.value);
                          }}
                        />
                      </div>
                      <div class="mt-4">
                        <label class="block mb-2 text-m font-medium text-left text-white dark:text-white">
                          Description
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="BTS Concert"
                          className="input input-bordered w-full"
                          onChange={(e) => {
                            setDesc(e.target.value);
                          }}
                        />
                      </div>
                      <div class="flex justify-center items-center mt-4">
                        <input
                          type="radio"
                          id="expense"
                          name="type"
                          value="EXPENSE"
                          className="radio radio-error mx-2 "
                          checked={type === "EXPENSE"}
                          onChange={(e) => {
                            setType(e.target.value);
                          }}
                        />
                        <label htmlFor="expense" class="text-white">
                          Expense
                        </label>
                        <input
                          type="radio"
                          id="income"
                          name="type"
                          value="INCOME"
                          className="radio radio-success mx-2"
                          checked={type === "INCOME"}
                          onChange={(e) => {
                            setType(e.target.value);
                          }}
                        />
                        <label htmlFor="Expense" class="text-white">
                          Income
                        </label>
                      </div>
                      <button
                        class="btn btn-primary mt-4"
                        onClick={() => {
                          if (
                            (desc.length > 0 &&
                              date.length > 0 &&
                              amount > 0 &&
                              type === "EXPENSE") ||
                            type === "INCOME"
                          ) {
                            setData([...data, { amount, desc, date, type }]);
                            toast.success("Added");
                            toggleAddTXn(false);
                            setAmount(0);
                            setDesc("");
                            setDate("");
                          } else {
                            toast.error(
                              "Something went wrong, please try again"
                            );
                          }
                        }}
                      >
                        ADD TRANSACTION
                      </button>
                    </div>
                  )}
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
                      +${income}
                    </p>
                    <p class=" text-xl font-semibold text-red-400">
                      -${expense}
                    </p>
                  </div>
                  <div class="flex justify-between items-center mt-2">
                    <h3 class="text-xl font-bold leading-none text-white dark:text-white">
                      History
                    </h3>
                  </div>
                  {/* <input
                    placeholder="Search..."
                    class="input input-bordered input-sm w-full mt-4"
                  /> */}
                  {data?.map((payload, index) => {
                    return (
                      <ExpenseCard
                        descProps={payload.desc}
                        amountProps={payload.amount}
                        dateProps={payload.date}
                        typeProps={payload.type}
                        index={index}
                        payload={payload}
                        removeExpense={removeExpense}
                      />
                    );
                  })}
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
