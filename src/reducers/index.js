import { combineReducers } from 'redux';

import { pokemon, pokemonErrored, pokemonLoading } from './pokemon';
import { selected, details, detailsErrored, detailsLoading } from './selected';
import { filter } from './search';

export default combineReducers({
  pokemon,
  pokemonErrored,
  pokemonLoading,

  selected,
  details,
  detailsErrored,
  detailsLoading,

  filter,
});
