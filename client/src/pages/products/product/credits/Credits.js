import React from "react";
// styles
import styles from "./Credits.style";
// components
import CreditsList from "./CreditsList";

const Credits = ({ items }) => {
  return (
    <>
      <div>
        <h4 style={styles.listHeader}>Creators</h4>
        <ul style={styles.disableListStyle}>
          <CreditsList heading="Writer" items={items["writer"]} />
          <CreditsList heading="Artist" items={items["artist"]} />
          <CreditsList heading="Cover Artist" items={items["coverArtist"]} />
        </ul>
      </div>
      <div>
        <h4>Publication</h4>
        <ul style={styles.disableListStyle}>
          <CreditsList heading="Publisher" items={items["publisher"]} />
          <CreditsList
            heading="Publication date"
            pubDate={items["publicationDate"]}
          />
          <CreditsList heading="Pages" items={items["pages"]} />
        </ul>
      </div>
    </>
  );
};

export default Credits;
