import React, { Component } from 'react';
import MovieItem from './MovieItem';

class Movies extends Component {

    render() {
        return this.props.movies.map((movie) => {
            return <MovieItem movie={movie}/>
        });
    }

}

export default Movies;