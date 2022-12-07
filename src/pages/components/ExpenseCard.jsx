import React from "react";

const ExpenseCard = ({ transactionProps, dateProps, expenseNameProps }) => {
  return (
    <div>
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          <li class="py-3">
            <div class="flex items-center space-x-4">
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {expenseNameProps}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {dateProps}
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                ${transactionProps}
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
  );
};

export default ExpenseCard;
