import * as types from '../actions/types';

export function selected(state = null, action) {
  switch (action.type) {
  case types.SET_SELECTED:
    return action.index;

  case types.CLEAR_SELECTED:
    return null;

  default: return state;
  }
}

export function detailsErrored(state = false, action) {
  switch (action.type) {
  case types.DETAILS_ERR:
    return action.error;

  default: return state;
  }
}

export function detailsLoading(state = false, action) {
  switch (action.type) {
  case types.DETAILS_LOADING:
    return action.loading;

  default: return state;
  }
}

export function details(state = null, action) {
  switch (action.type) {
  case types.DETAILS_SUCCESS:
    return action.details;

  case types.CLEAR_SELECTED:
    return null;

  default: return state;
  }
}
