const Discord = require('discord.js');
module.exports = {
    name: 'newyear',
    description: "this is a new year wish command!",
    execute(message, args){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#00FF00	')
            .setTitle('Game Invitation')
            .setDescription(`Happ new year 2021! May you all have a year filled with Love, Laughter, Brightness and Hope. May this year brings only positive news except test reports`)
            .setImage('https://i.giphy.com/media/EzK5EPh5Iekd9wwa0m/source.gif')
        
            .setFooter('Get set ready To inject - KAFKA AKA HAL 9000')        
        
            message.channel.send(exampleEmbed);
    }
}