import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from 'reactstrap';

import Input from './Input';

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState(prev => (
      { isOpen: !prev.isOpen }
    ));
  }

  render() {
    return (
      <Navbar color="primary" className="navbar-expand-md navbar-dark">
        <NavbarBrand href="/">Pokédex</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <Input icon="search" color="primary" type="text" placeholder="Filter by name or ID" />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
