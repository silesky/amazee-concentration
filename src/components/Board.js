import React, { Component } from 'react';
import { Card } from './Card.js';
import { generateCardArray } from './../util/Util';
class Board extends Component {
   constructor(props) {
   super(props)
   const generateColor =
   this.state = {
      cards: generateCardArray()
    }
  }
  render() {
    console.log(this.state);
    return (
      <div>
      <h1>Concentration</h1>
      <div className="board--container">
        {
          this.state.cards.map(({color, value, id}, index) => {
            return (
            <Card

              key={index}
              color={color}
              value={value}
              id={id}
            />
          )
        })
      }
    </div>
   </div>

    );
  }
}

export default Board;
