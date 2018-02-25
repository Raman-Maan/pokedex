import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input as BootstrapInput } from 'reactstrap';
import { updateSearch } from '../actions';

import './Input.css';

class Input extends Component {
  render() {
    const { updateSearch, ...rest } = this.props;
    return (
      <div className={`icon input ${this.props.color ? this.props.color : ''}`}>
        <i className="material-icons">{this.props.icon}</i>
        <BootstrapInput onChange={e => updateSearch(e.target.value)} {...rest} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateSearch: term => dispatch(updateSearch(term)),
});

export default connect(null, mapDispatchToProps)(Input);
