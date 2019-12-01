import React, { Component } from 'react';
import Axios from 'axios';

class Edit extends Component {

    constructor() {
        super();

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeMuscle = this.onChangeMuscle.bind(this);
        this.onChangeEquip = this.onChangeEquip.bind(this);
        this.onChangeLevel = this.onChangeLevel.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
        this.onChangeImg_1 = this.onChangeImg_1.bind(this);
        this.onChangeImg_2 = this.onChangeImg_2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            _id: '',
            name: '',
            type: '',
            muscle: '',
            equipment: '',
            level: '',
            rating: '',
            img_1: '',
            img_2: ''
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:4000/api/exercises/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    name: response.data.name,
                    type: response.data.type,
                    muscle: response.data.muscle,
                    equipment: response.data.equipment,
                    level: response.data.level,
                    rating: response.data.rating,
                    img_1: response.data.img_1,
                    img_2: response.data.img_2
                })
            })
            .catch();
    }

    //Set Name
    onChangeName(event) {
        this.setState({ name: event.target.value })
    }
    //Set Type
    onChangeType(event) {
        this.setState({ type: event.target.value })
    }
    //Set Muscle
    onChangeMuscle(event) {
        this.setState({ muscle: event.target.value })
    }
    //Set Equipment
    onChangeEquip(event) {
        this.setState({ equipment: event.target.value })
    }
    //Set Level
    onChangeLevel(event) {
        this.setState({ level: event.target.value })
    }
    //Set Rating
    onChangeRating(event) {
        this.setState({ rating: event.target.value })
    }
    //Set Image 1
    onChangeImg_1(event) {
        this.setState({ img_1: event.target.value })
    }
    //Set Image 2
    onChangeImg_2(event) {
        this.setState({ img_2: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();

        //Constant newExcercise stores the new data to be uploaded below
        const newExercise = {
            name: this.state.name,
            type: this.state.type,
            muscle: this.state.muscle,
            equipment: this.state.equipment,
            level: this.state.level,
            rating: this.state.rating,
            img_1: this.state.img_1,
            img_2: this.state.img_2
        }

        Axios.put('http://localhost:4000/api/exercises/' + this.state._id, newExercise)
            .then()
            .catch();

        this.state = {
            _id: '',
            name: '',
            type: '',
            muscle: '',
            equipment: '',
            level: '',
            rating: '',
            img_1: '',
            img_2: ''
        }

    }

    render() {
        return (
            <div className="Edit">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Exercise Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Exercise Type: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.type}
                            onChange={this.onChangeType}
                        />
                    </div>
                    <div className="form-group">
                        <label>Exercise Muscle: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.muscle}
                            onChange={this.onChangeMuscle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Exercise Equipment: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.equipment}
                            onChange={this.onChangeEquip}
                        />
                    </div>
                    <div className="form-group">
                        <label>Exercise Level: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.level}
                            onChange={this.onChangeLevel}
                        />
                    </div>
                    <div className="form-group">
                        <label>Exercise Rating: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.rating}
                            onChange={this.onChangeRating}
                        />
                    </div>
                    <div className="form-group">
                        <label>Exercise Image Source 1: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.img_1}
                            onChange={this.onChangeImg_1}
                        />
                    </div>
                    <div className="form-group">
                        <label>Exercise Image Source 2: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.img_2}
                            onChange={this.onChangeImg_2}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Exercise" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        )
    }
}

export default Edit;