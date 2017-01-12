import React, {Component} from 'react';
import {
  Panel,
} from 'react-bootstrap';
import Highlight from 'react-highlight';
import {js_beautify} from 'js-beautify';
import PactFakeFile from './PactFakeFile.js';

class ServiceCallInfo extends Component {
  getCode(code) {
    return js_beautify(JSON.stringify(code), { indent_size: 2 });
  }
  render() {
    return (
    <Panel collapsible defaultExpanded header="Service Call Information">
      <Highlight className='json'>
        {this.getCode(PactFakeFile)}
      </Highlight>
    </Panel>
    );
  }
}

export default ServiceCallInfo;
