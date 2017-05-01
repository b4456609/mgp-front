import React from 'react';
import {
  Panel,
  Button,
  Table
} from 'react-bootstrap';
import Highlight from 'react-highlight';

const ServiceCallInfo = ({data, pactUrl}) => (
    <Panel collapsible defaultExpanded header="Service Call Information">
      <Table striped bordered condensed hover responsive>
        <tbody>
          <tr>
            <td>Consumer</td>
            <td>{data.consumer}</td>
          </tr>
          <tr>
            <td>Provider</td>
            <td>{data.provider}</td>
          </tr>
        </tbody>
      </Table>
      <Highlight className='json'>
        {data.pact}
      </Highlight>
    <Button target="_blank" href={`${pactUrl}pacts/provider/${data.provider}/consumer/${data.consumer}/latest`} bsStyle="primary" bsSize="large">Open In Pact Broker</Button>
    </Panel>
    );

export default ServiceCallInfo;
