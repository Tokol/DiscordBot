
const Discord = require('discord.js');
const sinzoid = 792619465648635925;
module.exports = {
    name: 'avatar',
    description: "This command view avatar a member!",
    execute(message, args){
        const target = message.mentions.users.first();

            
         if(target.id!=sinzoid){
                
            const url = target.displayAvatarURL({ dynamic: true, size: 256});

            const embed = new Discord.MessageEmbed()
            .setTitle(target.username)
            .setDescription('Ko DP herera react gar')
            .setImage(url)

            message.channel.send(embed);

           // message.channel.send("User has been banned");
        }else{                               
            message.channel.send("no user found");
                
        }
    }
}