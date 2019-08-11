import React, { Component } from "react";
import Radium from "radium";
import style from "./style";
import Button from "../../../buttons/Button";
import styles from "../../../buttons/style";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [
        {
          id: 1,
          title: "Aliens: Rescue #1",
          poster:
            "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/764527/764527._SX1280_QL80_TTD_.jpg",
          publisher: "Darke Horse",
          price: "1.55€"
        },
        {
          id: 2,
          title: "Predator #1: Concrete Jungle",
          poster:
            "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/281612/281612._SX1280_QL80_TTD_.jpg",
          publisher: "Darke Horse",
          price: "1.86€"
        },
        {
          id: 3,
          title: "Justice League Dark (2018-) #12",
          poster:
            "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/779048/779048._SX1280_QL80_TTD_.jpg",
          publisher: "DC",
          price: "1.99€"
        },
        {
          id: 4,
          title: "Aquaman (2016-) #51",
          poster:
            "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/789479/789479._SX1280_QL80_TTD_.jpg",
          publisher: "DC",
          price: "1.99€"
        },
        {
          id: 5,
          title: "Wonder Woman (2016-) #72",
          poster:
            "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/778953/778953._SX1280_QL80_TTD_.jpg",
          publisher: "DC",
          price: "1.99€"
        },
        {
          id: 6,
          title: "Batman: The Killing Joke",
          poster:
            "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/48363/DIG010055_2._SX1280_QL80_TTD_.jpg",
          publisher: "DC",
          price: "2.00€"
        },
        {
          id: 7,
          title: "Promethee 13:13 #1",
          poster:
            "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/722856/722856._SX1280_QL80_TTD_.jpg",
          publisher: "Delcourt",
          price: "0.59€"
        },
        {
          id: 8,
          title: "Death: The Deluxe Edition",
          poster:
            "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/50534/DIG012040_2._SX1280_QL80_TTD_.jpg",
          publisher: "Vertigo",
          price: "1.99"
        },
        {
          id: 9,
          title: "Venom vs. Carnage #1",
          poster:
            "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/1082/APR041663._SX1280_QL80_TTD_.jpg",
          publisher: "Marvel",
          price: "3.99€"
        }
      ]
    };
  }
  render() {
    let { issues } = this.state;
    let comics = issues.map(item => {
      return (
        <div style={[{display: "flex", flexDirection: "column"}, style.posterBox]} key={item.id} >
        <div style={{flex: "1"}} >
          <li style={{padding: "1rem"}} >
              <img src={item.poster} style={style.image} />
              <h3 style={[style.posterText, style.title]}>{item.title}</h3>
              <h4 style={[style.posterText, style.price]}>{item.price}</h4>
          </li>
          
        </div>
        <Button
              title="Add to cart"
              kind="primary"
              width="100%"
              size="md"
            /> 
        </div>
      );
    });
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <ul style={[style.posterContainer,]}>{comics}</ul>
        </div>
      </div>
    );
  }
}

export default Radium(ProductList);
