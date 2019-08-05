import React, { Component } from "react";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { name: "All", subcategories: [] },
        { name: "Marvel", subcategories: ["Doctor Aphra", "Doctor Strange"] }
      ]
    };
  }
  render() {
    let { categories } = this.state;

    let category = categories.map(item => {
      let subcategories = item.subcategories.map(item => <li>{item}</li>);
      return (
        <li>
          {item.name}
          {subcategories}
        </li>
      );
    });

    return (
      <div>
        <ul>{category}</ul>
      </div>
    );
  }
}
export default Categories;
