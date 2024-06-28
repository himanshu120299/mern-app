const mongoose = require('mongoose')

const { Schema } = mongoose;
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('User',UserSchema)
// default collection name will be users, all letters in lower case with a s