import React from 'react';

export default ({
  id, name, img,
}) => (
  <div>
    <h5>{name}, {id}</h5>
    <img src={img} alt="" height="140" />
  </div>
);
