import React from "react";
import styles from "./Credits.style";

const CreditsList = ({ items, heading }) => {
  const checkType = (data) => {
    if (!data) {
      return <p>Loading</p>;
    } else if (Array.isArray(data)) {
      return data.map((w, idx) => <p key={idx}>{w.name}</p>);
    } else if (typeof data === "string") {
      return <p>{data}</p>;
    }
  };

  return (
    <div>
      <h2 style={styles.listHeader}>{heading}</h2>
      {checkType(items)}
    </div>
  );
};

export default CreditsList;
