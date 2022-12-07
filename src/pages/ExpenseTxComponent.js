import React, { useEffect, useState } from "react";

const TransactionCell = (props) => {
  return (
    <div>
      {" "}
      <div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3">
              <p
                isExpense={props.payload?.type === "EXPENSE"}
                class="text-sm font-extrabold text-gray-900 truncate dark:text-white"
              >
                {props.payload?.desc}
              </p>
              <div class="flex items-center space-x-4 border-purple-600 border-b-2 mb-2 pb-2 mt-1">
                <div class="flex-1 min-w-0">
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    {props.payload?.date}
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  ${props.payload?.amount}
                </div>
              </div>
            </li>
          </ul>
          {/* <div class="flex justify-start items-center mt-2">
        <button
          class="btn w-12 h-12 border-transparent hover:border-transparent text-white font-extrabold rounded-lg text-sm  text-center bg-red-700 dark:bg-red-700 hover:bg-red-900 dark:hover:bg-red-900"
          onClick={() => {}}
        >
          DELETE
        </button>
      </div> */}
        </div>
      </div>
    </div>
  );
};

const TransactionsComponent = (props) => {
  const [searchText, updateSearchText] = useState("");
  const [filteredTransaction, updateTxn] = useState(props.transactions);

  const filterData = (searchText) => {
    if (!searchText || !searchText.trim().length) {
      updateTxn(props.transactions);
      return;
    }
    let txn = [...props.transactions];
    txn = txn.filter((payload) =>
      payload.desc.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    updateTxn(txn);
  };

  useEffect(() => {
    filterData(searchText);
  }, [props.transactions]);

  return (
    <div>
      <div>
        Transactions
        <input
          type="text"
          placeholder="Search..."
          class="input input-bordered input-sm w-full mt-4"
          onChange={(e) => {
            updateSearchText(e.target.value);
            filterData(e.target.value);
          }}
        />
        {filteredTransaction?.map((payload) => (
          <TransactionCell payload={payload} />
        ))}
      </div>
    </div>
  );
};
export default TransactionsComponent;
