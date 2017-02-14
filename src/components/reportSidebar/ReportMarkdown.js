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
          return (
            <ListGroupItem key={i} onClick={()=>{showReport('Report', item.report)}}>
              <Glyphicon style={{ color: 'grey' }} glyph="file" />
              {` ${item.provider}`}
              <Label style={{ float: 'right' }} bsStyle="danger">
                {`${item.error} error`}
              </Label>
            </ListGroupItem>
          )
        })
      }
    </ListGroup>
  </Panel>
);

export default Option;
