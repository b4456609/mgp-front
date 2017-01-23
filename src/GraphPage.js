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
      <Col md={7} lg={9}>
        <GraphContainer />
      </Col>
      <Col md={5} lg={3}>
        <SidebarContainer />
      </Col>
    </Row>
  </Grid>
);

export default GraphPage;
