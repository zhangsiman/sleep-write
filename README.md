### eat-sleep-write case
- server 后台服务项目
- client 前端服务项目

**server**
一、用‘express’ 打印出‘hello word’
```
1.npm init 初始化为node项目
2.npm i express --save
3.创建index.js

const express =require ('express');
const app= express();


app.get('/',function(req,res){
  console.log('hello word');
})


app.listen(4000,function(){
  console.log('ccc');
});

4.后台启动 nodemon index.js或者node index.js
5.前台用curl localhost:4000/ 测试一下
```
二、连接数据库
```
1.安装mongoose npm i mongoose --save
2.在index.js中引用 const mongoose =require('mongoose')
3.连接到本地数据库 mongoose.connect('mongodb://localhost:27017/digicity');
4.映射到本地数据库 var db = mongoose.connection;
5.验证是否连接成功
db.on(error,console.log) 如果连接失败就报错
db.once('open',function(){console.log('success')})如果连接成功，后台就打印出success
```
三、新建一个api 发送Post请求
```
1.安装body-parser这个包 npm i body-parser --save
2.引用 const body-parser =require('body-parser')
3.引用关键件
  app.use(bodyParser.urlencoded());
  app.use(bodyParser.json());
4.app.post('/posts',function(req,res){
  console.log(req.body)
  })
5.在后台用curl 发请求
 curl -H "Content-Type:application/json" -X POST -d '{"username":"zhangsiman","content":"hello"}' http://localhost:4000/posts
6. 会在后台代码中打印出 {"username":"zhangsiman","content":"hello"}
```
