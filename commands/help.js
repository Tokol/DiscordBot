const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: "This command shows a help !",
     execute(message, args){
                        var embed = new Discord.MessageEmbed()
                        .setTitle('hal commands')
                        .setDescription('say "your message" to speak \n coivd or corona (to get covid-19 status)\nmeme\nslap @mention\nkill @mention\nhug @mention\n kiss @mention\nweather cityname\ncurrency\nfan @mention\ncat\ndog\nrashi zodiac sign\nav @mention\nnasa (to get latest image data from NASA\'s mars mission) \n\n play "music name" \nqueue (show the requested music queue) \nskip (skip next music) \n stop(disconect music) \n loop (reapt the same music)')
                        message.channel.send(embed);
        }

        
    }
