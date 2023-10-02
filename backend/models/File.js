const mongoose=require('mongoose');
const {Schema}=require('mongoose');

const filesSchema = new mongoose.Schema({
    kind:String,
    id:String,
    name:String,
    mimeType:String

  });



const Files=mongoose.model('files',filesSchema);
module.exports=Files;