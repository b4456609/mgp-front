import React from 'react';
import {
  Panel,
  ListGroup,
  ListGroupItem,
  Badge
} from 'react-bootstrap';

const Option = ({}) => (
  <Panel collapsible defaultExpanded header="Full Report">
    <ListGroup>
      <ListGroupItem href="#">Link 1</ListGroupItem>
      <ListGroupItem href="#">Link 2</ListGroupItem>
      <ListGroupItem href="#">Link 3</ListGroupItem>
    </ListGroup>
  </Panel>
);

export default Option;
