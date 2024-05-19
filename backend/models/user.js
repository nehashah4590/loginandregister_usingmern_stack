const mongoose = require("mongoose");

//Schema
const registerUser = new mongoose.Schema({
    firstName:{
      type:String,
      required:true,
    },
    lastName:{
      type:String,
      required:true,
    },
    email:{
      type:String,
      required:true,
      unique:true,
    },
    password:{
      type:String,
      required:true,
    },
  },{timestamps:true});
  
  const User = mongoose.model("user", registerUser);

  module.exports = User; 