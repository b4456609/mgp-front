import React from 'react';
import {connect} from 'react-redux';
import {Modal, Button} from 'react-bootstrap';
import {closeModal} from '../actions';
import Highlight from 'react-highlight';

const MyModal = ({show, title, body, close}) => (
  <Modal show={show} bsSize="large" aria-labelledby="contained-modal-title-lg">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-lg">{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Highlight className='gherkin'>
        {body}
      </Highlight>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={close}>Close</Button>
    </Modal.Footer>
  </Modal>
);

export default connect(
  (state) => ({show: state.modal.show, title: state.modal.title, body: state.modal.body}),
  (dispatch) => ({close: ()=>{dispatch(closeModal())}})
)(MyModal);
