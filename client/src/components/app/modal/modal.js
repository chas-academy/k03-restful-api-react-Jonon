import React, { Component } from 'react'

const Modal = ({show}) => (
    <div style={{ display: show ? 'block' : 'none'}}>
      
        <div>modal test</div>
        
      
    </div>
  );

  Modal.defaultProps = {
    show: false,
  };

export default Modal
