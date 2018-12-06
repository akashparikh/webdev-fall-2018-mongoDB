var express = require('express');
const mongoose = require('mongoose');

// const test = require('./data/test');


var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

const db  = require('./data/db').mongoURI;


mongoose.connect(db)
    .then(conn => console.log('mongoDB connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('hello'));

const universityService=require('./data/services/university.service.server')(app);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
