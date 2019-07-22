const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{
        type:String,
        unique:true,
        minlength:3,
        required:true,
        trim:true
    }
},
{
    timestamps:true
}
);

const User = mongoose.model('User',UserSchema);

module.exports = User;