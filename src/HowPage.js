import React, { Component } from 'react';
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

  render() {
    return (
      <Grid>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default HowPage;

