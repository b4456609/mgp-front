import React from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import Highlight from 'react-highlight';

//no-useless-escape
const uploadCode =
`curl -i -X POST \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@./mpd.json" http://localhost/api/mpd`;

const HowPage = () => (
  <Grid>
    <Row>
      <Col md={12}>
        <h1>Upload</h1>
        <p>
          Upload MPD file to server.
        </p>
        <Highlight className='sh'>
          {uploadCode}
        </Highlight>
      </Col>
    </Row>
  </Grid>
);

export default HowPage;
