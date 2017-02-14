import React, { Component } from 'react';
import { connect } from 'react-redux';
import Option from './Option.js';
import ReportMarkdown from './ReportMarkdown.js';
import { getTestReportData, showModal, setReportSidebarIndex } from '../../actions';
import moment from 'moment';

class ReportSidebarContainer extends Component {
  constructor(props) {
    super();
    console.log(props)
    props.getReportData();
  }
  getReport() {
    if (this.props.reportData instanceof Object && this.props.reportData.length > 0) {
      return (<ReportMarkdown data={this.props.reportData} showReport={this.props.showReportDetail} />);
    }
    return null;
  }
  render() {
    return (
      <div>
        <Option
          data={this.props.optionData}
          index={this.props.reportIndex}
          selectReport={this.props.selectReport}
        />
        {this.getReport()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  let optionData = state.report.map((item) => {
    return {
      timestamp: moment(item.timestamp).format('lll'),
      type: item.type === 'service' ? 'Service Test' : 'UAT',
    }
  })
  const reportIndex = state.app.reportSidebarIndex;
  let reportData = null;
  if (state.report instanceof Array && state.report.length > reportIndex) {
    reportData = state.report[reportIndex].report;
  }
  return {
    optionData,
    reportData,
    reportIndex,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectReport: (index) => {
      dispatch(setReportSidebarIndex(index));
    },
    getReportData: () => {
      dispatch(getTestReportData());
    },
    showReportDetail: (title, body) => {
      dispatch(showModal(title, body, 'markdown'));
    }
  };
}

export default connect(mapStateToProps,
  mapDispatchToProps
)(ReportSidebarContainer);
