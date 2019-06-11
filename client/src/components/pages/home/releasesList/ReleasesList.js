import React, { Component } from 'react'
import style from "./styles"
import Radium from "radium";

 class ReleasesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
               {poster: "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/765356/765356._SX1280_QL80_TTD_.jpg"},
               {poster: "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/232863/232863._SX1280_QL80_TTD_.jpg"},
               {poster: "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/779028/779028._SX1280_QL80_TTD_.jpg"},
               {poster: "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/765281/765281._SX1280_QL80_TTD_.jpg"},
               {poster: "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/460929/460929._SX1280_QL80_TTD_.jpg"},
               {poster: "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/694446/694446._SX1280_QL80_TTD_.jpg"},
               {poster: "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/460929/460929._SX1280_QL80_TTD_.jpg"},
               {poster: "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/755543/755543._SX1280_QL80_TTD_.jpg"},
               {poster: "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/756917/756917._SX1280_QL80_TTD_.jpg"},
            ]
        }
    }

    

    render() {
        let {items} = this.state;
        
        return (
            <div style={style.container}>
                <div style={style.posterList}>
                    {items.map((item, index) => 
                    <img src={item.poster} style={style.poster} key={index}/>
                    )}
                </div>
            </div>
        )
    }
}

export default Radium(ReleasesList);