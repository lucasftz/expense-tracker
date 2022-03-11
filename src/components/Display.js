import React, { useContext } from 'react';
// contexts
import { currencyContext } from '../contexts/CurrencyContext';
// icons
import { BiLineChart, BiLineChartDown } from 'react-icons/bi';

const Display = ({ budget }) => {
  const {currency} = useContext(currencyContext);

  return (
    <div className="display">
      <h2>
        {/* this is so it does not display Budget: $-123 for negative budgets */}
        Budget: {budget >= 0 ? `${currency}${budget}` : `-${currency}${budget.toString().substring(1)}`}
        <br />
        {budget >= 0 ?
        // display if budget is positive
        <>
          <BiLineChart className="green" />
          <BiLineChart className="green" />
          <BiLineChart className="green" />
        </> :
        // display is budget is negative
        <>
          <BiLineChartDown className="red" />
          <BiLineChartDown className="red" />
          <BiLineChartDown className="red" />
        </>}
      </h2>
    </div>
  );
};

export default Display