const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: "This command shows a help !",
     execute(message, args){


      

                        var embed = new Discord.MessageEmbed()
                        .setTitle('hal commands')
                        .setDescription('slap @mention\nkill @mention\nhug @mention\nweather cityname\ncurrency\nfan @mention\ncat\ndog\nrashi zodiac sign\nav? @mention')

                        message.channel.send(embed);
                    


           




        }

       
    
        
        
    }