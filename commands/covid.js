const fetch = require('node-fetch');
const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'covid',
    description: "This command shows a covid status of nepal",
    async execute(message, args){
        var covidNepal = "https://nepalcorona.info/api/v1/data/nepal";
            var response;
            await  fetch(covidNepal)
            .then(res => res.json())
            .then(json => 
            response = json
            );
        
                    if(response!=null){
                        var momentDate = moment(response['updated_at'])
                        var embed = new Discord.MessageEmbed()
                        .setTitle('Covid-19 Status of Nepal🇳🇵🇳🇵')
                         .setDescription('🦠 Total Tested Positive : '+ response['tested_positive']+'\n\n:muscle: Total Recovered : '+ response['recovered']+'\n\n😭 Total Deaths : '+ response['deaths'] +'\n\n😷 In Isolation : '+response['in_isolation']+'\n\n🏡 In  Quarantine : '+ response['quarantined'] )
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
}