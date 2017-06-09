import React, { Component } from 'react';
import { Panel, FormGroup, Checkbox, Button, Nav, NavItem } from 'react-bootstrap';

class GraphOptions extends Component {
  getCyclic() {
    if (this.props.showCyclic) {
      return (
        <Checkbox
          onChange={(i) => { this.props.setCyclic(i.target.checked) }}
          defaultChecked
          inline>
          Show Cyclic Dependency
          </Checkbox>
      );
    }
    return (
      <Checkbox
        onChange={(i) => { this.props.setCyclic(i.target.checked) }}
        inline>
        Show Cyclic Dependency
      </Checkbox>
    );
  }
  getUnTest() {
    if (this.props.showUnTest) {
      return (
        <Checkbox
          onChange={(i) => { this.props.setUnTest(i.target.checked) }}
          defaultChecked
          inline>
          Show Untested Service Call
          </Checkbox>
      );
    }
    return (
      <Checkbox
        onChange={(i) => { this.props.setUnTest(i.target.checked) }}
        inline>
          Show Untested Service Call
      </Checkbox>
    );
  }
  render() {
    return (
      <Panel collapsible defaultExpanded header="Graph Options">
        <FormGroup>
          {this.getCyclic()}
          <br/>
          {this.getUnTest()}
        </FormGroup>
        <hr />
        <h4>Graph Type</h4>
        <Nav stacked bsStyle="pills">
          <NavItem onClick={() => { this.props.setGraphType('all') }} active={this.props.graphType === 'all'}>Normal</NavItem>
          <NavItem onClick={() => { this.props.setGraphType('path') }} active={this.props.graphType === 'path'}>Path</NavItem>
          <NavItem onClick={() => { this.props.setGraphType('cyclic') }} active={this.props.graphType === 'cyclic'}>Weak Cyclic Dependency</NavItem>
          <NavItem onClick={() => { this.props.setGraphType('cyclicEnhance') }} active={this.props.graphType === 'cyclicEnhance'}>Strong Cyclic Dependency</NavItem>
        </Nav>
        <hr />
        <Button bsStyle="primary" bsSize="large" onClick={() => { this.props.refresh() }}>Refresh</Button>
      </Panel>
    );
  }
}

export default GraphOptions;
