import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Modal } from 'reactstrap';
import { fetchPokemon, setSelected, clearSelected } from '../actions';

import PokemonCard from '../components/PokemonCard';
import PokemonDetails from './PokemonDetails';
import Loader from '../components/Loader';

import './Pokedex.css';

class Pokedex extends Component {
  constructor(props) {
    super(props);

    this.props.fetchPokemon(151);
    this.state = {
      pokemon: this.props.pokemon,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ pokemon: nextProps.pokemon });
  }

  render() {
    let { pokemon } = this.state;
    const {
      loading, error, selected, filter,
    } = this.props;

    const popup = selected !== null ? (
      <Modal isOpen toggle={() => this.props.deselectPokemon()}>
        <PokemonDetails {...pokemon[selected]} />
      </Modal>
    ) : '';

    if (error) {
      return (
        <h1>
          There was an error loading pokemon from the API
        </h1>
      );
    }

    if (loading) {
      return (
        <div className="load">
          <Loader />
        </div>
      );
    }

    if (filter) {
      const regex = new RegExp(filter, 'i');
      pokemon = pokemon.filter(x => x.name.match(regex) || x.id.toString().match(regex));
    }

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
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  fetchPokemon: amount => dispatch(fetchPokemon(amount)),
  selectPokemon: id => dispatch(setSelected(id)),
  deselectPokemon: () => dispatch(clearSelected()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
