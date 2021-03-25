
const Discord = require('discord.js');
const sinzoid = 792619465648635925;
module.exports = {
    name: 'avatar',
    description: "This command view avatar a member!",
    execute(message, args){
        const target = message.mentions.users.first();

        var url;
        var title;
            
                if(target!=null){
                     url = target.displayAvatarURL({ dynamic: true, size: 256});

                     title = target.username;
                }


                else{

                        url = message.author.displayAvatarURL({dynamic: true, size: 256})
                        title =   message.author.username;
                }
                
                const embed = new Discord.MessageEmbed()
                .setTitle(title)
                .setDescription('Ko DP herera react gar')
                .setImage(url)
    
                message.channel.send(embed);
           

           // message.channel.send("User has been banned");
        
    }
}