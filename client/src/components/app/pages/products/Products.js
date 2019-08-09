import React, { Component } from "react";
import Menu from "..//../Menu/Menu";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    let { width } = this.state;
    const isMobileAndIsTablet = width >= 1440;

    if (isMobileAndIsTablet) {
      return (
        <div>
          <Menu />
        </div>
      );
    } else {
        return (
            <div></div>
        );
    }
  }
}

export default Products;
