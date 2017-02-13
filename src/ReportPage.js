import React, { Component } from 'react';
import marked from 'marked';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import ReportSidebarContainer from './components/reportSidebar/ReportSidebarContainer'

class ReportPage extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col md={7} lg={9}>
          </Col>
          <Col md={5} lg={3}>
            <ReportSidebarContainer />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ReportPage;

