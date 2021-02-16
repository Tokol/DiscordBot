const fetch = require('node-fetch');
const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'covid',
    description: "This command shows a covid status of nepal",
    async execute(message, args){

        var coronaUrl = "";
        var covidNepal = "https://nepalcorona.info/api/v1/data/nepal";

        var worldCovidURl = "https://worldometers.p.rapidapi.com/api/coronavirus/country/";

            console.log(args[0]);

        if(args[0]==null || args[0].toLowerCase()=="nepal"){

            coronaUrl = covidNepal;
           
            var response;
            await  fetch(coronaUrl)
            .then(res => res.json())
            .then(json => 
            response = json
            );

                    if(response!=null){
                        var momentDate = moment(response['updated_at'])
                        var embed = new Discord.MessageEmbed()
                        .setTitle('Covid-19 Status of Nepal🇳🇵🇳🇵')
                         .setDescription('🦠 Total Tested Positive : '+ response['tested_positive']+'\n\n:muscle: Total Recovered : '+ response['recovered']+'\n\n😭 Total Deaths : '+ response['deaths'] +'\n\n😷 In Isolation : '+response['in_isolation']+'\n\n🏡 In  Quarantine : '+ response['quarantined'] +'\n\n')
                         .setFooter(`Last Update at: ${momentDate.format("YYYY-MM-DD hh:mm:ss A")}`)   
                         message.channel.send(embed)   
                    }

                    else{
                        var embed = new Discord.MessageEmbed()
                        .setTitle('Covid-19 Status of nepal')
                        .setDescription('no data found')
                        message.channel.send(embed);
                    }
        }


        else{
            console.log('world update');
                
            coronaUrl = worldCovidURl;
            var  argsTotal="";
            for ( i=0; i<args.length; i++){
                argsTotal = argsTotal+" "+args[i];
            }


            await  fetch(worldCovidURl+argsTotal.trim(), {method: "GET",headers:{'x-rapidapi-key':'757d02bda2msh9c9ccec72b99b9dp11907djsn658419b200ca'}})
            .then(res => res.json())
            .then(json => 
            response = json
            );
                
         


            if(!response.hasOwnProperty('Error')){

                

                                    var value = response['data']

                                    //console.log('last_update');
            
                                //var momentDate = moment(response['last_update'])
                                var embed = new Discord.MessageEmbed()
                                .setTitle(`Covid-19 Status of ${response['data']['Country']}`)
                                 .setDescription('🔬 Total Active Case : '+ value['Active Cases']+'\n\n🦠 Total Tested Positive : '+ value['Total Cases']+'\n\n:muscle: Total Recovered : '+ value['Total Recovered']+'\n\n😭 Total Deaths : '+ value['Total Deaths'] +'\n\n😷 New Confirm Case : '+value['New Cases']+'\n\n:muscle: New Recovered : '+ value['New Recovered']+'\n\n😭  New Deaths : '+ value['New Deaths']+'\n\n')
                                 .setFooter(`Last Update at: ${response['last_update']}`)   
                                 message.channel.send(embed)  
                             
            }

            else{
                var embed = new Discord.MessageEmbed()
                .setTitle(`Covid-19 Status of ${argsTotal}`)
                .setDescription('no data found')
                message.channel.send(embed);
            }


        }

       
            
        
    }
}