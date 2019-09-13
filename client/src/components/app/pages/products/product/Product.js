import React, { Component } from "react";
import Button from "../../../buttons/Button";
import styles from "./style";
import Radium from "radium";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    fetch(`/products/${params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          items: data
        });
      });
  }

  render() {
    let { items } = this.state;

    return (
      <div style={[styles.base, styles.threeColumns]}>
        <div style={styles.desktopLayout} >
          <div>
            <img src={items.poster} style={styles.image} alt="poster" />
            <h3>{items.title}</h3>
            <h4>
              Price <span>{items.price}</span>
            </h4>
            <Button title="Add to cart" kind="primary" width="100%" size="lg" />
          </div>
          <p style={styles.margin} >{items.description}</p>
        </div>
        <div style={[styles.gridColumn, styles.margin]}>
          <div>
            <h4>Creators</h4>
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
        </div>
      </div>
    );
  }
}

export default Radium(Product);
