import * as types from './types';

export function fetchErrored(bool) {
  return {
    type: types.FETCH_ERR,
    error: bool,
  };
}

export function fetchLoading(bool) {
  return {
    type: types.FETCH_LOADING,
    loading: bool,
  };
}

export function fetchSuccess(data) {
  return {
    type: types.FETCH_SUCCESS,
    pokemon: data,
  };
}

export function fetchPokemon() {
  return (dispatch) => {
    dispatch(fetchLoading(true));

    fetch('http://pokeapi.salestock.net/api/v2/pokemon')
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }

        dispatch(fetchLoading(false));
        return res.json();
      })
      .then(data => dispatch(fetchSuccess(data.results)))
      .catch(() => dispatch(fetchErrored(true)));
  };
}
