
const Discord = require('discord.js');
const fetch = require('node-fetch');

const bgImage = "https://cdn.pixabay.com/photo/2016/06/14/10/58/guestbook-1456265_960_720.jpg";

module.exports = {
    name: 'code',
    description: "This command view game code!",
     execute(message, args){
    
        if(!args[0]){
            message.channel.send("Invalid Command");
        }

        else{

            var img= 'https://textoverimage.moesif.com/image?image_url=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F06%2F14%2F10%2F58%2Fguestbook-1456265_960_720.jpg&text='+args[0].toUpperCase()+'&text_color=1a191eff&text_size=64&y_align=middle&x_align=center';
                
const exampleEmbed = new Discord.MessageEmbed()
.setColor('#00FF00	')
    .setTitle('Game Invitation')
    .setDescription(`I ${message.author.username} heartly invite every beautiful and free soul for a game.\nI also hearby acknowledge you that game will be cool and fun \nGame Code : ${args[0].toUpperCase()}`)
	.setImage(img)
	.setTimestamp()
    .setFooter(`${'@among us '}`)        

    message.channel.send(exampleEmbed);


        }




        //    const embed = new Discord.MessageEmbed()
        //     .setTitle('Game Code')
        //     .setImage(img)
    
            
        //     message.channel.send(embed);


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