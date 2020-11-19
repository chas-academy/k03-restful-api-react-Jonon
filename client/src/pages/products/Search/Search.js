import React from "react";
import Radium from "radium";
// components
import Input from "../../../assets/form/Input";
// styles
import color from "../../../styles/colors";
import styles from "./search.style";

const Search = () => {
  return (
    <>
      <div style={styles.row}>
        <Input
          type="search"
          placeholder="What are you looking for?"
          rounded="true"
          kind="none"
        />
        <div style={styles.verticalAlign}>
          <ion-icon
            style={[{ color: color.teriaryVariant, cursor: "pointer" }]}
            name="ios-search"
            size="5rem"
          />
        </div>
      </div>
    </>
  );
};

export default Radium(Search);
