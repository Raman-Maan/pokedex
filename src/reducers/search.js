import * as types from '../actions/types';

export function filter(state = null, action) {
  switch (action.type) {
  case types.UPDATE_SEARCH:
    return action.filter;

  default: return state;
  }
}
