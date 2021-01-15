
const Discord = require('discord.js');

const kafkaId = 319740211255050242;
module.exports = {
    name: 'greet',
    description: "This command to greet a member!",
    execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {

                    
  

                var random = Math.floor(Math.random() * 10) + 1

                var greet = "";

                switch (random) {

                    case 1:
                        greet = "https://i.giphy.com/media/WpmH8YFcysGcnS3NqH/giphy-downsized.gif";
                        break;

                    case 2:
                        greet = "https://i.giphy.com/media/LNxoQb24EHAl8J0EWM/giphy.gif";
                        break;


                
                    case 3:
                        greet = "https://i.giphy.com/media/jtYI8zc0bCgMzjJ8aQ/source.gif";
                        break;


                    case 4:
                        greet = "https://i.giphy.com/media/khUn85otsY1htLznGD/source.gif";
                        break;

   
                       
                    case 5:
                        greet = "https://i.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif";
                        break;


                      
                    case 6:
                        greet = "https://i.giphy.com/media/l41lShcuautqDZc5i/source.gif";
                        break;

                       
                          
                    case 7:
                        greet = "https://i.giphy.com/media/3XSl7kNiPrx0A/source.gif";
                        break;

 
                    case 8:
                        greet = "https://i.giphy.com/media/etC7geLLzHMze/source.gif";
                        break;
                        

                    case 9:
                        greet = "https://i.giphy.com/media/l0MYuNQVA2wzzzxUQ/source.gif";
                        break;

//
                    case 10:
                        greet = "https://i.giphy.com/media/HgycnYQCMeJXO/source.gif";
                        break;

              


                    default:
                        greet = "https://i.giphy.com/media/HgycnYQCMeJXO/source.gif";
                        break;

                }



                const embed = new Discord.MessageEmbed()
                    .setTitle(message.author.username + " greets " + target.username)
                    .setImage(greet)
                message.channel.send(embed);
                    


            

        } else {
            message.channel.send("You cannot greet  yourself");

        }
    }
}