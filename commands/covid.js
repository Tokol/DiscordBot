const fetch = require('node-fetch');
const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'covid',
    description: "This command shows a covid status of nepal",
    async execute(message, args){

        var coronaUrl = "";
        var covidNepal = "https://nepalcorona.info/api/v1/data/nepal";

        var worldCovidURl = "https://api.covid19api.com/summary";

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
                var findData = false;
            coronaUrl = worldCovidURl;
            var  argsTotal="";
            for ( i=0; i<args.length; i++){
                argsTotal = argsTotal+" "+args[i];
            }

            await  fetch(worldCovidURl, {method: "GET",headers:{'X-Access-Token':'5cf9dfd5-3449-485e-b5ae-70a60e997864'}})
            .then(res => res.json())
            .then(json => 
            response = json
            );
                
           


            if(response!=null){


                    for(i=0; i<response['Countries'].length; i++){

                        console.log(response['Countries'][i]['Country'].toLowerCase());
                         console.log(argsTotal.toLowerCase());

                            if(response['Countries'][i]['Country'].toLowerCase()==argsTotal.toLowerCase().trim() ||  response['Countries'][i]['CountryCode'].toLowerCase()==argsTotal.toLowerCase().trim() ){

                                findData = true;

                                var value = response['Countries'][i];
                                var momentDate = moment(response['Date'])
                                var embed = new Discord.MessageEmbed()
                                .setTitle(`Covid-19 Status of ${value['Country']}`)
                                 .setDescription('🦠 Total Tested Positive : '+ value['TotalConfirmed']+'\n\n:muscle: Total Recovered : '+ value['TotalRecovered']+'\n\n😭 Total Deaths : '+ value['TotalDeaths'] +'\n\n😷 New Confirm Case : '+value['NewConfirmed']+'\n\n:muscle: New Recovered : '+ value['NewRecovered']+'\n\n😭  New Deaths : '+ value['NewDeaths']+'\n\n')
                                 .setFooter(`Last Update at: ${momentDate.format("YYYY-MM-DD hh:mm:ss A")}`)   
                                 message.channel.send(embed)  
                                 return;

                            }

                    }

                                if(findData==false){
                                    var embed = new Discord.MessageEmbed()
                                   .setTitle(`Covid-19 Status of ${argsTotal}`)
                                      .setDescription('No data found. May be spelling mistake or requested country is not correct')
                                             message.channel.send(embed);
                                }
                
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