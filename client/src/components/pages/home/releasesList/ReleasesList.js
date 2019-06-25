import React, { Component } from 'react'
import Icon from '../../../header/icons/Icon';
import style from "./styles"
import Radium from "radium";
import './style.css';
import MediaQuery from 'react-responsive';

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
            ],
            posters: [],
            windowWith: window.innerWidth,
            splitIndex: [3,9],
            
        }
    }

    handleResize = () => {
        this.setState({ windowWith: window.innerWidth })
        this.ChangeColumnSize();
      }


      componentDidMount() {
        this.handleResize()
        this.removeFromArr();
        window.addEventListener('resize', this.handleResize,)
      }
      
    
      componentDidUnmount() {
        this.handleResize()
        this.removeFromArr();
        window.removeEventListener('resize', this.handleResize);
      }

      removeFromArr() {
        let posters = this.state.items.splice(this.state.splitIndex[0],this.state.splitIndex[1])
        console.log("remove")
        
      }
      
      ChangeColumnSize() {
        if(this.state.windowWith < 768) {
            let column = this.state.splitIndex;
            column[0] = 3;
            this.setState({splitIndex: column})
        }
        else if(this.state.windowWith > 768 && this.state.windowWith < 1024) {
            let column = this.state.splitIndex;
            column[0] = 4;
            this.setState({splitIndex: column})
        } 
        else {
            let column = this.state.splitIndex;
            column[0] = 5;
            this.setState({splitIndex: column})
        }
        console.log("Add")
    }
    
    render() {
        let {items, width, splitIndex} = this.state;
        let poster = items.map((item, index) => 
        <img src={item.poster} alt="poster" style={style.poster} key={index}/>
        )
        console.log(window.innerWidth)

        

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
                        <span className="typcn typcn-chevron-left" style={[style.slideButton, style.prevSlide]} ></span>
                        <span className="typcn typcn-chevron-right" style={[style.slideButton, style.nextSlide]} ></span>
                    </div>
                </div>
                <h3 style={style.viewMoreLink}>View More</h3>
                </div>
                <div>
                    <p>{this.state.splitIndex}</p>
                    <h1>{this.state.windowWith}</h1>
                </div>
            </div>
        )
    }
}

export default Radium(ReleasesList);