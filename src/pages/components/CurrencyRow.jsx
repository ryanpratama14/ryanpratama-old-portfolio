import { React } from "react";

const CurrencyRow = (props) => {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
  } = props;
  return (
    <div class="my-4 flex justify-center items-center">
      <input
        type="number"
        className="input input-bordered"
        value={amount}
        onChange={onChangeAmount}
      />
      <select
        class="select ml-4"
        value={selectedCurrency}
        onChange={onChangeCurrency}
      >
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyRow;
