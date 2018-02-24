import * as types from '../actions/types';

export default function selected(state = null, action) {
  switch (action.type) {
  case types.SET_SELECTED:
    return action.index;

  case types.CLEAR_SELECTED:
    return null;

  default: return state;
  }
}
