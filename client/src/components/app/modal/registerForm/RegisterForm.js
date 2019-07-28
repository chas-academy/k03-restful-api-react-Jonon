import React, { Component } from 'react'
import styles from "./style"
import Radium from "radium";
import Register from '../../buttons/Register';

class RegisterForm extends Component {
    render() {
        return (
            <div style={styles.base}>
                <form style={styles.container}>
                    <input type="text" placeholder="Username" style={[styles.input]} />
                    <input type="email" placeholder="E-mail" style={[styles.input]} />
                    <input type="password" placeholder="Password" style={[styles.input]} />
                    <Register styles={styles.button} />
                </form>
            </div>
        )
    }
}

export default Radium(RegisterForm);