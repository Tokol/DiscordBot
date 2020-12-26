
const Discord = require('discord.js');
const fetch = require('node-fetch');


module.exports = {
    name: 'dog',
    description: "This command view random dog!",
   async  execute(message, args){
    
   
var img;

          await  fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(json => 
            
             img = json["message"],
            // url = target.displayAvatarURL({ dynamic: true, size: 256}),

            );


           const embed = new Discord.MessageEmbed()
            .setTitle('WOOF WOOF WOOF....')
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