import React from 'react';
import {
  Panel,
  Button,
  Table,
} from 'react-bootstrap';

const ServiceInfo = ({data}) => (
  <Panel collapsible defaultExpanded header="Service Information">
    <Table striped bordered condensed hover responsive>
      <tbody>
        <tr>
          <td>Name</td>
          <td>{data.id}</td>
        </tr>
        <tr>
          <td>Endpoint Count</td>
          <td>{data.endpointCount}</td>
        </tr>
        <tr>
          <td>Service Call Count</td>
          <td>{data.serviceCallCount}</td>
        </tr>
      </tbody>
    </Table>
    <Button href={`\\api\\swagger-ui\\${data.swagger}`} bsStyle="primary" bsSize="large">API Document</Button>
  </Panel>
);

export default ServiceInfo;
