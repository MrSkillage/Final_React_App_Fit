import React, { Component } from 'react';
import Exercises from '../Exercises/Exercises';
import Axios from 'axios';

/*
    Read function calls DidMount and uses Axios to retrieve the database information as json
    it is then parsed on the server and the information is set to the state {exercise}
    Renders a call of the Exercise component giving it the newly updated state {exercise}
*/

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