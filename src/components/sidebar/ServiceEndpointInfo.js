import React, {Component} from 'react';
import {
  Panel,
  Tabs,
  Tab
} from 'react-bootstrap';
import JavaFakeCode from './JavaFakeCode.js';
import CmdFakeCode from './CmdFakeCode.js';
import NodeJsFakeCode from './NodeJsFakeCode.js';
import Highlight from 'react-highlight';

class ServiceEndpointInfo extends Component {
  render() {
    return (
      <Panel collapsible defaultExpanded header="Service Endpoint Information">
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Java">
            <Highlight className='java'>
              {JavaFakeCode}
            </Highlight>
          </Tab>
          <Tab eventKey={2} title="Shell">
            <Highlight className='java'>
              {CmdFakeCode}
            </Highlight>
          </Tab>
          <Tab eventKey={3} title="NodeJs">
            <Highlight className='javascript'>
              {NodeJsFakeCode}
            </Highlight></Tab>
        </Tabs>
      </Panel>
    );
  }
}

export default ServiceEndpointInfo;
