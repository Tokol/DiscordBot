
const Discord = require('discord.js');
const fetch = require('node-fetch');


module.exports = {
    name: 'cat',
    description: "This command view random cat!",
   async  execute(message, args){
    
   
var img;

          await  fetch('https://aws.random.cat/meow')
            .then(res => res.json())
            .then(json => 
            
             img = json["file"],
            // url = target.displayAvatarURL({ dynamic: true, size: 256}),

            );


           const embed = new Discord.MessageEmbed()
            .setTitle('MEOW MEOW MEOW....')
            .setDescription('Malie maya gara!!')
            .setImage(img)
            message.channel.send(embed);


            //target.avatarURL;

           // const memberTarget = message.guild.members.cache.get(target.id);
            //memberTarget.get.
           

            // const embed = new Discord.MessageEmbed()
            // .setTitle(target.username)
            // .setDescription('Ko DP herera react gar')
            // .setImage(url)

            // message.channel.send(embed);

           // message.channel.send("User has been banned");
        
    }
}