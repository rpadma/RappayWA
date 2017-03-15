
var mongoose = require('mongoose');
var crypto = require('crypto');


var Schema = mongoose.Schema;


var UserSchema = new Schema({
      Username:{
          type:String,
          required:true,
          unique:true
      },
        fullname: {
            type: String,
            required: true
        },
        hashed_password: {
            type: String,
            required: true
        },
        saltkey: {
            type: String,
            default: '1234'
        },
        join_date: {
            type: Date,
            default: Date.now(),
            required: true
        },
        mobile_number: {
            type: String
        
        },
        email: {
            type: String,
            required: true
      
        },
        gender: {
            type:String
          
        },
        image: {
            type: String
        },
        thumbnail: {
            type: String
        },
        Isactive: {
            type: Boolean,
            default: true
        },
        resetPasswordToken: {
            type: String
        },
        resetPasswordExpires: {
            type: Date
        }
});







//create Users table in mongodb 
module.exports=mongoose.model('Users',UserSchema);

//var Users=mongoose.model('User',UserSchema);
//module.exports.Users=Users;