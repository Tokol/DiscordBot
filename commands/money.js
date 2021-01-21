const fetch = require('node-fetch');
const Discord = require('discord.js');

//
module.exports = {
    name: 'money',
    description: "This command shows a money!",
     execute(message, args){
    
        const embed = new Discord.MessageEmbed()
        .setTitle("Money!! Money!! Money!!")
        .setDescription("How much you need? take it all ")
        .setImage("https://i.giphy.com/media/916t1VsCg2qoo/source.gif")
    message.channel.send(embed);


}

}
