///#####################################################
///#######         Dependencies          #############
///####################################################
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const test = require('./models/schema.js');
const test1 = require('./models/seed.js');

let PORT = 3003;
if (process.env.PORT){
  PORT = process.env.PORT
}

///#####################################################
///#######          App Use          #############
///####################################################
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
// app.use(express.static('public'));
// app.use(methodOverride('_method'));
app.use(express.json());
app.use(methodOverride('_method'));

///#####################################################
///#######          Import Seed           #############
///####################################################
app.get('/seed',(req,res)=>{
  test.create(test1,(err,data)=>{
    res.send(data)
  })
})


///#####################################################
///#######          Routes           #############
///####################################################
///#######        3 New Route          #############

///#######        1 Index Route           #############
app.get('/', (req,res)=>{
  res.send('Hello?')
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

mongoose.connect('mongodb+srv://star:HdaNcn7ArQrVJeam@exerciseproject.4ry2dxj.mongodb.net/?retryWrites=true&w=majority',()=>{
  console.log('connected to mongo');
})

// mongoose.connect('mongodb://localhost:27017/exercise',()=>{
//   console.log("Connection is connected");
// });
