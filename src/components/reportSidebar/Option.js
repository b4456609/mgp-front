import React from 'react';
import {
  Panel,
  Nav,
  NavItem,
  ListGroup,
  ListGroupItem,
  Badge
} from 'react-bootstrap';
import moment from 'moment';

const Option = ({}) => (
  <Panel collapsible defaultExpanded header="Test Information">
    <ListGroup>
      <ListGroupItem href="#" active>{moment().format('lll')}<Badge pill>Service Test</Badge></ListGroupItem>
      <ListGroupItem href="#">Link 2<Badge pill>UAT</Badge></ListGroupItem>
      <ListGroupItem href="#" disabled>Link 3</ListGroupItem>
    </ListGroup>
  </Panel>
);

export default Option;
