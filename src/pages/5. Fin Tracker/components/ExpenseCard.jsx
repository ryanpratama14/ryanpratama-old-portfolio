import { React } from "react";
import toast from "react-hot-toast";

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
      <div className="flow-root mt-2">
        <ul className="divide-y divide-gray-700 dark:divide-gray-700">
          <li
            className="py-2
          "
          >
            <div className="flex justify-start items-center">
              <button
                title="Delete transaction"
                onClick={() => {
                  removeExpense(index);
                  toast.error("Deleted");
                }}
                className="btn-primary btn-ghost w-6 h-6  font-extrabold rounded-lg items-center"
              >
                ⛔️
              </button>
              <p className="ml-0.5  font-extrabold text-base-content truncate">
                {descProps}
              </p>
            </div>

            <div className="flex items-center space-x-4 border-secondary border-b-2">
              <div className="flex-1 min-w-0">
                <p className="pSmaller text-base-content truncate">
                  {dateProps}
                </p>
              </div>

              <p
                className={`${
                  payload.type === "EXPENSE" ? "text-error" : "text-success"
                } inline-flex items-center text-base font-semibold`}
              >
                {payload.type === "EXPENSE" ? "-" : "+"}${amountProps}
              </p>
            </div>
          </li>
        </ul>
        <div className="flex justify-start items-center"></div>
      </div>
    </div>
  );
};

export default ExpenseCard;
