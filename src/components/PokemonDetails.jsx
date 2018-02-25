import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemonDetails } from '../actions';

import './PokemonDetails.css';

class PokemonDetails extends Component {
  constructor(props) {
    super(props);

    this.props.getDetails(this.props.id);
  }

  render() {
    const {
      id, name, img, loading, error, details,
    } = this.props;

    if (loading) {
      return (
        <div className="PokemonDetails">
          <h5>{name}, {id}</h5>
          <img src={img} alt="" height="140" />
          <p>loading...</p>
        </div>
      );
    }

    return (
      <div className="PokemonDetails">
        <h5>{name}, {id}</h5>
        <img src={img} alt="" height="140" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  details: state.details,
  error: state.detailsErrored,
  loading: state.detailsLoading,
});

const mapDispatchToProps = dispatch => ({
  getDetails: id => dispatch(fetchPokemonDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);
