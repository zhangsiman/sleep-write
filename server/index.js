const express= require ('express');
const app= express();
const mongoose =require('mongoose')
const bodyParser=require('body-parser');
const Routes=require('./routes.js')
const Post =require ('./models/post.js')

app.use(bodyParser.urlencoded());//应用到from请求的时候
app.use(bodyParser.json());
app.use(express.static('public'))//应用静态文件

//与数据库链接
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/sleep-write')
var db=mongoose.connection;
db.on('error',console.log);
db.once('open',function(){
  console.log('success');
})
//结束

//引用api
Routes(app)
//结束

app.listen(4000,function(){
  console.log('ccc');
})
