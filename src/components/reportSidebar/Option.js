import React from 'react';
import {
  Panel,
  ListGroup,
  ListGroupItem,
  Badge,
  Pager,
} from 'react-bootstrap';

const Option = ({data, selectReport, index}) => (
  <Panel collapsible defaultExpanded header="Test Information">
    <ListGroup>
      {data.map((item, i) => {
        if (index === i) {
          return (
            <ListGroupItem key={item.timestamp} onClick={() => { selectReport(i); }} active>
              {item.timestamp}
              <Badge>{item.type}</Badge>
            </ListGroupItem>
          )
        }
        return (
          <ListGroupItem key={item.timestamp} onClick={() => { selectReport(i); }} >
            {item.timestamp}
            <Badge>{item.type}</Badge>
          </ListGroupItem>
        )
      })}
    </ListGroup>
    <Pager>
      <Pager.Item previous href="#">&larr; Newer</Pager.Item>
      <Pager.Item next href="#">Older &rarr;</Pager.Item>
    </Pager>
  </Panel>
);

Option.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.shape({
    timestamp: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
  })).isRequired,
}

export default Option;
