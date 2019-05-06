import React from "react";
import { typicons } from "typicons.font";
import Radium from "radium";

import styles from "../../styles/styles";

function Facebook() {
  return (
    <span style={styles.SocialIcon} className="typcn typcn-social-facebook" />
  );
}

export default Radium(Facebook);
