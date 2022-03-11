import React, { useState, useEffect } from 'react';
import './App.css';
// components
import Container from './components/Container';
import Display from './components/Display';

function App() {
  const [budget, setBudget] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    setBudget(totalIncome - totalExpenses);
  }, [totalIncome, totalExpenses]);

  return (
    <div className="App">
      <Display budget={budget} />

      <Container type="income" setTotal={setTotalIncome} />
      <Container type="expenses" setTotal={setTotalExpenses} />
    </div>
  );
}

export default App;
