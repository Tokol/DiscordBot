const fetch = require('node-fetch');
const Discord = require('discord.js');


module.exports = {
    name: 'help',
    description: "This command shows a help !",
     execute(message, args){


      

                        var embed = new Discord.MessageEmbed()
                        .setTitle('hal commands')
                        .setDescription('slap\nkill\nhug\nweather\ncurrency\nfan\ncat\ndog\nrashi\nav?')
                                        
                        message.channel.send(embed);
                    


           




        }

       
    
        
        
    }
}