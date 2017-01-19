import React from 'react';
import {
  Panel,
  Tabs,
  Tab,
  Table
} from 'react-bootstrap';
import Highlight from 'react-highlight';

const ServiceEndpointInfo = ({data}) => (
  <Panel collapsible defaultExpanded header="Service Endpoint Information">
    <Table striped bordered condensed hover responsive>
      <tbody>
        <tr>
          <td>ID</td>
          <td>{data.id}</td>
        </tr>
        <tr>
          <td>HTTP Method</td>
          <td>{data.httpMethod}</td>
        </tr>
        <tr>
          <td>Path</td>
          <td>{data.path}</td>
        </tr>
      </tbody>
    </Table>
    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
      <Tab eventKey={1} title="Java">
        <Highlight className='java'>
          {data.code.java}
        </Highlight>
      </Tab>
      <Tab eventKey={2} title="Shell">
        <Highlight className='java'>
          {data.code.cli}
        </Highlight>
      </Tab>
      <Tab eventKey={3} title="NodeJs">
        <Highlight className='javascript'>
          {data.code.js}
        </Highlight>
      </Tab>
    </Tabs>
  </Panel>
);

export default ServiceEndpointInfo;
