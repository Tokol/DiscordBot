const Discord = require('discord.js');

module.exports = {
    name: 'kafka',
    description: "this is a kafka command!",
    execute(message, args){

        const embed = new Discord.MessageEmbed()
        .setTitle('Kafa AKA HAL 9000 Introduction')
        .setDescription('Hi i am a bot creator, my name is Suresh Lama. \nA Senior Software Developer, a Writer, an Astrologer. \nLoves Literature, Arts and History. \nI am also called as a Silent Guardian, Watchful protector, The Dark Knight, The Batman.')
        .setImage('https://i.imgur.com/e1c8E1W.jpg')
        .addField("come meet me at my Batcave AKA Chautari  https://discord.gg/c7vFf2cGF2")
        
        message.channel.send(embed);

       // message.channel.send('');
    }
}