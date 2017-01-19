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
            <td>From</td>
            <td>{data.from}</td>
          </tr>
          <tr>
            <td>To</td>
            <td>{data.to}</td>
          </tr>
        </tbody>
      </Table>
      <Highlight className='json'>
        {data.pact}
      </Highlight>
    </Panel>
    );

export default ServiceCallInfo;
