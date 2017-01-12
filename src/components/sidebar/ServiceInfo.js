import React, {Component} from 'react';
import {
  Panel,
  Button,
  Table,
} from 'react-bootstrap';

class ServiceInfo extends Component {
  render() {
    return (
      <Panel collapsible defaultExpanded header="Service Information">
        <Table striped bordered condensed hover responsive>
          <tbody>
            <tr>
              <td>Name</td>
              <td>User Service</td>
            </tr>
            <tr>
              <td>Endpoint Count</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Service Call Count</td>
              <td>5</td>
            </tr>
          </tbody>
        </Table>
        <Button bsStyle="primary" bsSize="large">API Document</Button>
      </Panel>
    );
  }
}

export default ServiceInfo;
