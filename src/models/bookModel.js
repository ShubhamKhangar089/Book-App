import {Schema, model}  from 'mongoose';

const bookSchema = new Schema({
  title : {type:String, require:true},
  author : {type:String, require:true},
  frontPageUrl : String,
  backPageUrl : String,
  pages : [{
    content : String,
    backGroundUrl :String
  }],
  userId : {type: Schema.Types.ObjectId, ref: 'users', required: true} 
},
{versionKey:false}
)

export const bookModel = model('books', bookSchema);