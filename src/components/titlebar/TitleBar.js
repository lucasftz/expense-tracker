import React from 'react';
import './TitleBar.css';
// icons
import { FaSortAmountDown } from 'react-icons/fa';

const TitleBar = ({ type }) => {
  return (
    <div className="title-bar">
      <h1>{type}</h1>
      <button className="sort-button">
        <FaSortAmountDown style={{alignSelf: "center"}} size={30} />
      </button>
    </div>
  )
};

export default TitleBar