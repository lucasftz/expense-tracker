import React from 'react';
// icons
import { HiOutlineTrash } from 'react-icons/hi';

const BudgetPiece = ({ type, expense, expenses, setExpenses, removeExpense }) => {
  const handleDescChange = (e) => {
    // get a copy of this expense
    const expenseCopy = {...expense};
    // add what was typed to the copy
    expenseCopy.desc = e.target.value;
    // replace the original expense with the copy
    setExpenses(expenses.map(exp => exp.id === expense.id ? expenseCopy : exp));
  };

  const handleValueChange = (e) => {
    // find last character
    let lastChar = e.target.value.charAt(e.target.value.length-1);
    if (lastChar==='$' && e.target.value.length===1) lastChar=0
    // if last char is not numeric, do nothing (don't prepend it to desc)
    // prev line is to change the initial $ to a numeric char if it's the only char
    if (isNaN(+lastChar)) return;
    // get a copy of this expense
    const expenseCopy = {...expense};
    // add what was typed to the copy
    expenseCopy.value = e.target.value;
    // if there is no initial '$', prepend it
    if (expenseCopy.value[0] !== '$') expenseCopy.value = '$' + expenseCopy.value;
    // if there is only one char (which will be '$', delete it)
    if (expenseCopy.value.length === 1) expenseCopy.value = "";
    setExpenses(expenses.map(exp => exp.id === expense.id ? expenseCopy : exp));
  };

  return (
    // class of income-source or expenses-source
    <div className={`${type}-source`}>
      <div className="inputs">
        <input
          placeholder="$0"
          value={expense.value}
          onChange={handleValueChange}
          className="expense" />
        <input
          placeholder="Description"
          value={expense.desc}
          onChange={handleDescChange} />
      </div>
      <button onClick={() => removeExpense(expense.id)}>
        <HiOutlineTrash />
      </button>
    </div>
  );
};

export default BudgetPiece