const Discord = require('discord.js');

module.exports = {
    name: 'kafka',
    description: "this is a kafka command!",
    execute(message, args){

        const embed = new Discord.MessageEmbed()
        .setColor('#00FF00	')
        .setTitle('Kafa AKA HAL 9000 Introduction')
        .setDescription('Hi i am a bot creator, my name is Suresh Lama. \nA Senior Software Developer, a Writer, an Astrologer. \nLoves Literature, Arts and History. \nI am also called as a Silent Guardian, Watchful protector, The Dark Knight, The Batman.')
        .setImage('https://i.imgur.com/e1c8E1W.jpg')
        .addField('Come meet me at my Batcave AKA Chautari', `https://shorturl.at/inqIN`)
        .setFooter(`Currently Bat-Signal is out of order, just mention me will be there`)  
        message.channel.send(embed);

       // message.channel.send('');
    }
}