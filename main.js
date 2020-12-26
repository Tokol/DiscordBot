

const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const client = new Discord.Client();


const prefix = '-hal ';

const fs = require('fs');


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
    
    else if(command==='flirt'){
        if(message.author.username=="Kafka"){
            client.commands.get('tiny').execute(message, args);
        }

        else{
            message.channel.send('This command only work for Kafka');

        }
      
    }


else if(command==='kafka?'){
    client.commands.get('kafka').execute(message, args);
}



else if(command==='saurav?'){
    client.commands.get('saurav').execute(message, args);
}

else if(command==='napper?'){
    client.commands.get('napper').execute(message, args);
}


else if(command==="ray10?"){
    client.commands.get('ray').execute(message, args);
}

else if(command==="bigdaddy?"){
    client.commands.get('bigdaddy').execute(message, args);
}
        

    else{
        message.channel.send('@'+message.author.username+" You need to enter a valid command!");
    }
});

client.login(process.env.DISCORD_TOKEN);
