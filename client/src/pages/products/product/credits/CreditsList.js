import React from "react";
import styles from "./CreditList.style";

const CreditsList = ({ items, pubDate, heading }) => {
  const checkType = (data, pubDate) => {
    // Check if data and pubDate is loaded
    if (!data && !pubDate) {
      return <p>Loading</p>;
      // Check if it's an array
    } else if (Array.isArray(data)) {
      return data.map((w, idx) => (
        <li style={styles.itemHeader} key={idx}>
          {w.name}
        </li>
      ));
      // check if data is a string or a number
    } else if (typeof data === "string" || typeof data === "number") {
      return <li style={styles.itemHeader}>{data}</li>;
    } else if (pubDate) {
      // Convert pubDate to a date string
      let publicationDate = pubDate;
      publicationDate = new Date(publicationDate).toDateString();
      return <li>{publicationDate}</li>;
    }
  };

  return (
    <>
      <h2 style={styles.header}>{heading}</h2>
      {checkType(items, pubDate)}
    </>
  );
};

export default CreditsList;
