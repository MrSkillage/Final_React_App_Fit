import React, { Component } from 'react';
import ExerciseItems from './ExerciseItems';

class Exercises extends Component {

    render() {
        return this.props.exercises.map( (exercise) => {
            console.log(exercise);
            return <ExerciseItems exercise={exercise} />
        });
    }

}

export default Exercises;