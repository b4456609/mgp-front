import React from 'react';
import {
  Panel,
  ListGroup,
  ListGroupItem,
  Label,
  Glyphicon
} from 'react-bootstrap';

const Option = ({data, showReport}) => (
  <Panel collapsible defaultExpanded header="Full Report">
    <ListGroup>
      <h3>Provider Report</h3>
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
            <ListGroupItem key={i} onClick={() => { showReport('Report', item.report) }}>
              <Glyphicon style={{ color: 'grey' }} glyph="file" />
              {` ${item.provider}`}
              {result}
            </ListGroupItem>
          )
        })
      }
    </ListGroup>
  </Panel>
);

export default Option;
