import React, {Component} from 'react';
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap';
import './App.css';
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
              <NavItem eventKey={2} href="#">Setting</NavItem>
              <NavItem eventKey={3} href="#">Document</NavItem>
              <NavItem eventKey={4} href="#">How</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default App;
