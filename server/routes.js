const Post=require('./models/post.js')
module.exports=function(app){

  app.get('/',function(req,res){
    console.log('hello word');
    res.send('hello word')
  })

  //获取数据库中的posts集合
  app.get('/posts',function(req,res){
    Post.find().exec(function(err,posts){
      res.send({posts:posts})
    })
    console.log('success');
  })//Post 会匹配数据库中的posts集合

  app.post('/posts',function(req,res){
    var cat=new Post();
    cat.name=req.body.name;
    cat.title=req.body.title;
    cat.content=req.body.content;
    cat.save();
    console.log(req.body)
  })


  //基本路由 http的请求方法
//得到所有博客
app.get('/posts',function(req,res){
  res.send('get all posts')
})
//得到一篇博客
app.get('/posts/:id',function(req,res){
  res.send('get a post')
})
//删除一篇博客
app.delete('/posts/:id',function(req,res){
  res.send('delete a post')
})
//更新一篇博客
app.put('/posts/:id',function(req,res){
  res.send('put a post')
})
//结束
}
