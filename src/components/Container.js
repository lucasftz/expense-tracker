import React, { useState, useEffect } from 'react';
// componenets
import TitleBar from './titlebar/TitleBar';
import Expense from './Expense';
// icons
import { FaPlus } from 'react-icons/fa';

const EarningsContainer = ({ type, setTotal }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    let sum = 0;
    expenses.forEach(expense => {
      // sum the expenses
      sum += +expense.value.substring(1);
    });
    setTotal(sum);
  }, [expenses]);

  const addExpense = () => {
    setExpenses([...expenses, {desc: "", value: "", id: new Date().getTime()}]);
  };

  const removeExpense = (id) => {
    setExpenses([...expenses].filter(expense => expense.id !== id));
  };

  return (
    <div>
      <TitleBar type={type} />

      <div className="container">
        {expenses.map(expense => {
          return <Expense
                  key={expense.id}
                  type={type}
                  expense={expense}
                  expenses={expenses}
                  setExpenses={setExpenses}
                  removeExpense={removeExpense}
                />
        })}
        <button onClick={addExpense}><FaPlus /></button>
      </div>
    </div>
  );
};

export default EarningsContainer