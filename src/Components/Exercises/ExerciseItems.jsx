import React, { Component } from 'react';
import { Paper, Typography, List, ListItem, Button, ButtonGroup } from '@material-ui/core';
import Image from 'react-bootstrap/Image';
import Axios from 'axios';
import { Link } from 'react-router-dom';

//Styles used for Paper and Image instead of created a new css file
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

    //constructor binds the delete function 
    constructor() {
        super();
        this.DeleteExercise = this.DeleteExercise.bind(this);
    }

    //Delete function 
    DeleteExercise(del){
        /* Used for Debugging
        console.log("Delete Clicked!");
        */
       //Axios called on the delte function located in server.js and passes it the id of the selected exercise
        Axios.delete('http://localhost:4000/api/exercises/'+this.props.exercise._id)
        .then()
        .catch();
    }

    /*  Renders all the gathered information from the server database and lays
        it out to be viewed asteically
    */
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
                        <ListItem>
                            <Button variant="contained" color="secondary" onClick={this.DeleteExercise}>Delete</Button>
                            <Link to={"/edit/" + this.props.exercise._id} className="btn btn-primary">Update</Link>
                        </ListItem>
                    </List>

                    <Image style={styles.Image} src={this.props.exercise.img_1} rounded fluid />
                    <Image style={styles.Image} src={this.props.exercise.img_2} rounded fluid />

                </Paper>

            </div>
        );
    }

}

export default ExerciseItems;