const mongoose = require('mongoose');

//Define the mongoDB connection URL

const mongoURL =   'mongodb://127.0.0.1:27017/hotels' 

//setup MonoDB connection  
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//Get the default connection
//Mongoose maintains a default connection object represnting mongoDB connection
const db = mongoose.connection;

//Define event listeners for database connection

db.on('connected',()=>{
    console.log('connected to MongoDB server');
});

db.on('error',()=>{
    console.log(' MongoDB  connection error');
});

db.on('disconnected',()=>{
    console.log('MongoDB is disconnected');
});

//export the database connection
module.exports=db;
