import { React } from "react";
import toast, { Toaster } from "react-hot-toast";

const ExpenseCard = ({
  descProps,
  dateProps,
  amountProps,
  payload,
  sign,
  removeExpense,
  index,
}) => {
  return (
    <div>
      <Toaster />
      <div class="flow-root mt-2">
        <ul role="list" class="divide-y divide-gray-700 dark:divide-gray-700">
          <li
            class="py-2
          "
          >
            <div class="flex justify-start items-center">
              <button
                onClick={() => {
                  removeExpense(index);
                  toast.error("Deleted");
                }}
                class="btn-primary bg-gray-700 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-900 w-6 h-6 text-s font-extrabold rounded-lg items-center"
              >
                ⛔️
              </button>
              <p class="ml-2 text-s font-extrabold text-white truncate dark:text-white">
                {descProps}
              </p>
            </div>

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
                {sign}${amountProps}
              </div>
            </div>
          </li>
        </ul>
        <div class="flex justify-start items-center"></div>
      </div>
    </div>
  );
};

export default ExpenseCard;
