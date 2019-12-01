import React, { Component } from 'react';
import Content from '../Sub_Components/Content';
import Footer from '../Sub_Components/Footer';
import Axios from 'axios';

/*
    A simple component used to house the more complex components for display
    Acts as the front or homepage
*/

class Homepage extends Component {

    render() {
        return (
            <div className="Homepage">
                
                <Content/>

                <Footer/>   

            </div>
        )
    }

}

export default Homepage;