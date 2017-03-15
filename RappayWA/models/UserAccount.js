
var mongoose = require('mongoose');
var crypto = require('crypto');


var Schema = mongoose.Schema;



var UserAccountSchema = new Schema({
      Username:{
          type: String,
          required:true
        //  ref: 'User'
    
      },
        Accountno: {
            type: String,
            required: true
        },
         Cardno : {
            type: String
        },
        ClientID: {
            type: String,
            required: true
        },
        Passcode:
        {
          type:String  
        },
        CustID:{
            type:String  
        },
        Token: {
            type: String
        },
        Isactive: {
            type: Boolean,
            default: true
        }
});

module.exports=mongoose.model('UserAccount',UserAccountSchema);