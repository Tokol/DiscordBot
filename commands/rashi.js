
const Discord = require('discord.js');
const fetch = require('node-fetch');
const kafkaId = 319740211255050242;
module.exports = {
    name: 'rashi',
    description: "This command to serve you a rashi!",
    async execute(message, args) {
        const target = message.mentions.users.first();
        if (!args[0]) {
            message.channel.send("You type valid rashi name or else to view type rashi list" );

        } else if(args[0]=='list'){

            var embed = new Discord.MessageEmbed()
            .setTitle('All Sign List')
            .setDescription('Aries\nTaurus\nGemini\nCancer\nLeo\nVirgo\nLibra\nScorpio\nSagittarius\nCapricorn\nAquarius\nPisces');
            
            message.channel.send(embed);

        }



            else{

var response;

                await  fetch('https://aztro.sameerkumar.website/?sign='+args[0]+'&day=today',{ method: 'POST', })
                .then(res => res.json())
                .then(json => 
                
                 response = json
                // url = target.displayAvatarURL({ dynamic: true, size: 256}),
    
                );


     if(response.hasOwnProperty('message')){

        var embed = new Discord.MessageEmbed()
        .setTitle('Invalid Sign ')
        .setDescription(' Invalid or spelling mistake of sign please type sign as given below:\n \nAries\nTaurus\nGemini\nCancer\nLeo\nVirgo\nLibra\nScorpio\nSagittarius\nCapricorn\nAquarius\nPisces');
        
        message.channel.send(embed);

     }
    
     else{

            var description = response['description'];
            var luckyColor = response['color'];
            var lucky_number = response['lucky_number'];
            var lucky_time = response['lucky_time'];
            var mood = response['mood'];
            var compatibility = response['compatibility'];


        var embed = new Discord.MessageEmbed()
        .setTitle('Today\'s  Horscope of '+args[0])
        .setDescription('Mood type :'+mood+'\n'+'\n'+  description+'\n'+'\n'+ 'Lucky Color :'+luckyColor+'\n'+'\n' + 'Lucky Number :'+lucky_number+'\n'+'\n' +'compatibility with: '+compatibility +'\n'+'\n'+'P.S: This rashi report is based upon sun sign (English wala horoscope) not a Moon sign (Vedic- Nepali/Indian wala haena )'+'\n'+'\n'+'Have a Great Day - kafka AKA HAL 9000');
        
        message.channel.send(embed);




     }





            }

    }
}