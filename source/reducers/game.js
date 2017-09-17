import { ACTIONS } from '../constants';

const initialState = {
  win: false,
  lose: false,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TRIGGER_WIN:
      return {
        ...state,
        win: action.win,
      };

    case ACTIONS.TRIGGER_LOSE:
      return {
        ...state,
        lose: action.lose,
      };

    default: return state;
  }
};

export default gameReducer;
