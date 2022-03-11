import React, { useState, useEffect } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map'
import currencyData from '../currencyData';

const CurrencySelector = ({ setShowModal }) => {
  const [lookup, setLookup] = useState('');

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
            <button>{getSymbolFromCurrency(currencyData[currency])}</button>
          );
        })}
      </div>
    </div>
  );
};

export default CurrencySelector