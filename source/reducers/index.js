import { combineReducers } from 'redux';
import wordReducer from './word';
import guessesReducer from './guesses';

export default combineReducers({
  word: wordReducer,
  guesses: guessesReducer,
});
