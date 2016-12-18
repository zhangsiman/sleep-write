const express= require ('express');
const app= express();
const mongoose =require('mongoose')
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/digicity')
var db=mongoose.connection;
db.on('error',console.log);
db.once('open',function(){
  console.log('success');
})

app.get('/',function(req,res){
  console.log('hello word');
  res.send('hello word')
})

app.post('/posts',function(req,res){
  console.log(req.body)
})

app.listen(4000,function(){
  console.log('ccc');
})
