///#####################################################
///#######         Dependencies          #############
///####################################################
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Exercise = require('./models/schema.js');
const Seed = require('./models/seed.js');

let PORT = 3000;
if (process.env.PORT){
  PORT = process.env.PORT
}

///#####################################################
///#######          App Use          #############
///####################################################
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));


///#####################################################
///#######          Import Seed           #############
///####################################################
app.get('/seed',(req,res)=>{
  Exercise.create(Seed,(err,data)=>{
    res.redirect('/')
  })
})


///#####################################################
///#######          Routes           #############
///####################################################
///#######        3 New Route          #############

///#######        1 Index Route           #############
app.get('/', (req,res)=>{
  res.send('hello world')
})
///#######        2 Show Route           #############


///#######        4 Create Route           #############

///#######        5 Destroy Route           #############

///#######        6 Edit Route           #############

///#######        7 Update Route           #############










///#####################################################
///#######           Listener              #############
///####################################################
app.listen(PORT, ()=>{
  console.log('listening...');
})

mongoose.connect('mongodb+srv://codingstar:codingstar@project2.vyy5mxk.mongodb.net/?retryWrites=true&w=majority',()=>{
  console.log('connected to mongo');
})
