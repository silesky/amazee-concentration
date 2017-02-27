import React, { Component } from 'react';
import { Card } from './Card.js';
import { generateCardArray } from './../util/Util';


class Board extends Component {
   constructor(props) {
   super(props)
   this.updateStatus = this.updateStatus.bind(this);
   this.state = {

      cards: generateCardArray(),
      status: null, // current round so we get some feedback
      roundOneSelection: null, // if we're contains the uuid of the first item. it will never store the second item.
      selectedId: null,
    }
   }

  updateStatus(status) {
      (status === 'success')
        ? this.setState({status: 'success'})
        : this.setState({status: 'fail'})

    setTimeout(() => this.setState({status: null}), 1200); // hide red and green indicator
  }
  onCardClick (selectedId, selectedKey) {
    console.log(selectedId, selectedKey);
    console.log('clicked!', this.state);
    const _isFinalRound = !!this.state.roundOneSelection;
    const _isMatch = (selectedId === this.state.roundOneSelection)

    this.setState({selectedId: selectedId})
    // grab the selected Id and make the cards cisible

    const _changeVisibility = (selectedKey, status) => {
      const newCards = this.state.cards.map(eachCard => {
       if (eachCard.key === selectedKey) {
          eachCard.visible = status;
       }
       return eachCard;
     });
     this.setState({cards: newCards});
    }
    _changeVisibility(selectedKey, true);
    if (!_isFinalRound) {
      this.setState({roundOneSelection: selectedId}) // if first round
    } else {
      this.setState({roundOneSelection: null});
    }
    if (_isMatch && _isFinalRound) { // if we have a winnder
      _changeVisibility(selectedId, true);
      this.updateStatus('success');
    } else if (_isFinalRound) {
      this.updateStatus('fail');
    }

  }
  render() {
    const roundNum = !this.state.roundOneSelection ? 'select your first card' : 'select your second card'
    console.log(this.state);
    return (
      <div>
      <h1 className={this.state.status}>Concentration</h1>
      <h4>{`Current Round: ${roundNum}`}</h4>
      <div className={`board--container`}>
        {
          this.state.cards.map(({color, value, visible, id, key}, index) => {
            return (
            <Card
              visible={visible}
              onCardClick={this.onCardClick.bind(this, id, key)}
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
