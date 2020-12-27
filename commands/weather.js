const fetch = require('node-fetch');
const Discord = require('discord.js');


module.exports = {
    name: 'weather',
    description: "This command shows a weather of city!",
    async execute(message, args){
var weatherAPI = "eb41ad944236215dc78c4ad4c914177f";
var opneWeather = "http://api.openweathermap.org/data/2.5/weather?q=";

      
        if(!args[0]){

            message.channel.send("Please enter city name");
        }

        else{
            console.log(args.length);

            var  argsTotal="";
            for ( i=0; i<args.length; i++){
                argsTotal = argsTotal+" "+args[i];
            }

            console.log(argsTotal);
            var response;
          

            await  fetch(opneWeather+argsTotal+'&appid='+weatherAPI+'&units=metric')
            
            .then(res => res.json())
            .then(json => 
            response = json
            );
           

                    if(response.hasOwnProperty('main')){
                        var embed = new Discord.MessageEmbed()
                        .setTitle('Weather of '+argsTotal)
                        .setDescription('Condition: '+ response['weather'][0]['description']+'\nQuery City: '+argsTotal+'\n Feels like: '+response['main']['feels_like']+'°C'+'\n Actual temp is: '+ response['main']['temp']+'°C'+'\nPressure: '+response['main']['pressure']+'Pa'+'\n humidity: '+response['main']['humidity']+'%'+'\n wind: '+response['wind']['speed']+' m/s'+ '\nVisibility: '+ response['visibility']+' meter')
                        
                        message.channel.send(embed);
                    }


                    else {
                        var embed = new Discord.MessageEmbed()
                        .setTitle('Weather of '+args[0])
                        .setDescription('Enter a valid city name')
                        
                        message.channel.send(embed);
                    }

           




        }

       
    
        
        
    }
}