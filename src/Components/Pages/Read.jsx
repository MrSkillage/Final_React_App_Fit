import React, { Component } from 'react';
import Movies from './Movies';
import Axios from 'axios';
import { responsiveFontSizes } from '@material-ui/core';

class Read extends Component {

    state = {movies: []}

    componentDidMount() {
        Axios.get('http://localhost:4000/api/movies')
        
        //These lines determine how the json is read
        //response.data.Search = Search is a table in the json!
        .then(response => {
            this.setState({ movies: response.data.movies });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="Read">
                <h1>Read Component</h1>

                <Movies movies={this.state.movies} />

            </div>
        )
    }
}

export default Read;