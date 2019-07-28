import React, { Component } from 'react';
import styles from './style';
import Radium from "radium";
import Login from '../../buttons/Login';

class LoginForm extends Component {
    render() {
        return (
            <div style={styles.base}>
                <form style={styles.container}>
                    <input type="text" placeholder="Username or E-mail" style={[styles.input]} />
                    <input type="text" placeholder="Password" style={[styles.input]} />
                    <Login styles={styles.button} />
                </form>
            </div>
        )
    }
}

export default Radium(LoginForm);