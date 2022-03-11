import React, { useState, useEffect } from 'react';
import './App.css';
// components
import Container from './components/Container';
// icons
import { BiLineChart, BiLineChartDown } from 'react-icons/bi';

function App() {
  const [budget, setBudget] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    setBudget(totalIncome - totalExpenses);
  }, [totalIncome, totalExpenses]);

  return (
    <div className="App">
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

      <Container type="income" setTotal={setTotalIncome} />
      <Container type="expenses" setTotal={setTotalExpenses} />
    </div>
  );
}

export default App;
