import * as types from '../actions/types';

export function pokemonErrored(state = false, action) {
  switch (action.type) {
  case types.FETCH_ERR:
    return action.error;

  default: return state;
  }
}

export function pokemonLoading(state = false, action) {
  switch (action.type) {
  case types.FETCH_LOADING:
    return action.loading;

  default: return state;
  }
}

export function pokemon(state = [], action) {
  switch (action.type) {
  case types.FETCH_SUCCESS:
    return action.pokemon;

  default: return state;
  }
}
