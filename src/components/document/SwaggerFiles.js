import {
  Button,
  Panel,
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import React from 'react';

const SwaggerFiles = ({data}) => {
  return (
    <Panel collapsible defaultExpanded header="Service API Document" >
        <Row>
          {data.map((i) => {
            return (
              <Col xs={12} sm={6} md={4} lg={3} className="text-center">
                <p>
                  <Button target="_blank" href={i.link} bsStyle="primary" bsSize="large">
                    {i.name}
                  </Button>
                </p>
              </Col>
            )
          })}
        </Row>
    </Panel>
  );
};

export default SwaggerFiles;
