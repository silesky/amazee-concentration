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
          this.state.cards.map(({color, value}) => {
            return (
            <Card
              color={color}
              value={value}
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
