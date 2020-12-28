
const Discord = require('discord.js');

const kafkaId = 319740211255050242;
module.exports = {
    name: 'kill',
    description: "This command to a member!",
    execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {


            if (target.id == kafkaId) {
                const embed = new Discord.MessageEmbed()
                .setTitle('Kafka is a god')
                .setDescription('Hey! '+ message.author.username+' You cannot kill a god')
            message.channel.send(embed);

            }

            else {



                var random = Math.floor(Math.random() * 13) + 1

                var gifykill = "";

                switch (random) {

                    case 1:
                        gifykill = "https://i.giphy.com/media/w8uORzxFr7dvO/source.gif";
                        break;

                    case 2:
                        gifykill = "https://i.giphy.com/media/3oz8xy1gPFHsB6NMDm/source.gif";
                        break;

                    case 3:
                        gifykill = "https://i.giphy.com/media/lnakxcfG2MFy/source.gif";
                        break;


                    case 4:
                        gifykill = "https://i.giphy.com/media/9tXn7DEOsjifNDEenF/source.gif";
                        break;



                    case 5:
                        gifykill = "https://i.giphy.com/media/gYkga3bZav66I/source.gif";
                        break;


                    case 6:
                        gifykill = "https://i.giphy.com/media/x1FlNEs7SFfPO/source.gif";
                        break;


                    case 7:
                        gifykill = "https://i.giphy.com/media/2jVc9KbzWWVgc/source.gif";
                        break;


                    case 8:
                        gifykill = "https://i.giphy.com/media/jgo38wEND0D8A/giphy.gif";
                        break;


                    case 9:
                        gifykill = "https://i.giphy.com/media/EqZpNf4BsTxeM/source.gif";
                        break;


                    case 10:
                        gifykill = "https://i.giphy.com/media/3o85xDBgbMyRZ6SyWs/source.gif";
                        break;

                    case 11:
                        gifykill = "https://i.giphy.com/media/MbWeAXeLLWfew/source.gif";
                        break;
                    //
                    case 12:
                        gifykill = "https://i.giphy.com/media/6Kwn0Z6p8vhXa/source.gif";
                        break;

                    case 13:
                        gifykill = "https://i.giphy.com/media/9umH7yTO8gLYY/source.gif";
                        break;


                    default:
                        gifykill = "https://i.giphy.com/media/2jVc9KbzWWVgc/source.gif";
                        break;

                }



                const embed = new Discord.MessageEmbed()
                    .setTitle(message.author.username + " kill " + target.username)
                    .setImage(gifykill)
                message.channel.send(embed);
                    


            }

        } else {
            message.channel.send("You cannot kill yourself");

        }
    }
}