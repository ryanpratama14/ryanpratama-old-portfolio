import React from "react";
import ExpenseInput from "./ExpenseInput";

const ExpenseCard = ({
  placeholderValue,
  type,
  valueTyped,
  lengthMax,
  fieldProps,
}) => {
  return (
    <div>
      <div class="w-96 mx-2 my-2">
        <div class="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Latest spending
            </h3>
          </div>
          <div class="flow-root">
            <ul
              role="list"
              class="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li class="py-3">
                <div class="flex items-center space-x-4">
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                  <div class="flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                      alt="Neil image"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Neil Sims
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $320
                  </div>
                </div>
              </li>
            </ul>
            <div class="flex justify-start items-center mt-2">
              <button
                class="btn border-transparent hover:border-transparent text-white font-extrabold rounded-lg text-sm  text-center bg-red-700 dark:bg-red-700 hover:bg-red-900 dark:hover:bg-red-900"
                onClick={() => {}}
              >
                Delete
              </button>
            </div>
            <ExpenseInput />
            <ExpenseInput />
            <ExpenseInput />
            <ExpenseInput />
            <ExpenseInput />
            <div class="flex justify-center items-center mt-6">
              <button
                class="btn border-transparent hover:border-transparent text-white font-extrabold rounded-lg text-sm  text-center bg-indigo-700 dark:bg-indigo-700 hover:bg-indigo-900 dark:hover:bg-indigo-900"
                onClick={() => {}}
              >
                ADD TO LIST
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
