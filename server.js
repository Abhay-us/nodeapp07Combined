const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const userroute = require('./routes/userroute');

const app = express();
app.use(morgan('tiny'));

app.use(cors({ origin: 'http://localhost:5173' }));


const url = "mongodb://127.0.0.1:27017/user-management-system";

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

mongoose.connect(url);
const con = mongoose.connection;
con.on('open', () => {
    console.log('Db connection successful');
});

app.use("/", userroute);

app.get('/', (req, res) => {
    res.send("hello Guys , Welcome to my blog");
});


app.use((req, res, next) => {
    res.status(404).send("Page Not Found");
});


app.listen(5454, (req, res) => {
    console.log("Server is Running .");
});

