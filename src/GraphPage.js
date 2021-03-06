import React from 'react';
import {connect} from 'react-redux';
import gears from './gears.svg'

import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import GraphContainer from './components/graph/GraphContainer.js';
import SidebarContainer from './components/sidebar/SidebarContainer.js';

const GraphPage = ({graphLoading}) => {
  let result = (<GraphContainer />)
  if(graphLoading){
    result = (<div style={{width: '100%', textAlign: 'center', paddingTop: '150px'}}><img src={gears} alt="Loading"/></div>);
  }
  return (
  <Grid fluid>
    <Row>
      <Col xs={12} sm={7} md={8} lg={9}>
        {result}
      </Col>
      <Col xs={12} sm={5} md={4} lg={3}>
        <SidebarContainer />
      </Col>
    </Row>
  </Grid>
)};

export default connect((state)=>({graphLoading: state.app.graphLoading}))(GraphPage);
