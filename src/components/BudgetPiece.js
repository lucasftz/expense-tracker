import React from 'react';

const BudgetPiece = ({ type, source, sources, setSources }) => {
  const handleChange = (e) => {
    // get a copy of this source
    const sourceCopy = {...source};
    // add what was typed to the copy
    sourceCopy.desc = e.target.value;
    // replace the original source with the copy
    setSources(sources.map(s => s.id === source.id ? sourceCopy : s));
  };

  return (
    // class of income-source or expenses-source
    <div className={`${type}-source`}>
      <h2>{source.value}</h2>
      <input value={source.desc} onChange={handleChange} />
    </div>
  );
};

export default BudgetPiece