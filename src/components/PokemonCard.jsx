import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import './PokemonCard.css';

export default ({
  id, name, img, onClick,
}) => (
  <div className="poke-card" onClick={onClick}>
    <p className="id">{id}</p>
    <div className="image">
      <img src={img} alt="" />
    </div>
    <div className="name">
      <h5>{name}</h5>
    </div>
  </div>
);
