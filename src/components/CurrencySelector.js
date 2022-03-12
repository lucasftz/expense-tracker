import React, { useState, useContext } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map'
import currencyData from '../currencyData';
// contexts
import { currencyContext } from '../contexts/CurrencyContext';

const CurrencySelector = ({ setShowModal }) => {
  const [lookup, setLookup] = useState('');
  const {setCurrency} = useContext(currencyContext);

  const switchCurrency = (currency) => {
    const newCurrency = getSymbolFromCurrency(currencyData[currency]);
    setCurrency(newCurrency);
  };

  return (
    <div className="currency-selector" onMouseLeave={() => setShowModal(false)}>
      <input
        className="lookup"
        value={lookup}
        onChange={e => setLookup(e.target.value)} />
      <div className="currencies-grid">
        {Object.keys(currencyData).map(currency => {
          return (
            getSymbolFromCurrency(currencyData[currency])!==undefined &&
            <button
              key={Object.keys(currencyData).indexOf(currency)}
              onClick={() => switchCurrency(currency)}
            >
              {getSymbolFromCurrency(currencyData[currency])}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CurrencySelector