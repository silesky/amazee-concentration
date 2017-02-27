import React from 'react';

export const Card = ({color, value, onCardClick, visible}) => {
  // each card receieves a color and value prop
  const hiddenOrNot = visible ? 'hidden' : '';
  const bgColor = visible ? `${color}` : false;  // e.g. red = .red
  console.log('rendered!');
  return (
  <div onClick={() => onCardClick()} style={{backgroundColor: bgColor}} className="card--container">
    <span className="card--value">
      { visible ? value : false }
    </span>
  </div>
  )
}
