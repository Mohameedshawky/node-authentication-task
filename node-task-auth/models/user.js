const mongoose = require('mongoose');
const {isEmail} = require('validator');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:{
        type:String,
        required:[true,'please enter your name']
        },
    email:{
        type:String,
        required:[true,'please enter your email'],
        unique:true,
        //validate:[isEmail,'please enter a valid email']

        },
    password:{
        type:String,
        required:[true,'please enter your password'],
        //minLength:[6,'please password must be at least 6 character']
    }
});

const User = mongoose.model('user',userSchema);

module.exports = User ;