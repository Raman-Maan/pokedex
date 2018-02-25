import { combineReducers } from 'redux';

import { pokemon, pokemonErrored, pokemonLoading } from './pokemon';
import { selected, details, detailsErrored, detailsLoading } from './selected';

export default combineReducers({
  pokemon,
  pokemonErrored,
  pokemonLoading,

  selected,
  details,
  detailsErrored,
  detailsLoading,
});
