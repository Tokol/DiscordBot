const fetch = require('node-fetch');	const fetch = require('node-fetch');
const Discord = require('discord.js');	const Discord = require('discord.js');


	module.exports = {
 	    name: 'currency',
      description: "This command shows a currency!",
       execute(message, args){
        let date_ob = new Date();	
        let date = ("0" + date_ob.getDate()).slice(-2);	
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);	
        var baseURl = "https://www.nrb.org.np/api/forex/v1/rates?from=";	

        let year = date_ob.getFullYear();	

            let currentRequestDate = year + "-" + month + "-" + date;	

            var response;	


            await  fetch(baseURl+currentRequestDate+'&to='+currentRequestDate+'&per_page=100&page=1')	

            .then(res => res.json())	
            .then(json => 	
            response = json	
            );	


var displayValue = "This is a latest Data Provided by Nepal Rastra Bank (NRB) \n";	

            if(response.hasOwnProperty('data')){	
                    var payload = response['data']['payload'][0]['rates'];	

                    console.log(payload);	

                    for(i=0; i<payload.length;i++){	

                          var currency =    payload[i]['currency']['name'];	
                          var short_currency = payload[i]['currency']['iso3'];	
                          var unit =    payload[i]['currency']['unit'];	
                          var buy =    payload[i]['buy'];	
                          var sell =    payload[i]['sell'];	

displayValue = displayValue+'\n'+currency+'('+ short_currency +') ' +'unit: '+unit +' buy: '+buy +' sell: '+sell+'\n';	

                    }	

var embed = new Discord.MessageEmbed()	
.setTitle('Exchange Rate')	
.setDescription(displayValue)	
message.channel.send(embed);	


            }	


else{	

    var embed = new Discord.MessageEmbed()	
    .setTitle('No exchange rate found!!')	
    .setDescription('Something went wrong')	
   	    message.channel.send(embed);


}
       }}