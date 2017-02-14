import React from 'react';
import {
  Panel,
  ListGroup,
  ListGroupItem,
  Badge,
  Pager,
} from 'react-bootstrap';
import moment from 'moment';

const Option = ({}) => (
  <Panel collapsible defaultExpanded header="Test Information">
    <ListGroup>
      <ListGroupItem href="#" active>{moment().format('lll')}<Badge pill>Service Test</Badge></ListGroupItem>
      <ListGroupItem href="#">{moment().format('lll')}<Badge pill>UAT</Badge></ListGroupItem>
      <ListGroupItem href="#">{moment().format('lll')}</ListGroupItem>
      <ListGroupItem href="#">{moment().format('lll')}<Badge pill>UAT</Badge></ListGroupItem>
      <ListGroupItem href="#">{moment().format('lll')}</ListGroupItem>
    </ListGroup>
    <Pager>
      <Pager.Item previous href="#">&larr; Newer</Pager.Item>
      <Pager.Item next href="#">Older &rarr;</Pager.Item>
    </Pager>
  </Panel>
);

export default Option;
