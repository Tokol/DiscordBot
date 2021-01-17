const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
    name: 'meme',
    description: "This command is get meme!",
    async  execute(message, args){

        print(args[1]);
        
        var response;
        if(!args[0]){
            jokesurl = "";
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


        else if (args[1]==18){

            jokesurl = "https://meme-api.herokuapp.com/gimme/PornoMemes";
        }

     

       
               
         
          

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