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
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'));

///#####################################################
///#######          Import Seed           #############
///####################################################
app.get('/seed',(req,res)=>{
  Exercise.create(Seed,(err,data)=>{
    res.send(data)
  })
})


///#####################################################
///#######          Routes           #############
///####################################################

///#######        3 New Route          #############
app.get('/new', (req,res)=>{
  res.render('new.ejs')
})

///#######        1 Index Route           #############
app.get('/', (req,res)=>{
  Exercise.find({},(err,allExercise)=>{
      res.render('index.ejs', {data:allExercise})
  })
})
///#######        2 Show Route           #############
app.get('/:id', (req,res)=>{
  Exercise.findById(req.params.id,(err,allExercise)=>{
      res.render('show.ejs', {data:allExercise})
  })
})

///#######        4 Create Route           #############
app.post('/',(req,res)=>{
  Exercise.create(req.body, (err,createdExercise)=>{
    res.redirect('/')
  })
})
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
