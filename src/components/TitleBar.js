import React from 'react';
// icons
import { FaSortAmountDown } from 'react-icons/fa';

const TitleBar = () => {
  return (
    <div className="title-bar">
      <h1>Hello world!</h1>
      <button className="sort-button">
        <FaSortAmountDown style={{alignSelf: "center"}} size={30} />
      </button>
    </div>
  )
};

export default TitleBar