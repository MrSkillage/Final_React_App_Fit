import React, { Component } from 'react';
import ExerciseItems from './ExerciseItems';

class Exercises extends Component {

    /* Used to simple map the gathered data from the server and pass it along
        to be render individually by ExerciseItems
    */
    render() {
        return this.props.exercises.map( (exercise) => {
            console.log(exercise);
            return <ExerciseItems exercise={exercise} />
        });
    }

}

export default Exercises;