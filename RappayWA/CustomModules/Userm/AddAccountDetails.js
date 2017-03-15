
exports.AddAccountDetails = function (req, res, next) {

    'use strict';

    // Load Required NPM Modules
    var mongoose = require('mongoose');
    var _ = require('lodash');
    var should = require('should');
    var assert = require('assert');
    var read = require('read-yaml');
   
    
     //var gettoken = require('../Icicim/Bankgeneratetoken').generatetoken;

    // Load Mongoose Models
    var newUserAccount = require('../../models/UserAccount');
   
   
    // Load Necessary File Dependencies


    // Load Configurations
    var config = read.sync('./configuration/configuration.yaml');
    var status_config = config.StatusMessages;

    // Load Sync and User Variables
    //var user = req.User;
 //   var sync = (req.body.sync) ? req.body.sync : false;

    // Load User Provided Variables
var loc_Username=req.body.Username;
 var loc_Accountno=req.body.Accountno;
var loc_Cardno=req.body.Cardno;
var loc_ClientID=req.body.ClientID;
var loc_Passcode=req.body.Passcode;
var loc_CustID=req.body.CustID;
var loc_Token=req.body.Token;
   
   
   
   var newUserAccount1=new newUserAccount();
 
 // newUserAccount1.Token=loc_Token;
 newUserAccount1.Username=loc_Username;
 newUserAccount1.Accountno=loc_Accountno;
 newUserAccount1.Cardno=loc_Cardno;
 newUserAccount1.ClientID=loc_ClientID;
newUserAccount1.Passcode=loc_Passcode;
newUserAccount1.CustID=loc_CustID;

if(!loc_token)
{
newUserAccount1.Token="token"
}
else
{
    newUserAccount1=loc_Token;
    
}
     
    newUserAccount1.save(
        function(err){
            if(err)
            {
                console.log('error1');
                console.log(err);
            res.send(err);
 
           }
            res.json({message:'user Created!',
                       object:newUserAccount1        
    });
        }
        
        
    );
   
    
    console.log('after save');
   
    
    
}