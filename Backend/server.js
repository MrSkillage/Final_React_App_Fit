const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require("body-parser")

//Variable Contains link to Mongodb 
var exMongoDB = 'mongodb+srv://admin:admin@cluster0-6njjz.mongodb.net/myfitness?retryWrites=true&w=majority';
mongoose.connect(exMongoDB, { useNewUrlParser: true });

//Nescessary functions below to avoid varying errors
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Created a new Schema and called it exerciseSchema
var Schema = mongoose.Schema;
var exerciseSchema = new Schema({
    name: String,
    type: String,
    muscle: String,
    equipment: String,
    level: String,
    rating: String,
    img_1: String,
    img_2: String
})

//Variable holds model of schema created above
var ExerciseModel = mongoose.model('exercise', exerciseSchema);

//Used to listen to port, port connection
app.listen(port, () =>
    console.log('Example app listening on port ${port}!'))

//Post exercises to server, used to create new Exercises
app.post('/api/exercises', (req, res) => {

    /* Logs used for debugging
    console.log("It arrived here!!");
    console.log(req.body.name);
    console.log(req.body.type);
    console.log(req.body.muscle);
    console.log(req.body.equipment);
    console.log(req.body.level);
    console.log(req.body.rating);
    console.log(req.body.img_1);
    console.log(req.body.img_2);
    */

    //Creates a new Model with new information 
    ExerciseModel.create({
        name: req.body.name,
        type: req.body.type,
        muscle: req.body.muscle,
        equipment: req.body.equipment,
        level: req.body.level,
        rating: req.body.rating,
        img_1: req.body.img_1,
        img_2: req.body.img_2
    });
    res.json('Exercises Added!');
})

//Get all documents in Exercises
app.get('/api/exercises', (req, res, next) => {
    ExerciseModel.find((err, data) => {
        console.log(data);
        res.json({ exercises: data });
    });
})

//Gets the Exercise by ID
app.get('/api/exercises/:id', (req, res)=> {
    /*Used for debugging
    console.log('Get: ' + req.params.id);
    */

    //Uses find by Id function 
    ExerciseModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

//Gets exercise by ID and then updates accordingly
app.put('/api/exercises/:id', (req, res)=> {
    /* Used for debugging
    console.log("Edit: " + req.params.id);
    console.log(req.body);
    */

    //Uses update by Id function 
    ExerciseModel.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {new:true}, 
        (error, data)=>{
            res.json(data);
    })
})

//Gets exercise by ID and then deletes it
app.delete('/api/exercises/:id', (req, res)=> {
    /* Used for Debugging
    console.log(req.params.id);
    */
    ExerciseModel.deleteOne({_id: req.params.id}, (error, data) =>{
        res.json(data);
    })
})