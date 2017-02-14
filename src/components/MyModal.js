import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { closeModal } from '../actions';
import Highlight from 'react-highlight';
import marked from 'marked';

const MyModal = ({show, title, body, type, close}) => {
  let result = null;
  if (type === 'code') {
    result = (
      <Highlight className='gherkin'>
        {body}
      </Highlight>)
  }
  else if (type === 'markdown') {
    const html = marked(body);
    result = (
      <div dangerouslySetInnerHTML={{ __html: html }} />
    )
  }
  else {
    result = (<p>{body}</p>)
  }
  return (
    <Modal show={show} bsSize="large" aria-labelledby="contained-modal-title-lg" onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-lg">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {result}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={close}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default connect(
  (state) => ({ show: state.modal.show, title: state.modal.title, body: state.modal.body, type: state.modal.type }),
  (dispatch) => ({ close: () => { dispatch(closeModal()) } })
)(MyModal);
