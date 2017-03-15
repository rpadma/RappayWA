var read = require('read-yaml');

var config = read.sync('./configuration/configuration.yaml');
var status_config = config.ICICICredentials;

 
 

var Client = require('node-rest-client').Client;

var generateBalance={
genbal:function(preq,pres)
{

var client=new Client();

var urlt ="http://retailbanking.mybluemix.net/banking/icicibank/balanceenquiry";


var loc_clientid =preq.headers.clientid ;
var loc_token=preq.headers.token;
var loc_accountno=preq.headers.accountno;

console.log('error bal1 ');
var args = {

	parameters: { client_id:loc_clientid, token:loc_token,accountno:loc_accountno },
    headers: { "Content-Type": "application/json" }
   //headers: { "test-header": "client-api" } 
};

client.registerMethod("jsonMethod", urlt, "GET");
 
client.methods.jsonMethod(args,function (data) {
   

    
    console.log(data);
   // console.log(response);
	// parsed response body as js object 
    if(Buffer.isBuffer(data))
    {
    data = data.toString('utf8');
    }
    pres.json(data);
});
 

}
};


module.exports = generateBalance;