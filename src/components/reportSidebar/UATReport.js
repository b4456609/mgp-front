import React from 'react';
import {
  Panel,
  ListGroup,
  ListGroupItem,
  Label,
  Glyphicon,
  Button
} from 'react-bootstrap';
import {getCucumberReportURL} from '../../api/bdd'

const UATReport = ({data, timestamp}) => (
  <Panel collapsible defaultExpanded header="UAT Report">
    <h3>Scenario Report</h3>
    <ListGroup>
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
    <Button target="_blank" href={getCucumberReportURL(timestamp)} bsStyle="primary" bsSize="large">Full Report</Button>
  </Panel>
);

export default UATReport;
