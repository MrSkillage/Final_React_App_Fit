import React, { Component } from 'react';
import { Footer } from '../index';
import { Main } from '../Exercises/index';
import { muscles, exercises } from '../../store';


export default class Home extends Component {

    state = {
        exercises,
        category: '',
        exercise: []
    }

    getExercisesByMuscles() {
        return Object.entries(
            this.state.exercises.reduce((exercises, exercise) => {
                const { muscles } = exercise

                exercises[muscles] = exercises[muscles]
                    ? [...exercises[muscles], exercise]
                    : [exercise]

                    return exercises
            }, {})
        )
    }

    handleCategorySelected = category => {
        this.setState({
            category
        })
    }

    handleExerciseSelected = id => {
        this.setState(({ exercises }) => ({
            exercise: exercises.find(ex => ex.id == id)
        }))
    }

    render() {

        const exercises = this.getExercisesByMuscles(),
            { category, exercise } = this.state;

        return(
            <div className="Home">

                <Main
                    exercise={exercise}
                    exercises={exercises}
                    category={category}
                    onSelect={this.handleExerciseSelected}
                />

                <Footer
                    category={category}
                    muscles={muscles}
                    onSelect={this.handleCategorySelected}
                />

            </div>
        );
    }

} 
            