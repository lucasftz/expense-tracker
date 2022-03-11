import React, { useState } from 'react';
import './App.css';
// components
import Container from './components/Container';

function App() {
  const [incomeSources, setIncomeSources] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const addIncomeSource = () => {
    setIncomeSources([...incomeSources, {desc: "", value: 0, id: new Date().getTime()}]);
  };

  const addExpense = () => {
    setExpenses([...expenses, {desc: "", value: 0, id: new Date().getTime()}]);
  };

  return (
    <div className="App">
      <Container type="income" addSource={addIncomeSource} sources={incomeSources} />
      <Container type="expenses" addSource={addExpense} sources={expenses} />
    </div>
  );
}

export default App;
