import React from 'react';
import {
  Panel,
  Table,
  Button,
} from 'react-bootstrap';
import Highlight from 'react-highlight';

const ScenarioInfo = ({data, showFeature}) => (
    <Panel collapsible defaultExpanded header="Scenario Information">
      <Table striped bordered condensed hover responsive>
        <tbody>
          <tr>
            <td>Feature Name</td>
            <td>{data.feature.name}</td>
          </tr>
          <tr>
            <td>Scenario Name</td>
            <td>{data.name}</td>
          </tr>
        </tbody>
      </Table>
      <Highlight className='gherkin'>
        {data.content}
      </Highlight>
      <Button bsStyle="primary" bsSize="large" onClick={()=>{showFeature(data.feature.name, data.feature.content)}}>Open Feature File</Button>
    </Panel>
    );

export default ScenarioInfo;
