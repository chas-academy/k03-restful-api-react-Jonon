import React, { Component } from 'react'
import styles from "./style"
import Radium from "radium";

const Modal = (props) => (
    <div style={[{ display: props.show ? 'block' : 'none'}, styles.modalOverlay]} onClick={props.hideModal}>
        <div style={styles.center} >
            <div style={styles.modalBox}>
            </div>
        </div>
    </div>
  );

export default Radium(Modal)
