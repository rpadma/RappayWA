
var mongoose = require('mongoose');
var crypto = require('crypto');


var Schema = mongoose.Schema;

var UserAccountSummary = new Schema({
      Username:{
          type:String,
          required:true
      },
        Accountno: {
            type: String,
            required: true
        },
        AccountType:{
            type:String,
            required:true
        },
        AccountStatus:{
            type:String,
            required:true
        },
        Cardno : {
            type: String
            required:true
        },
        ClientID: {
            type: String,
            required: true
        },
        Balance:{
            type:String,
            required:true
        },
        LastBalanceDate:{
            type:String,
            required:true
        },
        Isactive: {
            type: Boolean,
            default: true
        }
});

module.exports=mongoose.model('UserAccountSummary',UserAccountSummarySchema);