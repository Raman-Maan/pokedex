import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Modal } from 'reactstrap';
import { fetchPokemon, setSelected, clearSelected } from '../actions';

import PokemonCard from '../components/PokemonCard';
import PokemonDetails from '../components/PokemonDetails';

import './Pokedex.css';

class Pokedex extends Component {
  constructor(props) {
    super(props);

    this.props.fetchPokemon(151);
  }

  render() {
    const { pokemon, selected } = this.props;

    const popup = selected !== null ? (
      <Modal isOpen toggle={() => this.props.deselectPokemon()}>
        <PokemonDetails {...pokemon[selected]} />
      </Modal>
    ) : '';

    return (
      <div className="Pokedex">
        {popup}
        <Container>
          <ul>
            {pokemon.map((x, i) => (
              <PokemonCard key={x.id} onClick={() => this.props.selectPokemon(i)} {...x} />
            ))}
          </ul>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemon: state.pokemon,
  error: state.pokemonErrored,
  loading: state.pokemonLoading,
  selected: state.selected,
});

const mapDispatchToProps = dispatch => ({
  fetchPokemon: amount => dispatch(fetchPokemon(amount)),
  selectPokemon: id => dispatch(setSelected(id)),
  deselectPokemon: () => dispatch(clearSelected()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
