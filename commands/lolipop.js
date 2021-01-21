const Discord = require('discord.js');
module.exports = {
    name: 'lolipop',
    description: "this is a lolipop command",
    execute(message, args){

        const embed = new Discord.MessageEmbed()
        .setTitle('Lollipop69 Intro')
        .setDescription('Hi my name is Lollipop. Come say hi to me in Kuirey ko kafe ')
        .addField("join here (https://discord.gg/YPtyFe3H7R)")

        message.channel.send(embed);


        //https://discord.gg/YPtyFe3H7R
       // message.channel.send('Hi my name is Lollipop. Come say hi to me in Kuirey ko kafe');
    }
}

