import React from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import GraphContainer from './components/graph/GraphContainer.js';
import SidebarContainer from './components/sidebar/SidebarContainer.js';

const GraphPage = () => (
  <Grid fluid>
    <Row>
      <Col xs={12} sm={7} md={8} lg={9}>
        <GraphContainer />
      </Col>
      <Col xs={12} sm={5} md={4} lg={3}>
        <SidebarContainer />
      </Col>
    </Row>
  </Grid>
);

export default GraphPage;
