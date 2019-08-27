import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    const {match: {params}} = this.props;

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
      <div>
        <h3>{items.title}</h3>
      </div>
    );
  }
}

export default Product;
