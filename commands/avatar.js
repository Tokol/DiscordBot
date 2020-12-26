module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            //target.avatarURL;

           // const memberTarget = message.guild.members.cache.get(target.id);
            //memberTarget.get.
            const embed = new Discord.RichEmbed()
            .setImage(target.avatarURL)

            message.channel.sendEmbed(embed);

           // message.channel.send("User has been banned");
        }else{
            message.channel.send(`You coudn't find that member!`);
        }
    }
}