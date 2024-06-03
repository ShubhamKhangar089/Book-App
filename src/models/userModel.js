import { Schema , model } from "mongoose";

const userSchema =new Schema({
     userName : {type:String , require:true},
     email : {type:String , require:true},
     password : {type:String , require:true},
     roles : {type:String ,enum:["admin", "user"] ,require:true},
},
{versionKey : false}
);

export const userModel =  model('users', userSchema);