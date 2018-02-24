import React from 'react';
import { Input } from 'reactstrap';

import './Input.css';

export default props => (
  <div className={`icon input ${props.color ? props.color : ''}`}>
    <i className="material-icons">{props.icon}</i>
    <Input {...props} />
  </div>
);
