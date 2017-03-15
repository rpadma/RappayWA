
exports.AddUsers = function (req, res, next) {

    'use strict';

    // Load Required NPM Modules
    var mongoose = require('mongoose');
    var _ = require('lodash');
    var should = require('should');
    var assert = require('assert');
    var read = require('read-yaml');

    // Load Mongoose Models
    var newUser = require('../../models/User');
   
   
    // Load Necessary File Dependencies


    // Load Configurations
    var config = read.sync('./configuration/configuration.yaml');
    var status_config = config.StatusMessages;

    // Load Sync and User Variables
    //var user = req.User;
 //   var sync = (req.body.sync) ? req.body.sync : false;

    // Load User Provided Variables
    
 var loc_Username=req.body.Username;
 var loc_fullname=req.body.fullname;
 var loc_hashed_password=req.body.hashed_password;
 var loc_mobile_number=req.body.mobile_number;
 var loc_email=req.body.email;
 console.log('befor user object ');
 console.log('after user object1');
   var newUser1=new newUser();
  console.log('after user object');
   
 newUser1.Username=loc_Username;
 newUser1.fullname=loc_fullname;
 newUser1.hashed_password=loc_hashed_password;
 newUser1.mobile_number=loc_mobile_number;
 newUser1.email=loc_email;
  
  
  console.log('before save');      
    newUser1.save( function(err){
            if(err)
            {
                console.log(err);
             var responseObject = {message : "Error!"};
               return   res.status(500).send(responseObject);
 
           }
           else{
                 
            var responseObject = {  message : "Successfully Registered"};
                    res.status(200).json(responseObject);
           }
        
    }      
    );
   
    
    console.log('after save');
   
    
    
}