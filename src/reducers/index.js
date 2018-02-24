import { combineReducers } from 'redux';

import { pokemon, pokemonErrored, pokemonLoading } from './pokemon';
import selected from './selected';

export default combineReducers({
  pokemon,
  pokemonErrored,
  pokemonLoading,

  selected,
});
