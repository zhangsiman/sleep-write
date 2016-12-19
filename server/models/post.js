const mongoose =require('mongoose');
const  Schema = mongoose.Schema;


var postSchema=mongoose.Schema({
  name:{ type:String},
  title:{type:String},
  content:{type:String}
})
module.exports = mongoose.model('Post',postSchema);
