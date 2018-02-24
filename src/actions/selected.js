import * as types from './types';

export function setSelected(index) {
  return {
    type: types.SET_SELECTED,
    index,
  };
}

export function clearSelected() {
  return {
    type: types.CLEAR_SELECTED,
  };
}
