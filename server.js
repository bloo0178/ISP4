'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api.js');

const mongoose = require('mongoose');
const app = express();

const CONNECTION_STRING = process.env.DB;
mongoose.connect(CONNECTION_STRING);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config();

app.use('/public', express.static(process.cwd() + '/public'));

//Index page
app.route('/')
    .get((req, res) => {
        res.sendFile(process.cwd() + '/views/index.html');
    });

//Routing for API
apiRoutes(app);

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port " + process.env.PORT);
});

module.exports = app; //needed for testing





