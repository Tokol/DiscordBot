
// const Discord = require('discord.js');

// const kafkaId = 319740211255050242;
// module.exports = {
//     name: 'laath',
//     description: "This command to lath a member!",
//     execute(message, args) {
//         const target = message.mentions.users.first();
//         if (target) {

//             if (target.id == kafkaId) {
//                 const embed = new Discord.MessageEmbed()
//                 .setTitle('Kafka is a god')
//                 .setDescription('Hey! '+ message.author.username+' You cannot slap a god')
//             message.channel.send(embed);

//             }

//             else {



//                 var random = Math.floor(Math.random() * 13) + 1

//                 var gifyslap = "";

//                 switch (random) {

//                     case 1:
//                         gifyslap = "https://i.giphy.com/media/gSIz6gGLhguOY/source.gif";
//                         break;

//                     case 2:
//                         gifyslap = "https://i.giphy.com/media/bGnQmK38QoSg8/source.gif";
//                         break;

//                     case 3:
//                         gifyslap = "https://i.giphy.com/media/3XlEk2RxPS1m8/source.gif";
//                         break;


//                     case 4:
//                         gifyslap = "https://i.giphy.com/media/cOnZnwqcXNv6Oi429P/source.mov";
//                         break;



//                     case 5:
//                         gifyslap = "https://i.giphy.com/media/YpYjA3h47xroZN4Etx/source.gif";
//                         break;



//                     case 6:
//                         gifyslap = "https://i.giphy.com/media/LImd5H5oQ7Oms/source.gif";
//                         break;


//                     case 7:
//                         gifyslap = "https://i.giphy.com/media/MlMl5tEnohzZm/source.gif";
//                         break;


//                     case 8:
//                         gifyslap = "https://i.giphy.com/media/Wy6tit6VeXBraTQNhC/source.gif";
//                         break;


//                     case 9:
//                         gifyslap = "https://i.giphy.com/media/htdU64s0Dsr8k/giphy.gif";
//                         break;


//                     case 10:
//                         gifyslap = "https://i.giphy.com/media/126yRbvk0QuEiQ/source.gif";
//                         break;

//                     case 11:
//                         gifyslap = "https://i.giphy.com/media/lqdiBCQI7HLYZpZr2Q/source.gif";
//                         break;
//                     //
//                     case 12:
//                         gifyslap = "https://i.giphy.com/media/fjxOktMff1aZ5Drxhe/source.gif";
//                         break;

//                     case 13:
//                         gifyslap = "https://i.giphy.com/media/l2SqfNigBRJ3REFRm/source.gif";
//                         break;


//                     default:
//                         gifyslap = "https://i.giphy.com/media/MlMl5tEnohzZm/source.gif";
//                         break;

//                 }



//                 const embed = new Discord.MessageEmbed()
//                     .setTitle(message.author.username + " slaped " + target.username)
//                     .setImage(gifyslap)
//                 message.channel.send(embed);
                    


//             }

//         } else {
//             message.channel.send("You cannot slap yourself");

//         }
//     }
// }