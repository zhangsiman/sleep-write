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
四、应用静态文件，比如图片，css文件等静态文件
```
1.mkdir 名叫public的文件夹
2.app.use(express.static('public'))使用中间件引用
3.将图片、css文件等放到public文件夹中
4.可以在浏览器中敲localhost:4000/public/图片名
5.相对应的图片就会在浏览器中显示出来
```
五、建立一个数据模型
```
1.mkdir 名叫 modles 的文件
2.在modles文件中，建立数据模型，命名根据情况自定（我用的是post)
3.post.js 文件的内容
const mongoose =require('mongoose');
const  Schema = mongoose.Schema;

var postSchema=mongoose.Schema({
  name:{ type:String},
  title:{type:String},
  content:{type:String}
})
module.exports = mongoose.model('Post',postSchema);

上面的Post 会自动匹配到本地数据库中的posts集合

4.index.js中的应用
 先引用 const Post =require ('./models/post.js')
 在api中引用的方法：
 var cat=new Post();
 cat.name=req.body.name;
 cat.title=req.body.title;
 cat.content=req.body.content;
 cat.save();

 因为要有请求体，所以要装包叫body-parser，然后引用 const bodyParser=require('body-parser');
 ```
 六、获取数据库的内容
 ```
 1.app.get('/posts',function(req,res){
   Post.find().exec(function(err,posts){
     res.send(posts:posts)
   })
   console.log('success');
 })

 Post会自动匹配到本地数据库中的posts集合
 exec 是查找成功之后就执行下面的函数
 ```
 七、基本路由，http 的请求方法
 ```
 1、得到所有博客
  app.get('/posts',function(req,res){
  res.send('get all posts')
  })
  2、得到一篇博客
    app.get('/posts/:id',function(req,res){
      res.send('get a post')
    })
  3、删除一篇博客
    app.delete('/posts/:id',function(req,res){
      res.send('delete a post')
    })
  4、更新一篇博客
    app.put('/posts/:id',function(req,res){
      res.send('put a post')
    })
  ```
  八、引用路由文件
  ```
  1、mkdir routes.js
  2、const Post=require('./models/post.js');
    module.exports=function(app){
      里面的内容为所有的路由，例如：app.get('/',function(req,res){res.send('success')})
      这就是一个路由
    }
  3、在index.js中引用 const Routes=require('./routes.js')
  4.Routes(app);将这个语句替换掉之前写的所有的路由
  ```
