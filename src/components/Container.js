import React from 'react';
import TitleBar from './titlebar/TitleBar';
// icons
import { FaPlus } from 'react-icons/fa';

const EarningsContainer = ({ type, addSource, sources }) => {
  return (
    <div>
      <TitleBar type={type} />

      <div className="container">
        <button onClick={addSource}><FaPlus /></button>
      </div>
    </div>
  );
};

export default EarningsContainer