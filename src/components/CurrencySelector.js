import React from 'react';

const CurrencySelector = ({ setShowModal }) => {
  return (
    <div className="currency-selector" onMouseLeave={() => setShowModal(false)}>
      {/* stuff goes here */}
    </div>
  );
};

export default CurrencySelector