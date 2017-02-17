import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  HelpBlock
} from 'react-bootstrap';
import {onSaveSetting} from './actions';

//url pattern
const urlRegex = '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$';

class SettingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pactHostUrl: this.props.pactHostUrl,
      bddGitUrl: this.props.bddGitUrl,
    };
    this.handleChange = this.handleChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
    this.handleBDDChange = this.handleBDDChange.bind(this);
    this.getBDDValidationState = this.getBDDValidationState.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  getValidationState() {
    let result = this.state.pactHostUrl.match(urlRegex);
    if (result !== null) {
      return 'success';
    }
    return 'error';
  }

  getBDDValidationState() {
    console.log(this.state);
    let result = this.state.bddGitUrl.match(urlRegex);
    if (result !== null) {
      return 'success';
    }
    return 'error';
  }

  handleChange(e) {
    this.setState({pactHostUrl: e.target.value});
  }

  handleBDDChange(e) {
    this.setState({bddGitUrl: e.target.value});
  }

  onSubmitClick() {
    if (this.getValidationState() === 'error')
      return;
    this.props.dispatch(onSaveSetting(this.state.pactHostUrl,this.state.bddGitUrl))
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col mdOffset={2} md={8}>
            <h1>Setting</h1>
            <form>
              <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                <ControlLabel>Pact broker url</ControlLabel>
                <FormControl type="text" value={this.state.pactHostUrl} placeholder="http://localhost:8880/" onChange={this.handleChange}/>
                <FormControl.Feedback/>
                <HelpBlock>ex: http://localhost:8880/</HelpBlock>
              </FormGroup>
              <FormGroup controlId="formBasicText" validationState={this.getBDDValidationState()}>
                <ControlLabel>BDD Git url</ControlLabel>
                <FormControl type="text" value={this.state.bddGitUrl} placeholder="https://github.com/b4456609/easylearn-uat.git" onChange={this.handleBDDChange}/>
                <FormControl.Feedback/>
                <HelpBlock>
                  ex: https://github.com/b4456609/easylearn-uat.git
                </HelpBlock>
              </FormGroup>
            </form>
            <Button bsStyle="primary" bsSize="large"
              disabled={this.props.isLoading}
              onClick={this.onSubmitClick}>
              {this.props.isLoading?'Loading...':'Submit'}
            </Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default connect((state) => (
  {
    pactHostUrl: state.setting.pactHostUrl,
    bddGitUrl: state.setting.bddGitUrl,
    isLoading: state.setting.isLoading,
  }
))(SettingPage);
