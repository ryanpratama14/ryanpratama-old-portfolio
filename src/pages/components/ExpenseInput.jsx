import React from "react";

const ExpenseInput = ({
  placeholderValue,
  type,
  valueTyped,
  lengthMax,
  fieldProps,
}) => {
  return (
    <div class="text-left text-black dark:text-white w-full items-center">
      <div class="mt-4">
        <label class="block mb-2 text-m font-medium text-left text-white dark:text-white">
          {fieldProps}
        </label>
        <input
          required
          maxLength={lengthMax}
          type={type}
          placeholder={placeholderValue}
          className="input input-bordered w-full text-center"
          onChange={(e) => {
            valueTyped(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default ExpenseInput;
