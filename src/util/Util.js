import uuid from 'uuid';
const shuffle = (array) => {
    let rand, index = -1,
        length = array.length,
        result = Array(length);
    while (++index < length) {
        rand = Math.floor(Math.random() * (index + 1));
        result[index] = result[rand];
        result[rand] = array[index];
    }
    return result;
}
export const generateCardArray = (numOfCards = 52) => {
  const _actualCards = numOfCards / 2;
  // e.g. if 52 cards, will generate a random num between 1 and 26, if 25 cards, will generate a random num between 1 and 13
  const _getRandomNumber = () => Math.floor(Math.random() * (_actualCards + 1));

  const _getRandomColor = () => {
    const colorArr = ['red', 'green', 'blue']
    const index = Math.floor(Math.random() * 3) // random num bw 0 and 2
    return colorArr[index];
  }
  let _cardArr = [];
  for (let i = 0; i < _actualCards; i++) {
    const _cardObj = { color: _getRandomColor(), value: _getRandomNumber(), id: uuid() } // important to not that these are pairs of each uuid
    _cardArr.push(_cardObj)
  }
  const allCardsArr = _cardArr.concat(_cardArr);
  const shuffledArr = shuffle(allCardsArr)
  return shuffledArr;
}


// console.assert(typeof arr === 'array', 'should be an array')
// console.assert((arr ? arr.length === 51 : false), 'arr.length should be 52');
// console.assert(arr[0].color === ('red' || 'blue' || 'green'), 'a card should be red blue or green');
// xconsole.assert(typeof (arr[0].value) === 'number', 'each card should have a value property that is a number')
