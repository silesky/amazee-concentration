import React from 'react';

export const Card = ({color, value, onCardClick}) => {
  // each card receieves a color and value prop
  const bgColorClass = `.${color}`  // e.g. red = .red
  console.log('rendered!');
  return (
  <div onClick={() => onCardClick()} className={`card--container ${color}`}>
    <span className="card--value">
      { value }
    </span>
  </div>
  )
}
