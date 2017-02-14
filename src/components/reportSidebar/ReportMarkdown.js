import React from 'react';
import {
  Panel,
  ListGroup,
  ListGroupItem,
  Label,
  Glyphicon
} from 'react-bootstrap';

const Option = ({}) => (
  <Panel collapsible defaultExpanded header="Full Report">
    <ListGroup>
      <ListGroupItem href="#"><Glyphicon glyph="file" /> Link 1 </ListGroupItem>
      <ListGroupItem href="#">
        <Glyphicon style={{ color: 'grey' }} glyph="file" />
        {` Link 2`}
        <Label style={{ float: 'right' }} bsStyle="danger">2 error</Label>
      </ListGroupItem>
      <ListGroupItem href="#"><Glyphicon glyph="file" /> Link 3</ListGroupItem>
    </ListGroup>
  </Panel>
);

export default Option;
