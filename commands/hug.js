
const Discord = require('discord.js');

const kafkaId = 319740211255050242;
module.exports = {
    name: 'hug',
    description: "This command to hug a member!",
    execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {


           

                var random = Math.floor(Math.random() * 13) + 1

                var gifyhug = "";

                switch (random) {

                    case 1:
                        gifyhug = "https://i.giphy.com/media/KG5oq4vesf9r8JbBEN/source.gif";
                        break;

                    case 2:
                        gifyhug = "https://i.giphy.com/media/RJEIl2fBX3jAJOqSau/source.gif";
                        break;

                    case 3:
                        gifyhug = "https://i.giphy.com/media/VduFvPwm3gfGO8duNN/source.gif";
                        break;


                    case 4:
                        gifyhug = "https://i.giphy.com/media/qDp3I5uAuJHy33pLUW/source.gif";
                        break;



                    case 5:
                        gifyhug = "https://i.giphy.com/media/2aFg14l5G0HEwcNd1Q/source.gif";
                        break;


                    case 6:
                        gifyhug = "https://i.giphy.com/media/rvzbOcYmR7GZW/source.gif";
                        break;


                    case 7:
                        gifyhug = "https://i.giphy.com/media/l378uBCYt1vfaj2aA/source.gif";
                        break;


                    case 8:
                        gifyhug = "https://i.giphy.com/media/Y6uhhPPB5DYT6/source.gif";
                        break;


                    case 9:
                        gifykill = "https://i.giphy.com/media/l46CuISSjZMbl2VEc/source.gif";
                        break;


                    case 10:
                        gifyhug = "https://i.giphy.com/media/DjoWze0Patl1m/source.gif";
                        break;

                    case 11:
                        gifyhug = "https://i.giphy.com/media/Qkw51knTd4gda/source.gif";
                        break;
                    //
                    case 12:
                        gifyhug = "https://i.giphy.com/media/xT0Gqne4C3IxaBcOdy/source.gif";
                        break;

                    case 13:
                        gifykill = "https://i.giphy.com/media/9umH7yTO8gLYY/source.gif";
                        break;


                    default:
                        gifyhug = "https://media.giphy.com/media/lz9H7hN30lHvq/source.gif";
                        break;

                }



                const embed = new Discord.MessageEmbed()
                    .setTitle(message.author.username + " Hugs " + target.username)
                    .setImage(gifyhug)
                message.channel.send(embed);
                    


            

        } else {
            message.channel.send("You cannot hug yourself");

        }
    }
}