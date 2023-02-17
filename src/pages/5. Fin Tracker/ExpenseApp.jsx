import { React, useEffect, useState } from "react";
import toast from "react-hot-toast";
import ExpenseCard from "./components/ExpenseCard";
import useLocalStrorage from "../LocalStorage";
import { Helmet } from "react-helmet";

const Expense = ({ title }) => {
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
    <section id="financial-tracker-app" className="styleIt">
      <Helmet>
        <title>{title}</title>
      </Helmet>

      {/* TITLE */}
      <div className="titleIt">
        <h1>
          Welcome to
          <br />
          Financial Tracker App!
        </h1>
      </div>

      {/* THE CARD */}
      <div className="w-full flex justify-center">
        <div className="w-full sm:w-[25rem]">
          <div className="p-6 rounded-lg shadow-2xl from-base-100 via-base-200 to-base-300 bg-gradient-to-tl background-animation">
            <div className="flex justify-between items-center">
              <h3 className="font-extrabold  text-2xl text-base-content tracking-tight">
                BALANCE
                <br />
                {income - expense} USD
              </h3>

              <button
                className="btn btn-secondary-focus"
                onClick={() => toggleAddTXn((isVisible) => !isVisible)}
              >
                {isAddTxnVisible ? "CANCEL" : "ADD"}
              </button>
            </div>
            {isAddTxnVisible && (
              <div className="w-full text-center">
                <div className="mt-4">
                  <label className="block mb-2 text-m font-medium text-secondary-focus text-center">
                    Amount
                  </label>
                  <input
                    required
                    type="number"
                    placeholder="$3450"
                    className="input input-bordered w-56 text-base-content text-center"
                    onChange={(e) => {
                      setAmount(parseInt(e.target.value));
                    }}
                  />
                </div>
                <div className="mt-4">
                  <label className="block mb-2 text-m font-medium text-secondary-focus text-center">
                    Date
                  </label>
                  <input
                    required
                    type="date"
                    placeholder="12/12/2023"
                    className="input input-bordered w-56 text-base-content text-center"
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  />
                </div>
                <div className="mt-4">
                  <label className="block mb-2 text-m font-medium text-secondary-focus text-center">
                    Description
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="BTS Concert"
                    className="input input-bordered w-56 text-base-content text-center"
                    onChange={(e) => {
                      setDesc(e.target.value);
                    }}
                  />
                </div>
                <div className="flex justify-center items-center mt-4 text-base-content">
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
                  className="btn btn-secondary-focus mt-4 w-56"
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
                      toast.error("Something went wrong, please try again");
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
              <p className=" text-xl font-semibold text-success">${income}</p>
              <p className=" text-xl font-semibold text-error">${expense}</p>
            </div>
            <div className="flex justify-end items-center mt-2">
              <h3 className="text-xl font-bold leading-none text-base-content">
                History
              </h3>
            </div>
            <input
              placeholder="Search transaction..."
              className="input input-bordered border-base-content input-sm w-full mt-4 text-base-content"
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
  );
};

export default Expense;
