import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

let html = '';

// Synchronous highlighting with highlight.js
marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

class HowPage extends Component {
  constructor() {
    super()
    const self =this;
    fetch('/how.md')
      .then((res) => {
        return res.text();
      })
      .then((res) => {
        html =marked(res);
        self.forceUpdate();
      })
  }

  componentDidMount() {
    let ele = ReactDOM.findDOMNode(this);
    let tables = ele.querySelector('table');
    tables.className = 'table table-bordered';
  }

  componentDidUpdate() {
    let ele = ReactDOM.findDOMNode(this);
    let tables = ele.querySelectorAll('table');
    [].forEach.call(tables, (t) => {t.className = 'table table-bordered';});
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col mdOffset={2} md={8}>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default HowPage;

