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

export function detailsLoading(loading) {
  return {
    type: types.DETAILS_LOADING,
    loading,
  };
}

export function detailsErrored(error) {
  return {
    type: types.DETAILS_ERR,
    error,
  };
}

export function detailsSuccess(details) {
  return {
    type: types.DETAILS_SUCCESS,
    details,
  };
}

export function fetchPokemonDetails(id) {
  return (dispatch) => {
    dispatch(detailsLoading(true));

    fetch(`http://pokeapi.salestock.net/api/v2/pokemon/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        dispatch(detailsLoading(false));
        return res.json();
      })
      .then((data) => {
        dispatch(detailsSuccess(data));
      })
      .catch(() => dispatch(detailsErrored(true)));
  };
}
