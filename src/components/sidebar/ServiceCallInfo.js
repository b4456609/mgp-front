import React from 'react';
import {
  Panel,
  Table
} from 'react-bootstrap';
import Highlight from 'react-highlight';

const ServiceCallInfo = ({data}) => (
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
    </Panel>
    );

export default ServiceCallInfo;
