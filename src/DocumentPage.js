import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import {connect} from 'react-redux';
import FeatureFilesContainer from './components/document/FeatureFilesContainer';
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
            <FeatureFilesContainer />
          </Col>
        </Row>
      </Grid>
    );
  }
}


export default connect()(DocumentPage);
