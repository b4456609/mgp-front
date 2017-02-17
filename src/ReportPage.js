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
          <Col xs={12} sm={7} md={8} lg={9}>
            <GraphContainer />
          </Col>
          <Col xs={12} sm={5} md={4} lg={3}>
            <ReportSidebarContainer />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ReportPage;
