import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge, Progress } from 'reactstrap';
import { fetchPokemonDetails } from '../actions';

import './PokemonDetails.css';

class PokemonDetails extends Component {
  constructor(props) {
    super(props);

    this.props.getDetails(this.props.id);
  }

  render() {
    const MAX_STAT = 200;
    const {
      id, name, img, loading, error, details,
    } = this.props;

    const detailsSection = (loading || !details) ? (
      <div className="details">
        <p>Loading...</p>
      </div>
    ) : (
      <div className="details">
        <div className="types">
          <h5>Types</h5>
          <ul>
            {details.types.map(x => (
              <Badge key={x.slot} color={x.type.name} pill>{x.type.name}</Badge>
            ))}
          </ul>
        </div>
        <div className="stats">
          <h5>Stats</h5>
          {details.stats.map((x, i) => (
            <div className="stat" key={i}>
              {x.stat.name.split('-').join(' ')}
              <Progress value={x.base_stat} color="info" max={MAX_STAT}>
                {x.base_stat}
              </Progress>
            </div>
          ))}
        </div>
      </div>
    );

    return (
      <div className="PokemonDetails">
        <header>
          <h5 className="name">{name}</h5>
          <p className="id">#{id}</p>
        </header>
        <div className="image">
          <img src={img} alt="" />
        </div>
        {detailsSection}
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
