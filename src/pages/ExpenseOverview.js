import React, { useEffect, useState } from "react";

const AddTransactionView = (props) => {
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState("EXPENSE");

  return (
    <div class="flex flex-col justify-cen ter items-center w-full text-left">
      <div class="text-center text-black dark:text-white w-full items-center md:w-96 lg:w-96 xl:w-96 2xl:w-96">
        <div class="mt-4 " isAddTxnVisible={props.isAddTxnVisible}>
          <input
            placeholder="Amount"
            className="input input-bordered w-64"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            placeholder="Description"
            className="input input-bordered w-64"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <div class="mt-4 flex justify-center">
            <input
              type="radio"
              id="expense"
              name="type"
              class="radio radio-success"
              value="EXPENSE"
              checked={type === "EXPENSE"}
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor="expense">Expense</label>
            <input
              type="radio"
              id="income"
              name="type"
              class="radio radio-success"
              value="INCOME"
              checked={type === "INCOME"}
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor="Expense">Income</label>
          </div>

          <button
            onClick={() =>
              props.addTransaction({
                id: Date.now(),
                amount: Number(amount),
                desc,
                type,
              })
            }
            class="w-32 btn border-transparent mt-4 hover:border-transparent text-white font-extrabold rounded-lg text-sm  text-center bg-indigo-700 dark:bg-indigo-700 hover:bg-indigo-900 dark:hover:bg-indigo-900"
          >
            Add Transaction
          </button>
        </div>
      </div>
    </div>
  );
};

const OverViewComponent = (props) => {
  const [isAddTxnVisible, toggleAddTXn] = useState(false);
  return (
    <div>
      <div className="ceo font-mono">
        <section class=" text-white reviews" id="ceo">
          <div class="px-8 py-12 sm:px-6  lg :px-8">
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
                <div class="w-96 my-2">
                  <div class="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="mb-2 flex flex-wrap justify-between items-center w-full">
                      <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white ">
                        BALANCE: ${props.income - props.expense}
                      </h3>
                      <button
                        onClick={() => toggleAddTXn((isVisible) => !isVisible)}
                        class="btn border-transparent hover:border-transparent text-white font-extrabold rounded-lg text-sm  text-center bg-indigo-700 dark:bg-indigo-700 hover:bg-indigo-900 dark:hover:bg-indigo-900"
                      >
                        {isAddTxnVisible ? "Cancel" : "ADD"}
                      </button>
                    </div>
                    {isAddTxnVisible && (
                      <AddTransactionView
                        isAddTxnVisible={isAddTxnVisible}
                        addTransaction={(payload) => {
                          props.addTransaction(payload);
                          toggleAddTXn((isVisible) => !isVisible);
                        }}
                      />
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
                      <div
                        isIncome={true}
                        class=" text-xl font-semibold text-emerald-400"
                      >
                        INI INCOME{props.income}
                      </div>
                      <div class=" text-xl font-semibold text-red-400">
                        INI EXPENSE{props.expense}
                      </div>
                    </div>
                    <div class="flex justify-end items-end mb- mt-2">
                      <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                        History
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};
export default OverViewComponent;
