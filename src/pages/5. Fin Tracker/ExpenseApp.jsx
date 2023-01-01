import { React, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ExpenseCard from "./components/ExpenseCard";
import useLocalStrorage from "../LocalStorage";

const Expense = () => {
  useEffect(() => {
    document.title = "#5: Financial Tracker App";
  }, []);

  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [date, setDate] = useState();
  const [type, setType] = useState("EXPENSE");
  const [data, setData] = useLocalStrorage("financial-tracker", [
    {
      amount: 2210,
      desc: "The 1975 concert",
      date: "2023-01-01",
      type: "EXPENSE",
    },
    {
      amount: 5020,
      desc: "Salary",
      date: "2023-02-01",
      type: "INCOME",
    },
    {
      amount: 290,
      desc: "Holiday gifts",
      date: "2023-03-01",
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

  const [searchText, updateSearchText] = useState("");
  const [filteredTransaction, updateTxn] = useState(data);

  const filterData = (searchText) => {
    if (!searchText || !searchText.trim().length) {
      updateTxn(data);
      return;
    }
    let txn = [...data];
    txn = txn.filter((payload) =>
      payload.desc.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    updateTxn(txn);
  };

  useEffect(() => {
    filterData(searchText);
  }, [data]);

  return (
    <div className="-mt-[5rem] pt-32 font-mono from-primary to-base-200 text-primary-content bg-gradient-to-b">
      <Toaster />
      <section class="" id="ceo">
        <div class="px-8 py-12 sm:px-6  lg:px-8">
          <div class="mx-auto max-w-xl text-center mb-12">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
              Welcome to
              <br />
              <span class="text-base-content">Financial </span>
              <span class="text-base-content">Tracker </span>App!
            </h2>
          </div>
          <section class="flex flex-wrap justify-around items-center w-full">
            <div>
              <div class="md:w-96 w-80 mx-2 my-2 mb-16">
                <div class="p-4 max-w-md rounded-lg  shadow-2xl sm:p-8 bg-base-100">
                  <div class="flex justify-between items-center">
                    <h3 class="font-extrabold  text-2xl text-base-content tracking-tighter">
                      BALANCE
                      <br />
                      {income - expense} USD
                    </h3>

                    <button
                      className="btn btn-secondary"
                      onClick={() => toggleAddTXn((isVisible) => !isVisible)}
                    >
                      {isAddTxnVisible ? "CANCEL" : "ADD"}
                    </button>
                  </div>
                  {isAddTxnVisible && (
                    <div class="text-center w-full items-center">
                      <div class="mt-4">
                        <label class="block mb-2 text-m font-medium text-left text-base-content">
                          Amount
                        </label>
                        <input
                          required
                          type="number"
                          placeholder="$3450"
                          className="input input-bordered w-full text-base-content"
                          onChange={(e) => {
                            setAmount(parseInt(e.target.value));
                          }}
                        />
                      </div>
                      <div class="mt-4">
                        <label class="block mb-2 text-m font-medium text-left text-base-content">
                          Date
                        </label>
                        <input
                          required
                          type="date"
                          placeholder="12/12/2023"
                          className="input input-bordered w-full text-base-content"
                          onChange={(e) => {
                            setDate(e.target.value);
                          }}
                        />
                      </div>
                      <div class="mt-4">
                        <label class="block mb-2 text-m font-medium text-left text-base-content">
                          Description
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="BTS Concert"
                          className="input input-bordered w-full text-base-content"
                          onChange={(e) => {
                            setDesc(e.target.value);
                          }}
                        />
                      </div>
                      <div class="flex justify-center items-center mt-4 text-base-content">
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
                        <label htmlFor="expense">Expense</label>
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
                        <label htmlFor="Expense">Income</label>
                      </div>
                      <button
                        class="btn btn-secondary mt-4"
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
                            setDate("");
                            setDesc("");
                            setType("EXPENSE");
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
                    className="font-extrabold mt-4  pb-2  flex flex-wrap justify-between items-center w-full
 text-base-content"
                  >
                    <p>💸 Income</p>
                    <p>Expense 🛍️</p>
                  </div>

                  <div
                    className="mb-6 flex flex-wrap justify-between items-center w-full border-b-4  border-secondary-focus
"
                  >
                    <p class=" text-xl font-semibold text-success">${income}</p>
                    <p class=" text-xl font-semibold text-error">${expense}</p>
                  </div>
                  <div class="flex justify-end items-center mt-2">
                    <h3 class="text-xl font-bold leading-none text-base-content">
                      History
                    </h3>
                  </div>
                  <input
                    placeholder="Search transaction..."
                    class="input input-bordered border-base-content input-sm w-full mt-4 text-base-content"
                    onChange={(e) => {
                      updateSearchText(e.target.value);
                      filterData(e.target.value);
                    }}
                  />
                  {filteredTransaction?.map((payload, index) => (
                    <ExpenseCard
                      descProps={payload.desc}
                      amountProps={payload.amount}
                      dateProps={payload.date}
                      typeProps={payload.type}
                      index={index}
                      payload={payload}
                      removeExpense={removeExpense}
                    />
                  ))}
                  {/* {data?.map((payload, index) => {
                    console.log(index);
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
