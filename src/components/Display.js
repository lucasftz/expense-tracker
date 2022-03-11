import React from 'react';
// icons
import { BiLineChart, BiLineChartDown } from 'react-icons/bi';

const Display = ({ budget }) => {
  return (
    <div className="display">
      <h2>
        {/* this is so it does not display Budget: $-123 for negative budgets */}
        Budget: {budget >= 0 ? `$${budget}` : `-$${budget.toString().substring(1)}`}
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