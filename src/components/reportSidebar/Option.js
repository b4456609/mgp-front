import React from 'react';
import {
  Panel,
  ListGroup,
  ListGroupItem,
  Badge,
  Pager,
} from 'react-bootstrap';
import moment from 'moment';

const Option = ({data, selectReport, index, isFirst, isLast, page, getReportData}) => {
  let previous = (
    <Pager.Item
      previous
      onClick={() => { console.log("pre")
        getReportData(page - 1) }}>
      &larr; Newer
      </Pager.Item>
  );
  if (isFirst) {
    previous = (<Pager.Item disabled previous >&larr; Newer</Pager.Item>)
  }
  let last = (<Pager.Item
      onClick={() => { console.log("next")
      getReportData(page + 1) }} next >Older &rarr;</Pager.Item>)
  if (isLast) {
    last = (<Pager.Item
      disabled
      next >
      Older &rarr;
    </Pager.Item>
    )
  }
  return (

    <Panel collapsible defaultExpanded header="Test Information">
      <ListGroup>
        {data.map((item, i) => {
          if (index === i) {
            return (
              <ListGroupItem key={item.timestamp} onClick={() => { selectReport(i); }} active>
                {moment(item.timestamp).format('M/D HH:mm:ss')}
                <Badge>{item.type}</Badge>
              </ListGroupItem>
            )
          }
          return (
            <ListGroupItem key={item.timestamp} onClick={() => { selectReport(i); }} >
              {moment(item.timestamp).format('M/D HH:mm:ss')}
              <Badge>{item.type}</Badge>
            </ListGroupItem>
          )
        })}
      </ListGroup>
      <Pager onSelect={(...a)=>{console.log(a)}}>
        {previous}
        {last}
      </Pager>
    </Panel>
  )
};

Option.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.shape({
    timestamp: React.PropTypes.number.isRequired,
    type: React.PropTypes.string.isRequired,
  })).isRequired,
}

export default Option;
