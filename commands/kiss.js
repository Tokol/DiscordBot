
const Discord = require('discord.js');

const kafkaId = 319740211255050242;
const yurieeID = 699525095101825036;
module.exports = {
    name: 'kiss',
    description: "This command to kiss a member!",
    execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {


           

            
                    
         

                var random = Math.floor(Math.random() * 14) + 1

                var kisskill = "";

                switch (random) {

                    case 1:
                        kisskill = "https://i.giphy.com/media/l2Je2M4Nfrit0L7sQ/source.gif";
                        break;

                    case 2:
                        kisskill = "https://i.giphy.com/media/l3vQWwlihM1GPDYgU/source.gif";
                        break;

                    case 3:
                        kisskill = "https://i.giphy.com/media/l2Sq0VUFKf7wEAaGc/source.gif";
                        break;


                    case 4:
                        kisskill = "https://i.giphy.com/media/mksx7SSd2QhP2/source.gif";
                        break;

                        

                    case 5:
                        kisskill = "https://i.giphy.com/media/G79QEYc0Gvdle/source.gif";
                        break;


                        
                    case 6:
                        kisskill = "https://i.giphy.com/media/u1WxG6METyd1K/source.gif";
                        break;

                        

                    case 7:
                        kisskill = "https://i.giphy.com/media/l0MYtAgoC6LYgrIc0/source.gif";
                        break;


                    case 8:
                        kisskill = "https://i.giphy.com/media/d2ZcK8TYrPfmo/source.gif";
                        break;


                    case 9:
                        kisskill = "https://i.giphy.com/media/VSacgdPZEdxjG/source.gif";
                        break;


                    case 10:
                        kisskill = "https://i.giphy.com/media/SRbVg86icBP9K/source.gif";
                        break;

                    case 11:
                        kisskill = "https://i.giphy.com/media/plqsscF7JbGHm/source.gif";
                        break;
                    //
                    case 12:
                        kisskill = "https://i.giphy.com/media/26ufdJ8yQ9WfJIz3G/source.gif";
                        break;

                    case 13:
                        kisskill = "https://i.giphy.com/media/ueqYuBQtuhWg0/source.gif";
                        break;

                        case 14:
                            kisskill = "https://i.giphy.com/media/l0MYFrCwoNwL6heSY/source.gif";
                            break;


                    default:
                        kisskill = "https://i.giphy.com/media/l0MYFrCwoNwL6heSY/source.gif";
                        break;

                }


                var usnerame = "";
                        if(target.id==yurieeID){
                            usnerame = "Kakfa"
                        }

                        else{
                            usnerame = message.author.username;
                        }

                const embed = new Discord.MessageEmbed()
                    .setTitle(usnerame + " kissed " + target.username)
                    .setImage(kisskill)
                message.channel.send(embed);
                    


            

        } else {
            message.channel.send("You cannot kiss yourself");

        }
    }
}