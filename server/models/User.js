const mongoose = require("mongoose");
const { schemaOptions } = require("./modelOptions");


const userSchema = new mongoose.Schema({
 
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    // role:{
    //     type:String,
    //     enum:["Admin", "Student", "Visitor"]
    // }
},schemaOptions);

module.exports = mongoose.model('User', userSchema);