import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import ReportSidebarContainer from './components/reportSidebar/ReportSidebarContainer'
import GraphContainer from './components/graph/GraphContainer'

class ReportPage extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col md={7} lg={9}>
            <GraphContainer />
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
