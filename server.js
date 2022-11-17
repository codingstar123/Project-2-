const express = require('express');
const app = express();

let PORT = 3000;
if (process.env.PORT){
  PORT = process.env.PORT
}

app.get('/', (req,res)=>{
  res.send('hello world')
})

app.listen(PORT, ()=>{
  console.log('listening...');
})
