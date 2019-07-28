import React, { Component } from 'react';
import styles from './style';
import Radium from "radium";

class LoginForm extends Component {
    render() {
        return (
            <div style={styles.base}>
                <form style={styles.container}>
                    <input type="text" placeholder="Username or E-mail" style={[styles.input, styles.width]} />
                    <input type="text" placeholder="Password" style={[styles.input, styles.width]} />
                    <button style={[styles.button, styles.width]}>Login</button>
                </form>
            </div>
        )
    }
}

export default Radium(LoginForm);