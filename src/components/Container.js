import React, { useEffect } from 'react';
// componenets
import TitleBar from './titlebar/TitleBar';
import BudgetPiece from './BudgetPiece';
// icons
import { FaPlus } from 'react-icons/fa';

const EarningsContainer = ({ type, sources, setSources }) => {
  const addSource = () => {
    setSources([...sources, {desc: "", value: 0, id: new Date().getTime()}]);
  };

  return (
    <div>
      <TitleBar type={type} />

      <div className="container">
        {sources.map(source => {
          return <BudgetPiece
                  key={source.id}
                  type={type}
                  source={source}
                  sources={sources}
                  setSources={setSources}
                />
        })}
        <button onClick={addSource}><FaPlus /></button>
      </div>
    </div>
  );
};

export default EarningsContainer