import React, {Component} from 'react';
import {Panel, FormGroup, Checkbox, Button} from 'react-bootstrap';

class GraphOptions extends Component {
  getCyclic(){
    if(this.props.showCyclic){
        return (
          <Checkbox
            onChange={(i)=>{this.props.setCyclic(i.target.checked)}}
            defaultChecked
            inline>
            show Cyclic
          </Checkbox>
        );
    }
    return (
      <Checkbox
        onChange={(i)=>{this.props.setCyclic(i.target.checked)}}
        inline>
        show Cyclic
      </Checkbox>
    );
  }
  render() {
    return (
      <Panel collapsible defaultExpanded header="Graph Options">
        <FormGroup>
          {this.getCyclic()}
        </FormGroup>
        <Button bsStyle="primary" bsSize="large" onClick={()=>{this.props.refresh()}}>Refresh</Button>
      </Panel>
    );
  }
}

export default GraphOptions;
