import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Modal } from 'reactstrap';
import { fetchPokemon, setSelected, clearSelected } from '../actions';

import PokemonCard from '../components/PokemonCard';

class Pokedex extends Component {
  constructor(props) {
    super(props);

    this.props.fetchPokemon(151);
  }

  render() {
    const { pokemon, selected } = this.props;

    const popup = selected !== null ? (
      <Modal isOpen toggle={() => this.props.deselectPokemon()}>
        <h1>Yo</h1>
      </Modal>
    ) : '';

    return (
      <div className="Pokedex">
        {popup}
        <Container>
          <h1>Hello</h1>
          {pokemon.map((x, i) => (
            <PokemonCard key={x.id} onClick={() => this.props.selectPokemon(i)} {...x} />
          ))}
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
