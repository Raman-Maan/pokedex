import React from 'react';
import { Card } from 'reactstrap';

export default ({
 id, name, img, onClick 
}) => (
  <div onClick={onClick}>
    <h5>{name}, {id}</h5>
    <img src={img} alt="" height="140" />
  </div>
);
