import React from 'react';

export const Card = ({color, value, onCardClick, visible}) => {
  // each card receieves a color and value prop
  const hiddenOrNot = visible ? 'hidden' : '';
  const bgColorClass = visible ? `${color}` : false;  // e.g. red = .red
  console.log('rendered!');
  return (
  <div onClick={() => onCardClick()} className={`card--container ${bgColorClass}`}>
    <span className="card--value">
      { visible ? value : false }
    </span>
  </div>
  )
}
