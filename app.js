const express = require ('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const url = 'mongodb://localhost/UserDB'
// creating server
const app = express();

//creating connection with Database
mongoose.connect(url, {useNewUrlParser: true});
const con = mongoose.connection

//checking if connection is successfull or not
con.on('open',()=>{
    console.log('Connected...')
})

app.use(express.json());
// routes
app.use('/users',usersRouter);

// listening server
app.listen(8000,()=>{
    console.log('Servre is listening on port 8000');
})