
const Discord = require('discord.js');
module.exports = {
    name: 'getid',
    description: "This command get id of a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            //target.avatarURL;

           // const memberTarget = message.guild.members.cache.get(target.id);
            //memberTarget.get.
            console.log(target.id);
                
           // message.channel.send("User has been banned");
        }else{                               
            message.channel.send("no user found");
                
        }
    }
}