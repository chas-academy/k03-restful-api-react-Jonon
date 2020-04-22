import React from "react";
import styles from "./style";

const Search = () => {
  return (
    <div style={styles.base}>
      <ion-icon style={styles.searchIcon} name="search" />
      <input style={styles.searchField} type="text" />
    </div>
  );
};

export default Search;
