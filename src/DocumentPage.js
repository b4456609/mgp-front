import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import {connect} from 'react-redux';
import FeatureFilesContainer from './components/document/FeatureFilesContainer';
import SwaggerFilesContainer from './components/document/SwaggerFilesContainer';
import {getDocument} from './actions'

class DocumentPage extends Component {
  componentDidMount() {
    this.props.dispatch(getDocument())
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <SwaggerFilesContainer />
            <FeatureFilesContainer />
          </Col>
        </Row>
      </Grid>
    );
  }
}


export default connect()(DocumentPage);
