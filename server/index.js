const express= require ('express');
const app= express();


app.get('/',function(req,res){
  console.log('hello word');
  res.send('hello word')
})


app.listen(4000,function(){
  console.log('success');
})
