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
      <div class="flow-root mt-2">
        <ul class="divide-y divide-gray-700 dark:divide-gray-700">
          <li
            class="py-2
          "
          >
            <div class="flex justify-start items-center">
              <button
                title="Delete transaction"
                onClick={() => {
                  removeExpense(index);
                  toast.error("Deleted");
                }}
                class="btn-primary btn-ghost w-6 h-6 text-s font-extrabold rounded-lg items-center"
              >
                ⛔️
              </button>
              <p class="ml-0.5 text-s font-extrabold text-base-content truncate">
                {descProps}
              </p>
            </div>

            <div class="flex items-center space-x-4 border-secondary border-b-2">
              <div class="flex-1 min-w-0">
                <p class="text-sm text-base-content truncate">{dateProps}</p>
              </div>

              <div
                class={`${
                  payload.type === "EXPENSE" ? "text-error" : "text-success"
                } inline-flex items-center text-base font-semibold`}
              >
                {payload.type === "EXPENSE" ? "-" : "+"}${amountProps}
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
