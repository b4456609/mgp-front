import React from 'react';
import {
  Panel,
  ListGroup,
  ListGroupItem,
  Label,
  Glyphicon,
  Button,
  Tooltip,
  OverlayTrigger
} from 'react-bootstrap';
import { getCucumberReportURL } from '../../api/bdd'

function getStatus(error) {
  if (error === 0) {
    return (
      <Label style={{ float: 'right' }} bsStyle="success">
        Pass
      </Label>);
  }
  return (
    <Label style={{ float: 'right' }} bsStyle="danger">
      {`${error} error`}
    </Label>);
}

const tooltip = (
  <Tooltip id="tooltip">Click To View Report</Tooltip>
);

const UATReport = ({ data, timestamp }) => {
  let max = Math.max(...data.map(i => i.runNumber));
  let list = [];
  console.log(max, data)
  for (let j = 1; j <= max; j++) {
    let section = (
      <ListGroup key={j}>
        <OverlayTrigger placement="left" overlay={tooltip}>
          <ListGroupItem header={`Run Iteration ${j}`} target="_blank" href={`${getCucumberReportURL(timestamp)}/index/${j - 1}`} />
        </OverlayTrigger>
        {data
          .filter((item) => item.runNumber === j)
          .map((item, i) => {
            let result = getStatus(item.error)
            return (
              <ListGroupItem key={i}>
                <Glyphicon style={{ color: 'grey' }} glyph="tasks" />
                {` ${item.name}`}
                {result}
              </ListGroupItem>
            )
          })}
      </ListGroup>)
    list.push(section)
  }
  return (
    <Panel collapsible defaultExpanded header="UAT Report">
      <h3>Scenario Report</h3>
      {list}
    </Panel>
  )
};

export default UATReport;
