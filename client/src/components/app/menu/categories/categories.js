import React, { Component } from "react";
import styles from "./style";
import Radium from "radium";
import Subcategories from "./Subcategories";
import Icon from "../../icons/Icon";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        
      ]
    };
  }

  componentDidMount() {
    fetch("/category")
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

    console.log(categories)

    let category = categories.map((item, _id) => {
      return (
        <div style={styles.base}>
          <ul style={{ padding: "0", margin: "0px" }}>
            <li
              key={"category" + _id}
              style={[
                styles.item,
                styles.category,
                {
                  borderLeft: item.show
                    ? `5px solid #C61017`
                    : "5px solid white",
                  backgroundColor: item.show ? `#FAFAFA` : "white"
                }
              ]}
              onClick={this.toggleSubItem.bind(this, _id)}
              _id={_id}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "90% 10%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "90%"
                }}
              >
                {item.title}
                <span
                  style={[
                    item.show ? styles.rotateIcon : "",
                    { display: "inline-block" }
                  ]}
                >
                  <Icon icon="typcn typcn-chevron-right" color="secondary" />
                </span>
              </div>
            </li>
            <div style={[{ display: item.show ? "block" : "none" }]}>
              <Subcategories publisher={item.name} />
            </div>
          </ul>
        </div>
      );
    });

    return <div>{category}</div>;
  }
}
export default Radium(Categories);
