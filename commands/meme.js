const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
    name: 'meme',
    description: "This command is get meme!",
    async  execute(message, args){

        jokesurl = "";
        var response;
        if(!args[0]){
           
            var random =   Math.floor(Math.random() * 3) + 1  
            switch(random){
                case 1:
                    jokesurl = "https://meme-api.herokuapp.com/gimme/NepaliMeme";
                    break;
       
                    case 2:
                        jokesurl = "https://meme-api.herokuapp.com/gimme/wholesomememes";
                       break;

                     case 3: 
                     jokesurl = "https://meme-api.herokuapp.com/gimme/";

                    default:
                        jokesurl = "https://meme-api.herokuapp.com/gimme";
       
            }

        }


        else if (args[0]==18){
            jokesurl = "https://meme-api.herokuapp.com/gimme/PornoMemes";
        }

       
        var server = message.guild.id;
        if(server==680462068004159564 && args[0]==18){
            const embed = new Discord.MessageEmbed()
            .setTitle('Oi Boka Yesto request yo server ma garna paudina')
            .setImage('https://i.imgur.com/3Qzq7aO.png')
            .setDescription('Mya Mya Mya ma boka ho')
            message.channel.send(embed);
        }
         
          
            
        else{
                await  fetch(jokesurl)
            
            .then(res => res.json())
            .then(json => 
            response = json
            );

                    
                    const embed = new Discord.MessageEmbed()
                    .setTitle('Herera Haha gar!')
                    .setDescription(response['title'])
                    .setImage(response['preview'][response['preview'].length-1])
                    message.channel.send(embed);
        }

    }
}