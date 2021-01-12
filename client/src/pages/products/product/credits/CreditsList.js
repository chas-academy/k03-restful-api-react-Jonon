import React from "react";
import styles from "./Credits.style";

const CreditsList = ({ items, heading }) => {
  return (
    <div>
      <h2 style={styles.listHeader}>{heading}</h2>

      {!items || !items.writer ? (
        <p>Loading</p>
      ) : (
        items["writer"].map((w, idx) => <p key={idx}>{w.name}</p>)
      )}
    </div>
  );
};

export default CreditsList;
