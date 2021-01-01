
const Discord = require('discord.js');

const kafkaId = 319740211255050242;
module.exports = {
    name: 'fan',
    description: "This command to a display fan member!",
    execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {


          

          
                var random = Math.floor(Math.random() * 8) + 1

                var gifykill = "";

                switch (random) {

                    case 1:
                        gifykill = "https://i.giphy.com/media/V0SDwIXMLFH3O/source.gif";
                        break;

                    case 2:
                        gifykill = "https://i.giphy.com/media/iql3feYAKaqftl4hP3/source.mp4";
                        break;

                    case 3:
                        gifykill = "https:/i.giphy.com/media/A8inPu7l6sfFS/giphy.gif";
                        break;


                    case 4:
                        gifykill = "https://i.giphy.com/media/26BRKmqUonCPPit1e/source.gif";
                        break;



                    case 5:
                        gifykill = "https://i.giphy.com/media/2alKkyRFPKRSU/source.gif";
                        break;


                    case 6:
                        gifykill = "https://i.giphy.com/media/8UGGqAY9jd0dLQokAt/giphy.gif";
                        break;


                    case 7:
                        gifykill = "https://media.giphy.com/media/l4KhKfJ8fSQOGeg3m/source.gif";
                        break;

                    
                    case 8:
                        gifykill = "https://i.giphy.com/media/xT0xewWo9W7rF4EJK8/source.gif";
                        break;

 

                    default:
                        gifykill = "https://i.giphy.com/media/V0SDwIXMLFH3O/source.gif";
                        break;

                }



                const embed = new Discord.MessageEmbed()
                    .setTitle(message.author.username + " is a fan of " + target.username)
                    .setImage(gifykill)
                message.channel.send(embed);
                    


           

        } else {
            message.channel.send("You cannot be fan of yourself");

        }
    }
}