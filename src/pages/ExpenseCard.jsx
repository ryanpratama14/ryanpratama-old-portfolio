import { useEffect, useState, React } from "react";

const ExpenseCard = ({
  descProps,
  dateProps,
  amountProps,
  typeProps,
  payload,
  sign,
  props,
}) => {
  return (
    <div>
      <div class="flow-root mt-2">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          <li class="py-3">
            <p class="text-s font-extrabold text-gray-900 truncate dark:text-white">
              {descProps}
            </p>

            <div class="flex items-center space-x-4 border-white border-b-2">
              <div class="flex-1 min-w-0">
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {dateProps}
                </p>
              </div>
              <div
                style={{
                  color: payload.type === "EXPENSE" ? "#f87171" : "#34d399",
                }}
                class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              >
                ${amountProps}
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
