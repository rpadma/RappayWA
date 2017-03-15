// Load Necessary NPM Modules
var express = require('express');
var router = express.Router();
//var newUser = require('../models/User').User;
 //var newUser = require('../models/User');
var Client = require('node-rest-client').Client;


/* GET healthtest */
router.get('/healthtest', function(req, res, next) {
  res.json({ message: "Status Okay" });
});


//Authorization
var authorization = require('../CustomModules/Authorization/Authorization').login;

//calling adduser function  in custommodules
var add_User = require('../CustomModules/Userm/AddUsers').AddUsers;
var get_User=require('../CustomModules/Userm/getUserDetails').GetUserData;

//var generate_token=require('../CustomModules/Icicim/Bankgeneratetoken').gen;
var generate_balance=require('../CustomModules/Icicim/GetAccountBalance').genbal;
var add_useraccount=require('../CustomModules/Userm/AddAccountDetails').AddAccountDetails;
var get_useraccountsummary=require('../CustomModules/Userm/GetAccountSummary').GetAccountSummary;

// Api Url request
router.post('/api/login',authorization);
router.post('/api/register', add_User);
//router.get('/api/gettoken',generate_token);
router.get('/api/getuser/:Username',get_User);
router.get('/api/getbalance',generate_balance);
router.get('/api/getuseraccountsummary/:Username',get_useraccountsummary);

router.post('/api/AddUserAccount', add_useraccount);


module.exports = router;