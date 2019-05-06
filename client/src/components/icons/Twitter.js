import React from "react";
import { typicons } from "typicons.font";
import Radium from "radium";

import styles from "../../styles/styles";

function Twitter() {
  return (
    <span style={styles.SocialIcon} className="typcn typcn-social-twitter" />
  );
}

export default Radium(Twitter);
