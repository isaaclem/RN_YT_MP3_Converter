import { FIRST_TYPE } from '../actions/types';

const INITIAL_STATE = {
  someState: 'hola'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FIRST_TYPE:
      return { ...state, someState: 'overwriteInitial' };
    default:
      return state;
  }
};
