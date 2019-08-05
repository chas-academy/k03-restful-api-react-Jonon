import React, { Component } from "react";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, show: false, name: "All", subcategories: [] },
        {
          id: 2,
          show: false,
          name: "Marvel",
          subcategories: ["Doctor Aphra", "Doctor Strange"]
        },
        {
          id: 2,
          show: false,
          name: "DC",
          subcategories: ["The Killing Joke", "Wonder Woman"]
        },
        {
          id: 2,
          show: false,
          name: "Dark Horse",
          subcategories: ["Aliens", "Predator"]
        }
      ]
    };
  }

  toggleSubItem = id => {
    let newArray = {...this.state.categories}
    newArray[id].show = !newArray[id].show;
    this.setState({newArray})
    
  };
  render() {
    let { categories } = this.state;

    let category = categories.map((item, id) => {
      let subcategories = item.subcategories.map(item => <li>{item}</li>);
      return (
        <div>
          <li
            onClick={this.toggleSubItem.bind(this, id)}
            id={id}
          >
            {item.name}
          </li>
          <li style={{ display: item.show ? "block" : "none" }}>
            {subcategories}
          </li>
        </div>
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
