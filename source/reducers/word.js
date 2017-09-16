import { ACTIONS } from '../constants';

const initialState = {
  current: '',
};

const wordReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_NEW_WORD:
      return {
        ...state,
        current: action.word,
      };

    default: return state;
  }
};

export default wordReducer;
