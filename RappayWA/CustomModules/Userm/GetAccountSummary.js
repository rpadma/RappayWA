exports.GetAccountSummary = function (req, res, next) {

    'use strict';

    // Load Required NPM Modules
    var mongoose = require('mongoose');
    var _ = require('lodash');
    var should = require('should');
    var assert = require('assert');
    var read = require('read-yaml');

    // Load Mongoose Models
    var newUserAccount= require('../../models/UserAccount');
   
   
    // Load Necessary File Dependencies


    // Load Configurations
    var config = read.sync('./configuration/configuration.yaml');
    var status_config = config.StatusMessages;

    // Load Sync and User Variables
    //var user = req.User;
 //   var sync = (req.body.sync) ? req.body.sync : false;

    // Load User Provided Variables
    
 var loc_Username=req.params.Username;
 //var loc_fullname=req.body.fullname;
 //var loc_hashed_password=req.body.hashed_password;
 //var loc_mobile_number=req.body.mobile_number;
 //var loc_email=req.body.email;
 //console.log('befor user object ');
 //console.log('after user object1');
 
  console.log('after user object');
   

  
newUserAccount.findOne({Username:loc_Username}, function(err, foundUser){

        if(err){
            console.log(err);
            res.status(500).jsonp({message: "Error fetching resource"});
        }
        else{
            var responseobject = { 
                                    username    : loc_Username,
                                    details     : foundUser
                                };
            
            res.status(200).jsonp(responseobject);
        }
    });
   
    
    console.log('after save');
   
    
    
}
