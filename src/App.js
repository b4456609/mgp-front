import React, {Component} from 'react';
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap';
import './App.css';
import {getGraphData} from './actions';
import { browserHistory } from 'react-router'

function handleSelect(...i){
  console.log(i);
}

function onClick(...i) {
  console.log(i);
}

class App extends Component {
  componentDidMount() {
    getGraphData();
  }
  render() {
    return (
      <div>
        <Navbar collapseOnSelect fluid onSelect={handleSelect}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Microservices Graph Platform</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} onClick={()=>{browserHistory.push('/');}} >Graph</NavItem>
              <NavItem eventKey={2} onClick={()=>{browserHistory.push('/setting');}} >Setting</NavItem>
              <NavItem eventKey={3} onClick={()=>{browserHistory.push('/document');}} >Document</NavItem>
              <NavItem eventKey={4} onClick={()=>{browserHistory.push('/how');}} >How</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default App;
