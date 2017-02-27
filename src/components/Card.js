import React from 'react';

export const Card = ({color, value}) => {
  // each card receieves a color and value prop
  const bgColorClass = `.${color}`  // e.g. red = .red
  return (
  <div className={`card--container ${color}`}>
    <span className="card--value">
      { value }
    </span>
  </div>
  )
}
