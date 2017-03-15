

exports.generatetoken=
    function(clid,psscode)
{
    
    
    var read = require('read-yaml');

var config = read.sync('./configuration/configuration.yaml');
var status_config = config.ICICICredentials;

 
 

var Client = require('node-rest-client').Client;

var client=new Client();

var urlt ="http://corporate_bank.mybluemix.net/corporate_banking/mybank/authenticate_client";


var data1;
var loc_clientid=status_config.ClientId;
var loc_password=status_config.ParticipantAccessCode;

var args = {
	parameters: { client_id:loc_clientid, password:loc_password},
	headers: { "Content-Type": "application/json" }
};


client.registerMethod("jsonMethod", urlt, "GET");
 
client.methods.jsonMethod(args,function (data) {
	// parsed response body as js object 
    if(Buffer.isBuffer(data))
    {
    data = data.toString('utf8');
    }
    data1= data;
});
 console.log(data1);
  return data1;
};


