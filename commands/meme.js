const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
    name: 'meme',
    description: "This command is get meme!",
    async  execute(message, args){

            var random =   Math.floor(Math.random() * 1) + 1  

        
       
                jokesurl = "";
       
            switch(random){
                case 1:
                    jokesurl = "https://meme-api.herokuapp.com/gimme";
                    break;
       
                    case 2:
                        jokesurl = "https://meme-api.herokuapp.com/gimme/wholesomememes";
                       break;
                            
                    default:
                        jokesurl = "https://meme-api.herokuapp.com/gimme";
       
            }

            var response;
          

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