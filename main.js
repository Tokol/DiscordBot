

const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const client = new Discord.Client();

//const config = require('config');

const prefix = '-hal ';

const fs = require('fs');

const kafkaId = 319740211255050242;
const tinyId = 678904236058214400;
const heavenId = 755696993694908416;
const anjalId = 479573206911680512;

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('HAL 9000 is online!');
});

client.on('message', message =>{



   // const serverQueue = queue.get(message.guild.id);

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 

    else if(command==='intro'){
        client.commands.get('intro').execute(message, args);
    }


    else if(command==='fav'){
        client.commands.get('fav').execute(message, args);
    }  
    
    // else if(command==='flirt'){
    //     if(message.author.username=="Kafka"){
    //         client.commands.get('tiny').execute(message, args);
    //     }

    //     else{
    //         message.channel.send('This command only work for Kafka');

    //     }
      
    // }


else if(command==='kafka?' || command==='kafka'){
    client.commands.get('kafka').execute(message, args);
}



else if(command==='saurav?'){
    client.commands.get('saurav').execute(message, args);
}

else if(command==='napper?'){
    client.commands.get('napper').execute(message, args);
}


else if(command==="ray10?" || command==="ray?"){
    client.commands.get('ray').execute(message, args);
}

else if(command==="bigdaddy?"){
    client.commands.get('bigdaddy').execute(message, args);
}
    

else if(command==="heaven?"){
    client.commands.get('heaven').execute(message, args);
}

else if(command==="lakpa?"){
    client.commands.get('lakpa').execute(message, args);
}


else if(command==="shreya?"){
    client.commands.get('shreya').execute(message, args);
}


else if(command=="choila?"){
    client.commands.get('choila').execute(message, args);
}


else if(command=="comrade?"){
    client.commands.get('comrade').execute(message, args);
}


else if(command=="apeksha?"){
    client.commands.get('apeksha').execute(message, args);
}

else if(command=="bipul?"){
    client.commands.get('bipul').execute(message, args);
}



else if (command==="clear"){
    if(message.author.id==kafkaId || message.author.id==tinyId || message.author.id==heavenId){
        client.commands.get('clear').execute(message, args);
    }

        else {
            message.channel.send('This command only work for Kafka');
        }

}

else if(command==="die"|| command==="death"){
    client.commands.get('death').execute(message, args);
}


else if(command==="id"){
    client.commands.get('getid').execute(message, args);
}

else if(command==="book" || command=="books"){
    client.commands.get('book').execute(message, args);
}



else if(command==="kick"){

    if(message.author.id==kafkaId){
        client.commands.get('kick').execute(message, args);
    }   

        else {
            message.channel.send('This command only work for Kafka');
        }

    
}


else if(command=="Lollipop?" || command=="lollipop?"){
    client.commands.get('lolipop').execute(message, args);  
}


else if(command==="lilo?" || command==="Lilo?"){
    client.commands.get('lilo').execute(message, args);  
}

else if(command==="money" || command==="Money"){
    client.commands.get('money').execute(message, args);  
}


else if(command==="ban"){
    if(message.author.id==kafkaId){
        client.commands.get('ban').execute(message, args);
    }              
        else {
            message.channel.send('This command only work for Kafka');
        }
}


else if (command==="mute"){
    if(message.author.id==kafkaId){
        client.commands.get('mute').execute(message, args);
    }              
        else {
            message.channel.send('This command only work for Kafka');
        }
}


else if (command==="unmute"){
    if(message.author.id==kafkaId){
        client.commands.get('unmute').execute(message, args);
    }              
        else {
            message.channel.send('This command only work for Kafka');
        }
}


        else if(command==="av?"){

                client.commands.get('avatar').execute(message,args);

        }


        else if(command==="kiss"){

            client.commands.get('kiss').execute(message,args);

    }

        else if(command==="cat"){
            client.commands.get('cat').execute(message,args);
        }
        else if (command==="dog"){
            client.commands.get('dog').execute(message,args);
        }
                
        else if(command==="suicide"){
            client.commands.get('suicide').execute(message,args);
        }

        else if (command==="code"){
            client.commands.get('code').execute(message,args);
        }


        else if(command==="morning"){
            client.commands.get('morning').execute(message,args);
        }

        else if(command==="night"){
            client.commands.get('night').execute(message,args);
        }


        else if(command==="weather"){
            client.commands.get('weather').execute(message,args);
        }


        else if(command==="currency"){
            client.commands.get('currency').execute(message,args);
        }


            else if(command==="flirt"){


            if(message.author.id==kafkaId || message.author.id==tinyId || message.author.id==heavenId){
                client.commands.get('flirt').execute(message, args);
            }

            else{
                message.channel.send('This command only work for Kafka,tiny and heaven');
            }

        }

        

        else if(command==="kill"){
            client.commands.get('kill').execute(message, args);
        }

        else if(command==="slap"){
            client.commands.get('slap').execute(message, args);
        }

        else if(command==="hug"){
            client.commands.get('hug').execute(message, args);
        }

        else if(command=="rashi"){
            client.commands.get('rashi').execute(message, args);
        }


        else if(command==="imp"){
            client.commands.get('impo').execute(message, args);
        }

        else if (command==="aakash?" || command==="aakash" ){
            client.commands.get('akash').execute(message,args);
        }  
        
        else if(command=="2021"){
            client.commands.get('newyear').execute(message,args);
        }

        else if (command==="fan"){
            client.commands.get('fan').execute(message,args);
        }

        else if(command=="looney?"){

            client.commands.get('looney').execute(message,args);
        }


        else if(command=="!bigyanyo?"){

            client.commands.get('bigyanyo').execute(message,args);
        }


        else if(command=="greet"){

            client.commands.get('greet').execute(message,args);
        }



        else if(command=="help"){
            client.commands.get('help').execute(message, args);
        }

        else if(command=="meme"){
            client.commands.get('meme').execute(message, args);
        }


    else{
        message.channel.send( 'You need to enter a valid command!');
    }
});

client.login(process.env.DISCORD_TOKEN);


