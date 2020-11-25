import React from "react";
// styles
import styles from "../products.style";

const Credits = ({ items }) => {
  return (
    <>
      <div>
        <h4 style={styles.listHeader}>Creators</h4>
        <ul style={styles.disableListStyle}>
          <li>
            <span style={styles.listHeader}>Writer</span>
            <ul style={styles.disableListStyle}>
              <li style={styles.listItem}>{items.writer}</li>
            </ul>
          </li>
          <li>
            <span style={styles.listHeader}>Artist</span>
            <ul style={styles.disableListStyle}>
              <li style={styles.listItem}>{items.artist}</li>
            </ul>
          </li>
          <li>
            <span style={styles.listHeader}>Cover artist</span>
            <ul style={styles.disableListStyle}>
              <li style={styles.listItem}>{items.coverArtist}</li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h4>Publication</h4>
        <ul style={styles.disableListStyle}>
          <li>
            <span style={styles.listHeader}>Publisher</span>
            <ul style={styles.disableListStyle}>
              <li style={styles.listItem}>{items.publisher}</li>
            </ul>
          </li>
          <li>
            <span style={styles.listHeader}>Publication date</span>
            <ul style={styles.disableListStyle}>
              <li style={styles.listItem}>{items.publicationDate}</li>
            </ul>
          </li>
          <li>
            <span style={styles.listHeader}>Pages</span>
            <ul style={styles.disableListStyle}>
              <li style={styles.listItem}>{items.pages}</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Credits;
