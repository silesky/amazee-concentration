import React, { Component } from 'react'
import { Card } from './Card.js'
import { generateCardArray } from './../util/Util'

class Board extends Component {
  constructor (props) {
    super(props)
    this.setFinalVisibilityTrue = this.setFinalVisibilityTrue.bind(this)
    this.updateStatus = this.updateStatus.bind(this)
    this.state = {
       cards: generateCardArray(),
       status: null, // current round so we get some feedback
       roundOneSelection: { selectedId: null, selectedIndividualId: null },
       roundTwoSelection: { selectedId: null, selectedIndividualId: null }
     }
  }

  updateStatus (status) {
    (status === 'success')
        ? this.setState({ status: 'success' })
        : this.setState({ status: 'fail' })

    setTimeout(() => this.setState({ status: null }), 1200) // hide red and green indicator
  }
  setFinalVisibilityTrue (selectedIndividualId) { // status is true or false
    const newCards = this.state.cards.map((eachCard) => {
       if (eachCard.individualId === selectedIndividualId) {
          eachCard.visible = true
        }
       return eachCard
     })
    this.setState({ cards: newCards })
  }
  checkVisibility (sid, id) {
    const { roundOneSelection, roundTwoSelection } = this.state
    const cardIsPermVisible = this.state.cards.find((eachCard) => {
       return (eachCard.id === id && eachCard.visible === true)
     })

    const cardIsTemporarilyVisible = !!(roundOneSelection.selectedIndividualId === sid || roundTwoSelection.selectedIndividualId === sid)
    console.log('cardIsPermVisible', cardIsPermVisible, 'cardIsTemporarilyVisible', cardIsTemporarilyVisible)
    return cardIsPermVisible || cardIsTemporarilyVisible
  }
  clearSelection () {
    this.setState({ roundOneSelection: { selectedId: null, selectedIndividualId: null } })
    this.setState({ roundTwoSelection: { selectedId: null, selectedIndividualId: null } })
  }
  onCardClick (selectedId, selectedIndividualId) {
    const _isFirstRound = this.state.roundOneSelection.selectedIndividualId === null
    const _isFinalRound = this.state.roundOneSelection.selectedIndividualId !== null
    const _isMatch = this.state.roundOneSelection.selectedId === selectedId

    if (_isFirstRound) { // if first round
      this.setState({ roundOneSelection: { selectedId, selectedIndividualId } })// if first round
    } else if (_isFinalRound) {
      this.setState({ roundTwoSelection: { selectedId, selectedIndividualId } })
    }
    if (_isMatch && _isFinalRound) { // if we have a winnder
      this.setFinalVisibilityTrue(selectedIndividualId)
      this.updateStatus('success')
      setTimeout(() => this.clearSelection(), 1200)
    } else if (_isFinalRound) {
      this.updateStatus('fail')
      setTimeout(() => this.clearSelection(), 1200)
    }
  }
  render () {
    const roundNum = this.state.roundOneSelection.selectedIndividualId === null ? 'select your first card' : 'select your second card'
    console.log(this.state)
    return (
      <div>
      <h1 className={this.state.status}>Concentration</h1>
      <h4>{this.state.status && this.state.status.toUpperCase()}</h4>
      <h4>{roundNum}</h4>
      <div className={`board--container`}>
        {
          this.state.cards.map(({ color, id, individualId, value, visible }, index) => {
            return (
            <Card
              visible={this.checkVisibility(individualId, id)}
              onCardClick={this.onCardClick.bind(this, id, individualId)}
              key={index}
              individualId={individualId}
              color={color}
              value={value}
              id={id}
            />
            )
          })
      }
    </div>
    </div>
    )
  }
}

export default Board
