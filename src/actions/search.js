import * as types from './types';

export function updateSearch(filter) {
  return {
    type: types.UPDATE_SEARCH,
    filter,
  };
}
