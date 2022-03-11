import React, { useState } from 'react';
import './App.css';
// components
import Container from './components/Container';

function App() {
  const [incomeSources, setIncomeSources] = useState([]);
  const [expenses, setExpenses] = useState([]);

  return (
    <div className="App">
      <Container type="income" sources={incomeSources} setSources={setIncomeSources} />
      <Container type="expenses" sources={expenses} setSources={setExpenses} />
    </div>
  );
}

export default App;
