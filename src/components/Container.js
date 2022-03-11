import React, { useState } from 'react';
// componenets
import TitleBar from './titlebar/TitleBar';
import BudgetPiece from './BudgetPiece';
// icons
import { FaPlus } from 'react-icons/fa';

const EarningsContainer = ({ type }) => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    setExpenses([...expenses, {desc: "", value: 0, id: new Date().getTime()}]);
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