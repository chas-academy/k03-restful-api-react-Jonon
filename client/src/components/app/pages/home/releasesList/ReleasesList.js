import React, { Component } from 'react'
import Icon from '../../../icons/Icon';
import Radium from "radium";
import MobileList from './list/MobileList';
import TabletList from './list/TabletList';
import DesktopList from './list/DesktopList';

 class ReleasesList extends Component {
        constructor(props) {        
        super(props);
        this.state = {
            width: window.innerWidth
        }
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      }
      
      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };
    
    
    render() {
        let {width} = this.state;
        const isMobile = width <= 768;
        const isTablet = width > 768 && width <= 1024;
       
        if (isMobile) {
            return (
                <MobileList />
              );
        }
        if (isTablet) {
            return (
                <TabletList />
              );
        } else {
            return (
                <DesktopList />
              );
        }
    }
}

export default Radium(ReleasesList);