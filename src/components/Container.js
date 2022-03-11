import React from 'react';
import TitleBar from './titlebar/TitleBar';
// icons
import { FaPlus } from 'react-icons/fa';

const EarningsContainer = () => {
  return <>
    <TitleBar />

    <div className="container">
      <button><FaPlus /></button>
    </div>
  </>;
};

export default EarningsContainer