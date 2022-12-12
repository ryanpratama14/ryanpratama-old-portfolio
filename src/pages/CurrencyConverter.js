import { React, useState, useEffect, useMemo } from "react";
import CurrencyRow from "./components/CurrencyRow";

const CurrencyConverter = () => {
  useEffect(() => {
    document.title = "#6: Currency Converter";
  }, []);

  const BASE_URL =
    "https://v6.exchangerate-api.com/v6/ad9c5411887bbcc6b309b158/latest/USD";

  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.conversion_rates)[118];
        // console.log(firstCurrency.indexOf("RUB")); indexOf "RUB"
        setCurrencyOptions([
          data.base_code,
          ...Object.keys(data.conversion_rates),
        ]);
        setFromCurrency(data.base_code);
        setToCurrency(firstCurrency);
        setExchangeRate(data.conversion_rates[firstCurrency]);
      });
  }, []);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  useEffect(() => {
    if (fromCurrency != null && toCurrency !== null)
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.conversion_rates[toCurrency]));
  }, [fromCurrency, toCurrency]);
  // conversion_rates

  return (
    <div className="ceo font-mono ">
      <section class=" text-white reviews" id="ceo">
        <div class="px-8 py-12 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-xl text-center mb-12">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
              Currency Converter
              <br />
              <span class="text-blue-300">Check </span>
              <span class="text-white">real-time </span>
              <span class="text-red-300">exchange rates</span>
            </h2>
          </div>
          {/* WRITE HERE */}
          <div class="flex flex-col flex-wrap justify-center items-center w-full mt-32 mb-72">
            <CurrencyRow
              currencyOptions={currencyOptions}
              selectedCurrency={fromCurrency}
              onChangeCurrency={(e) => setFromCurrency(e.target.value)}
              onChangeAmount={handleFromAmountChange}
              amount={fromAmount}
            />
            <div class="mr-56">
              <h2 class="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white">
                equals
              </h2>
            </div>
            <CurrencyRow
              currencyOptions={currencyOptions}
              selectedCurrency={toCurrency}
              onChangeCurrency={(e) => setToCurrency(e.target.value)}
              onChangeAmount={handleToAmountChange}
              amount={toAmount}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurrencyConverter;
