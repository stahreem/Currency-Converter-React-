import { useId } from "react";
import PropTypes from 'prop-types';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption,
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId();

  return (
    <div className='p-4 text-sm rounded-md bg-sky-700'>
      <div className='w-full'>
        <label htmlFor={amountInputId} className="block mb-2">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5 mb-2"
          id={amountInputId}
          type='number'
          placeholder='Amount'
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div>
        <p className="mb-2">Currency Option</p>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          className="outline-none bg-transparent py-1.5"
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
  currencyOption: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectCurrency: PropTypes.string,
  amountDisable: PropTypes.bool,
  currencyDisable: PropTypes.bool,
};

export default InputBox;
