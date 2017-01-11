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
} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Graph from './Graph.js';
import Services from './Services.js';
import ServiceEndpointInfo from './components/sidebar/ServiceEndpointInfo.js';
import ServiceInfo from './components/sidebar/ServiceInfo.js';
import ServiceCallInfo from './components/sidebar/ServiceCallInfo.js';

class App extends Component {
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
          <Row>
            <Col md={9}>
              <Graph data={Services} />
            </Col>
            <Col md={3}>
              <ServiceEndpointInfo />
              <ServiceInfo />
              <ServiceCallInfo />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
