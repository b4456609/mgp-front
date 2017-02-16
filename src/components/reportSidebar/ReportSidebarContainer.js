import React, { Component } from 'react';
import { connect } from 'react-redux';
import Option from './Option.js';
import ServiceTestReport from './ServiceTestReport.js';
import UATReport from './UATReport';
import { getTestReportData, showModal, setReportSidebarIndex } from '../../actions';

class ReportSidebarContainer extends Component {
  constructor(props) {
    super();
    props.getReportData(props.page);
    this.getOption = this.getOption.bind(this);
    this.getServiceTestReport = this.getServiceTestReport.bind(this);
  }
  getServiceTestReport() {
    const {reportData, reportType, showReportDetail} = this.props;
    if (reportData instanceof Object && reportType === 'service' && reportData.length > 0) {
      return (<ServiceTestReport data={reportData} showReport={showReportDetail} />);
    }
    return null;
  }
  getUATReport() {
    const {reportData, reportType, showReportDetail} = this.props;
    if (reportData instanceof Object && reportType === 'uat' && reportData.length > 0) {
      return (<UATReport data={reportData} showReport={showReportDetail} />);
    }
    return null;
  }
  getOption() {
    const {
      reportSideBarIsFirst,
      reportSideBarIsLast,
      page,
      getReportData
    } = this.props;
    return (<Option
      data={this.props.optionData}
      index={this.props.reportIndex}
      selectReport={this.props.selectReport}
      isFirst={reportSideBarIsFirst}
      isLast={reportSideBarIsLast}
      page={page}
      getReportData={getReportData}
    />)
  }
  render() {
    return (
      <div>
        {this.getOption()}
        {this.getServiceTestReport()}
        {this.getUATReport()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  let optionData = state.report.map((item) => {
    return {
      timestamp: item.timestamp,
      type: item.type === 'service' ? 'Service Test' : 'UAT',
    }
  })
  const reportIndex = state.app.reportSidebarIndex;
  let reportData = null;
  let reportType = '';
  if (state.report instanceof Array && state.report.length > reportIndex) {
    reportData = state.report[reportIndex].report;
    reportType = state.report[reportIndex].type;
  }
  return {
    optionData,
    reportData,
    reportIndex,
    reportSideBarIsFirst: state.app.reportSideBarIsFirst,
    reportSideBarIsLast: state.app.reportSideBarIsLast,
    reportType,
    page: state.app.reportSideBarpage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectReport: (index) => {
      dispatch(setReportSidebarIndex(index));
    },
    getReportData: (page) => {
      dispatch(getTestReportData(page));
    },
    showReportDetail: (title, body) => {
      dispatch(showModal(title, body, 'markdown'));
    }
  };
}

export default connect(mapStateToProps,
  mapDispatchToProps
)(ReportSidebarContainer);
