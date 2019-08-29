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

    fetch(`http://192.168.11.197:3004/comics/${params.id}`)
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
      <div style={{ margin: "1em" }}>
        <div>
          <img src={items.poster} width="100%" />
          <h3>{items.title}</h3>
          <h4>
            Price <span>{items.price}</span>
          </h4>
          <Button title="Add to cart" kind="primary" width="100%" size="lg" />
        </div>
        <p>{items.description}</p>
        <div>
          <div>
            <h4>Creators</h4>
            <ul style={styles.disableListStyle}>
              <li>
                Writer
                <ul style={styles.disableListStyle}>
                  <li>{items.writer}</li>
                </ul>
              </li>
              <li>
                Artist
                <ul style={styles.disableListStyle}>
                  <li>{items.artist}</li>
                </ul>
              </li>
              <li>
                Cover Artist
                <ul style={styles.disableListStyle}>
                  <li>{items.coverArtist}</li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h4>Publication</h4>
            <ul style={styles.disableListStyle}>
              <li>
                Publisher
                <ul style={styles.disableListStyle}>
                  <li>{items.publisher}</li>
                </ul>
              </li>
              <li>
                Publication date
                <ul style={styles.disableListStyle}>
                  <li>{items.publicationDate}</li>
                </ul>
              </li>
              <li>
                Pages
                <ul style={styles.disableListStyle}>
                  <li>{items.pages}</li>
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
