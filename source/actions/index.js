import { ACTIONS, WORDS } from '../constants';

const makeGuess = letter => ({
  type: ACTIONS.MAKE_GUESS,
  letter,
});

const makeWrongGuess = letter => ({
  type: ACTIONS.MAKE_WRONG_GUESS,
  letter,
});

const makeRightGuess = letter => ({
  type: ACTIONS.MAKE_RIGHT_GUESS,
  letter,
});

const getRandomWord = () => ({
  type: ACTIONS.GET_NEW_WORD,
  word: WORDS[Math.floor(Math.random() * (WORDS.length))],
});

export default null;
export {
  makeGuess,
  makeWrongGuess,
  makeRightGuess,
  getRandomWord,
};
