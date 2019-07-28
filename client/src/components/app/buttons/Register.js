import React, { Component } from 'react'
import styles from './style'
import Radium from "radium";

class Register extends Component {
    render() {
        return (
            <div style={this.props.styles}>
                <button style={[styles.base]}>Register</button>
            </div>
        )
    }
}

export default Radium(Register);