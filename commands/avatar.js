
const Discord = require('discord.js');
module.exports = {
    name: 'avatar',
    description: "This command view avatar a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            //target.avatarURL;

           // const memberTarget = message.guild.members.cache.get(target.id);
            //memberTarget.get.
            const url = target.displayAvatarURL({ dynamic: true, size: 256});

            const embed = new Discord.MessageEmbed()
            .setTitle(target.username)
            .setDescription('Ko DP herera react gar')
            .setImage(url)

            message.channel.send(embed);

           // message.channel.send("User has been banned");
        }else{

            const url = message.author.displayAvatarURL({ dynamic: true, size: 256});

            const embed = new Discord.MessageEmbed()
            .setTitle(target.username)
            .setDescription('Ko DP herera react gar')
            .setImage(url)

            message.channel.send(embed);
                               

                
        
        }
    }
}