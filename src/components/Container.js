import React, { useState, useEffect, useContext } from 'react';
// contexts
import { currencyContext } from '../contexts/CurrencyContext';
// componenets
import TitleBar from './titlebar/TitleBar';
import Expense from './Expense';
// icons
import { FaPlus } from 'react-icons/fa';

const EarningsContainer = ({ type, setTotal }) => {
  const [expenses, setExpenses] = useState([]);
  const {currency} = useContext(currencyContext);

  useEffect(() => {
    let sum = 0;
    expenses.forEach(expense => {
      // sum the expenses
      sum += +expense.value.substring(currency.length);
    });
    setTotal(sum);
  }, [expenses, currency.length, setTotal]);

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