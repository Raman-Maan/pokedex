import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon, setSelected, clearSelected } from '../actions';
import { Container } from 'reactstrap';

class Main extends Component {
  constructor(props) {
    super(props);

    this.props.fetchPokemon();
  }
  render() {
    const { pokemon, select } = this.props;
    return (
      <div className="Main">
        <Container>
          <h1>Hello</h1>
          {pokemon.map((x, i) => (
            <div key={i}>
              {x.name}
            </div>
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
});

const mapDispatchToProps = dispatch => ({
  fetchPokemon: () => dispatch(fetchPokemon()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
