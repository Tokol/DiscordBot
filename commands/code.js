
const Discord = require('discord.js');
const fetch = require('node-fetch');

const bgImage = "https://science.sciencemag.org/content/sci/366/6472/1468.6/F1.large.jpg?width=800&height=600&carousel=1";

module.exports = {
    name: 'code',
    description: "This command view game code!",
   async  execute(message, args){
    
   
var img= "https://textoverimage.moesif.com/image?image_url="+bgImage+"?text= Game ko Code "+args[0]+"Ho"+"&text_color=2912f6ff&text_size=128&y_align=middle&x_align=center";

          

           const embed = new Discord.MessageEmbed()
            .setTitle('Game Code')
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