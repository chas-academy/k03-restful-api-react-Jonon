import React, { Component } from 'react'
import styles from "./style"
import Radium, { StyleRoot } from "radium";

const Modal = ({show}) => (
    <div style={[{ display: show ? 'block' : 'none'}, styles.modalOverlay]}>
        <div style={styles.center}>
            <div style={styles.modalBox}>
                
            </div>
        </div>
    </div>
  );

  Modal.defaultProps = {
    show: false,
  };

export default Radium(Modal)
