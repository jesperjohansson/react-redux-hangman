import { combineReducers } from 'redux';
import wordReducer from './word';
import guessesReducer from './guesses';
import gameReducer from './game';

export default combineReducers({
  word: wordReducer,
  guesses: guessesReducer,
  game: gameReducer,
});
