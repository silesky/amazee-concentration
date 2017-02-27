import React, { Component } from 'react';
import { Card } from './Card.js';
class Board extends Component {
  render() {
    return (
      <div>
      <h1>Concentration</h1>
        <Card
          color="red"
          value={5}
        />
      </div>

    );
  }
}

export default Board;
