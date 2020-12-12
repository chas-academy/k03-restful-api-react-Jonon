import React from "react";
import Radium from "radium";
// assets
import Icon from "../../../assets/icons";
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
          <Icon
            customStyle={{ cursor: "pointer" }}
            icon="search"
            width="24"
            stroke={{ stroke: `${color.shades.grey01}` }}
          />
        </div>
      </div>
    </>
  );
};

export default Radium(Search);
