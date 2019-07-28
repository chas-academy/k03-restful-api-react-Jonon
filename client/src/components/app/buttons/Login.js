import React, { Component } from 'react';
import Radium from 'radium';
import styles from './style'

class Login extends Component {
    render() {
        return (
            <div style={this.props.styles}>
                <button style={[styles.base]}>Login</button>
            </div>
        )
    }
}

export default Radium(Login);