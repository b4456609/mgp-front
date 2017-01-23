import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap';
import {onSaveSetting} from './actions';

//url pattern
const urlRegex = '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$';

class SettingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      packBrokerUrl: this.props.url,
    };
    this.handleChange = this.handleChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  getValidationState() {
    let result = this.state.packBrokerUrl.match(urlRegex);
    if (result !== null) {
      return 'success';
    }
    return 'error';
  }

  handleChange(e) {
    this.setState({packBrokerUrl: e.target.value});
  }

  onSubmitClick() {
    if (this.getValidationState() === 'error')
      return;
    console.log(this.state.packBrokerUrl);
    this.props.dispatch(onSaveSetting(this.state.packBrokerUrl))
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <h1>Setting</h1>
            <form>
              <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                <ControlLabel>Pact broker url</ControlLabel>
                <FormControl type="text" value={this.state.packBrokerUrl} placeholder="http://localhost:8880/" onChange={this.handleChange}/>
                <FormControl.Feedback/> {/* <HelpBlock>ex: http://localhost:8880/</HelpBlock> */}
              </FormGroup>
            </form>
            <Button bsStyle="primary" bsSize="large" onClick={this.onSubmitClick}>
              Submit
            </Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default connect((state)=>({url:state.setting.url}))(SettingPage);
