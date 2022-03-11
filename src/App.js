import React, { useState, useEffect } from 'react';
import './App.css';
// components
import Container from './components/Container';
import Display from './components/Display';
import CurrencySelector from './components/CurrencySelector';
// contexts
import { currencyContext } from './contexts/CurrencyContext';

function App() {
  const [budget, setBudget] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [currency, setCurrency] = useState('$');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setBudget(totalIncome - totalExpenses);
  }, [totalIncome, totalExpenses]);

  return <currencyContext.Provider value={{ currency, setCurrency }}>
    <div className="App">
      <Display budget={budget} />

      <Container type="income" setTotal={setTotalIncome} />
      <Container type="expenses" setTotal={setTotalExpenses} />

      <div className="currency-switch-container">
        <div className="currency-switch">
          <h3>Currency: <button onMouseOver={() => setShowModal(true)}>{currency}</button></h3>
        </div>
        {showModal && <CurrencySelector setShowModal={setShowModal} />}
      </div>
    </div>
  </currencyContext.Provider>;
}

export default App;
