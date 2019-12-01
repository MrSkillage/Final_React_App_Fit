import React, { Component } from 'react';
import { Paper, Typography, List, ListItem, Button, ButtonGroup } from '@material-ui/core';
import Image from 'react-bootstrap/Image';
import Axios from 'axios';

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 900,
        overflow: 'auto'
    },
    Image: {
        padding: 2
    }
}

class ExerciseItems extends Component {

    constructor() {
        super();
        this.DeleteExercise = this.DeleteExercise.bind(this);
    }

    DeleteExercise(del){
        console.log("Delete Clicked!");
        Axios.delete('http://localhost:4000/api/exercises/'+this.props.exercise._id)
        .then()
        .catch();
    }

    render() {
        return (
            <div className="ExerciseItems">

                <Paper style={styles.Paper}>
                    <Typography
                        align='left'
                        display='block'
                        variant='h5'
                    >
                        {this.props.exercise.name}
                    </Typography>

                    <List>
                        <ListItem>
                            <Typography
                                color='primary'
                            >
                                Type: {this.props.exercise.type}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography
                                color='secondary'
                            >
                                Main Muscle Work: {this.props.exercise.muscle}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography
                                color='primary'
                            >
                                Equipment Need: {this.props.exercise.equipment}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography
                                color='secondary'
                            >
                                Level: {this.props.exercise.level}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography
                                color='primary'
                            >
                                Rating: {this.props.exercise.rating}
                            </Typography>
                        </ListItem>
                    </List>

                    <ButtonGroup 
                        variant="contained" 
                        aria-label="full-width contained primary button group"
                    >
                        <Button color="secondary" onClick={this.DeleteExercise}>Delete</Button>
                        <Button color="primary">Update</Button>
                    </ButtonGroup>

                    <Image style={styles.Image} src={this.props.exercise.img_1} rounded fluid />
                    <Image style={styles.Image} src={this.props.exercise.img_2} rounded fluid />

                </Paper>

            </div>
        );
    }

}

export default ExerciseItems;