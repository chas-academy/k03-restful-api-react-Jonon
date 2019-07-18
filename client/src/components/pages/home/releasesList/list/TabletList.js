import React, { Component } from 'react'

import './style.css';
import style from './styles';
import Radium from "radium";

class TabletList extends Component {
    constructor(props) {        
        super(props);
        this.state = {
            items: [
                "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/765356/765356._SX1280_QL80_TTD_.jpg",
                "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/232863/232863._SX1280_QL80_TTD_.jpg",
                "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/779028/779028._SX1280_QL80_TTD_.jpg",
                "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/765281/765281._SX1280_QL80_TTD_.jpg",
                "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/495991/495991._SX1280_QL80_TTD_.jpg",
                "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/694446/694446._SX1280_QL80_TTD_.jpg",
                "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/460929/460929._SX1280_QL80_TTD_.jpg",
                "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/755543/755543._SX1280_QL80_TTD_.jpg",
                "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/756917/756917._SX1280_QL80_TTD_.jpg",
            ],
            posters: [],
            idx: 0
        }
    }

    sortIntoArray = () => {
        let posterImages = [...this.state.items];
        const size = 4;
        
        const result = this.state.posters;
        for (var i=0;i<posterImages.length;i+=size)
        result.push( posterImages.slice(i,i+size) )

        this.setState({posters: result})
    }

    componentWillMount() {
        this.sortIntoArray();
    }

    nextSlide = () => {
        let increment = this.state.idx + 1

        this.setState({idx: increment})
    }

    prevSlide = () => {
        let increment = this.state.idx - 1
        this.setState({idx: increment})
    }

    render() {
        let {posters, idx} = this.state;
        let stringifyIdx = idx.toString();
        
        let poster = posters[stringifyIdx].map((item, index) => 
        <img src={item} alt="poster" style={style.poster} key={index}/>
        )

        return (
            <div style={style.container}>
            <div>
            <h2 style={style.title} >New Releases</h2>
            <div style={[style.posterContainer ]}>
                <div 
                 style={style.posterList} className="posterlist">
                    {poster}
                </div>
                <div style={style.buttons}>
                    <span className="typcn typcn-chevron-left" style={[style.slideButton, style.prevSlide]} onClick={this.prevSlide.bind(this)} ></span>
                    <span className="typcn typcn-chevron-right" style={[style.slideButton, style.nextSlide]} onClick={this.nextSlide.bind(this)} ></span>
                </div>
            </div>
            <h3 style={style.viewMoreLink}>View More</h3>
            </div>
            <div>
                <p>{this.state.splitIndex}</p>
                <h1>{this.state.windowWith}</h1>
            </div>
        </div>
          );
    }
}

export default Radium(TabletList);