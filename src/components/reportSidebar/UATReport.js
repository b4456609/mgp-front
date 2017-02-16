import React from 'react';
import {
  Panel,
  ListGroup,
  ListGroupItem,
  Label,
  Glyphicon
} from 'react-bootstrap';

const UATReport = ({data}) => (
  <Panel collapsible defaultExpanded header="Full Report">
    <ListGroup>
      <h3>Scenario Report</h3>
      {
        data.map((item, i) => {
          let result = (
            <Label style={{ float: 'right' }} bsStyle="danger">
              {`${item.error} error`}
            </Label>);
          if (item.error === 0) {
            result = (
              <Label style={{ float: 'right' }} bsStyle="success">
                Pass
            </Label>);
          }
          return (
            <ListGroupItem key={i}>
              <Glyphicon style={{ color: 'grey' }} glyph="tasks" />
              {` ${item.name}`}
              {result}
            </ListGroupItem>
          )
        })
      }
    </ListGroup>
  </Panel>
);

export default UATReport;
