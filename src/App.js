import React, {Component} from 'react';
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap';
import './App.css';
import MyModal from './components/MyModal.js';
import { browserHistory } from 'react-router'

class App extends Component {
  componentDidMount() {
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
              <NavItem eventKey={1} onClick={()=>{browserHistory.push('/');}} >Graph</NavItem>
              <NavItem eventKey={3} onClick={()=>{browserHistory.push('/report');}} >Report</NavItem>
              <NavItem eventKey={3} onClick={()=>{browserHistory.push('/document');}} >Document</NavItem>
              <NavItem eventKey={4} onClick={()=>{browserHistory.push('/how');}} >How</NavItem>
              <NavItem eventKey={2} onClick={()=>{browserHistory.push('/setting');}} >Setting</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
        <MyModal />
      </div>
    );
  }
}

export default App;
