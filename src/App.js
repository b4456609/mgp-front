import React, {Component} from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import './App.css';
import GraphContainer from './components/graph/GraphContainer.js';
import SidebarContainer from './components/sidebar/SidebarContainer.js';
import {getGraphData} from './actions';

class App extends Component {
  componentDidMount() {
    getGraphData();
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
          <Row>
            <Col md={9}>
              <GraphContainer />
            </Col>
            <Col md={3}>
              <SidebarContainer />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
