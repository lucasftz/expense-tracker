import React from 'react';
import './App.css';
// components
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <Container type="income" />
      <Container type="expenses" />
    </div>
  );
}

export default App;
