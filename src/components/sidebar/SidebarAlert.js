import React from 'react';
import {
  Alert
} from 'react-bootstrap';

const SidebarAlert = ({data}) => (
  <Alert bsStyle="warning">
    <h4>{data.title}</h4>
    <p>{data.text}</p>
  </Alert>
);

export default SidebarAlert;
