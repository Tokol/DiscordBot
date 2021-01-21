const Discord = require('discord.js');
module.exports = {
    name: 'lilo',
    description: "this is a lilo command",
    execute(message, args){

        const embed = new Discord.MessageEmbed()
        .setTitle('Lilo Intro')
        .setDescription('Hi! My name is Lilo. Find me my Stitch please. <33 ')
        .addField("come meet me here (https://discord.gg/YPtyFe3H7R)")
            
        message.channel.send(embed);


        //https://discord.gg/YPtyFe3H7R
       // message.channel.send('Hi my name is Lollipop. Come say hi to me in Kuirey ko kafe');
    }
}

