import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { makeGuess, makeRightGuess, makeWrongGuess } from '../actions';

const store = createStore(reducers, applyMiddleware(thunk));

const isValidLetter = (letter) => {
  if (!letter || typeof letter !== 'string') return false;
  if (letter.search(/[A-Z]/) < 0) return false;
  return true;
};

const isNewLetter = (letter, state) => {
  const guesses = state.guesses.total;
  if (guesses.find(guess => guess === letter)) return false;
  return true;
};

const isRightLetter = (letter, state) => {
  const word = state.word.current;
  if (word.indexOf(letter) >= 0) return true;
  return false;
};

window.addEventListener('keypress', (e) => {
  e.preventDefault();
  const letter = String(e.key).toUpperCase();
  if (!letter) return;
  const state = store.getState();
  if (!isValidLetter(letter) || !isNewLetter(letter, state)) return;
  store.dispatch(makeGuess(letter));
  store.dispatch(isRightLetter(letter, state) ? makeRightGuess(letter) : makeWrongGuess(letter));
});

export default store;
