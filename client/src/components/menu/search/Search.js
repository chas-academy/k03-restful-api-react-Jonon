import React, { Component } from 'react'
import styles from "./style";

export default class Search extends Component {
    render() {
        return (
            <div style={styles.base}>
                <ion-icon style={styles.searchIcon} name="search"></ion-icon>
                <input style={styles.searchField} type="text" />
            </div>
        )
    }
}
