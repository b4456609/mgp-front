import React, {Component} from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Grid,
  Row,
  Col,
  Panel,
  Button,
  Table,
  Tabs,
  Tab
} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Highlight from 'react-highlight';
import {js_beautify} from 'js-beautify';
import Graph from './Graph.js';
import Services from './Services.js';
import PactFakeFile from './PactFakeFile.js';
import JavaFakeCode from './JavaFakeCode.js';
import CmdFakeCode from './CmdFakeCode.js';
import NodeJsFakeCode from './NodeJsFakeCode.js';

class App extends Component {
  getCode(code) {
    return js_beautify(JSON.stringify(code), { indent_size: 2 });
  }
  render() {
    return (
      <div>
        <Navbar collapseOnSelect fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Microservices Graph Platform</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Graph</NavItem>
              <NavItem eventKey={2} href="#">Document</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid fluid>
          <Row className="show-grid">
            <Col md={9}>
              <Graph data={Services} />
            </Col>
            <Col md={3}>
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
              <Panel collapsible defaultExpanded header="Service Call Information">
                <Highlight className='json'>
                  {this.getCode(PactFakeFile)}
                </Highlight>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
