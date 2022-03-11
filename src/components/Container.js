import React, { useState, useEffect } from 'react';
// componenets
import TitleBar from './titlebar/TitleBar';
import BudgetPiece from './BudgetPiece';
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

  return (
    <div>
      <TitleBar type={type} />

      <div className="container">
        {expenses.map(expense => {
          return <BudgetPiece
                  key={expense.id}
                  type={type}
                  expense={expense}
                  expenses={expenses}
                  setExpenses={setExpenses}
                />
        })}
        <button onClick={addExpense}><FaPlus /></button>
      </div>
    </div>
  );
};

export default EarningsContainer