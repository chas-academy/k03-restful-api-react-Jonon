import React, { Component } from "react";
import styles from "./style";
import Radium from "radium";
import Icon from "../../icons/Icon";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    fetch("/categories")
      .then(res => res.json())
      .then(data => {
        this.setState({
          categories: data
        });
      });
  }

  toggleSubItem = id => {
    let newArray = { ...this.state.categories };
    newArray[id].show = !newArray[id].show;
    this.setState({ newArray });
  };
  render() {
    let { categories } = this.state;

    let categoryList = categories.map((category, _id) => {
      let subcategories = category.subcategories.map((subcategory, _id) => {
        return (
          <li 
          key={"subcategory" + subcategory._id}          
          style={[styles.subCategory, styles.item]}>{subcategory.title}</li>
        );
      });

      return (
        <div style={styles.base}>
          <ul style={{ padding: "0", margin: "0px" }}>
            <li
              key={"category" + _id}
              style={[
                styles.item,
                styles.category,
                {
                  borderLeft: category.show
                    ? `5px solid #C61017`
                    : "5px solid white",
                  backgroundColor: category.show ? `#FAFAFA` : "white"
                }
              ]}
              onClick={this.toggleSubItem.bind(this, _id)}
              _id={_id}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "90% 10%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "90%"
                }}
              >
                {category.title}
                <span
                  style={[
                    category.show ? styles.rotateIcon : "",
                    { display: "inline-block" }
                  ]}
                >
                  <Icon icon="typcn typcn-chevron-right" color="secondary" />
                </span>
              </div>
            </li>
            <div style={[{ display: category.show ? "block" : "none" }]}>
              {subcategories}
            </div>
          </ul>
        </div>
      );
    });

    return <div>{categoryList}</div>;
  }
}
export default Radium(Categories);
