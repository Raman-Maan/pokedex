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

export function fetchPokemon(limit) {
  return (dispatch) => {
    dispatch(fetchLoading(true));

    fetch(`http://pokeapi.salestock.net/api/v2/pokemon?limit=${limit}`)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        dispatch(fetchLoading(false));
        return res.json();
      })
      .then((data) => {
        const pokemon = data.results.map((x, i) => ({ id: i + 1, img: `/sprites/${i + 1}.png`, ...x }));
        dispatch(fetchSuccess(pokemon));
      })
      .catch(() => dispatch(fetchErrored(true)));
  };
}
