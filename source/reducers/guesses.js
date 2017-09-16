import { ACTIONS } from '../constants';

const initialState = {
  total: [],
  wrong: [],
  right: [],
};

const guessesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.MAKE_GUESS:
      return {
        ...state,
        total: [
          ...state.total,
          action.letter,
        ],
      };

    case ACTIONS.MAKE_RIGHT_GUESS:
      return {
        ...state,
        right: [
          ...state.right,
          action.letter,
        ],
      };

    case ACTIONS.MAKE_WRONG_GUESS:
      return {
        ...state,
        wrong: [
          ...state.wrong,
          action.letter,
        ],
      };

    default: return state;
  }
};

export default guessesReducer;
