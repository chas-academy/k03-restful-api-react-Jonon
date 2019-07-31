import React, { Component } from 'react'
import styles from "./style";

export default class Search extends Component {
    render() {
        return (
            <div>
                <input style={styles.base} type="text" />
            </div>
        )
    }
}
