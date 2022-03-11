import React from 'react';

const BudgetPiece = ({ type, expense, expenses, setExpenses }) => {
  const handleChange = (e) => {
    // get a copy of this expense
    const expenseCopy = {...expense};
    // add what was typed to the copy
    expenseCopy.desc = e.target.value;
    // replace the original expense with the copy
    setExpenses(expenses.map(exp => exp.id === expense.id ? expenseCopy : exp));
  };

  return (
    // class of income-source or expenses-source
    <div className={`${type}-source`}>
      <h2>{expense.value}</h2>
      <input value={expense.desc} onChange={handleChange} />
    </div>
  );
};

export default BudgetPiece