import React, { Component } from 'react';
import Exercises from '../Exercises/Exercises';
import Axios from 'axios';

class Read extends Component {

    state = {
        exercises: []
    }

    componentDidMount() {
        Axios.get('http://localhost:4000/api/exercises')
            .then(response => {
                this.setState({ exercises: response.data.exercises })
                console.log(response.data.exercises);
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        return (
            <div className="Read">
                <Exercises exercises={this.state.exercises} />
            </div>
        );
    }

}

export default Read