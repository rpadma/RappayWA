//var jwt = require('jwt-simple');
var mongoose = require('mongoose');
var read = require('read-yaml');

 var config = read.sync('./configuration/configuration.yaml');
 var status_config = config.StatusMessages;
 
 
 //Model and schema related to Users
var userModel = require('../../models/User');
var userSchema = require('mongoose').model('Users').schema;
var User = mongoose.model('Users');

var Authorization = {
    login:function(req,res,next)
    {
        'use strict';
        var username = req.body.username || '';
        var password = req.body.password || '';
        // check for empty strings
        if (username === '' || password === '') {
            // Set the Server Response to 'Unauthorized'
            res.status(401);
            // Respond with an Invalid Credentials JSON Message
            res.json({
                "status": 401,
                "message": status_config.invalidCredentials
            });
            // terminate the function
            return;
        }
    
     Authorization.validate(username, password, function (authorizedUser) {
            // If There is No Authenticated User that is Returned
            if (!authorizedUser) {
                // Set the Server Response Status to 'Unauthorized'
                res.status(401);
                // Respond with an Invalid Credentials JSON Message
                res.json({
                    "status": 401,
                    "message": status_config.invalidCredentials
                });
            }
            // If There is an Authenticated User that is Returned
            else if (authorizedUser) {
                // Set teh Server Response Status to 'OK'
                res.status(200);
                res.json({ "username":authorizedUser.Username,
                            "token": "token", 
                          "Message":"Authorized User"});
                // Generate and Issue an Authentication Token
             //   res.json(generateToken(authorizedUser));
            }
        });
    },
    
     validate: function (username, password, callback) {
        'use strict';
        //Checking whether user exist or not 
        User.findOne({"Username": username}, function (err, user) {
            if (err) throw err;
           
            else {
               
                var userObject = new User(user);
                
                if ( userObject.hashed_password==password) 
                callback(userObject.toJSON());
                // If the username and password is Not a Valid combination, return Null
                else callback(null);
            }
        });
    }

   
    };
        
        
module.exports = Authorization;
        
        
        
        

 