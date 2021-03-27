

const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const client = new Discord.Client();

//const config = require('config');

var prefix = 'hal ';

const DisTube = require('distube')

const fs = require('fs');


const kafkaId = 319740211255050242;
const tinyId = 678904236058214400;
const heavenId = 755696993694908416;
const anjalId = 479573206911680512;
const yurieeID = 699525095101825036;
const halId = 791895174506348545;

client.commands = new Discord.Collection();

String.prototype.equalIgnoreCase = function(str) {
    return (str != null &&
      typeof str === 'string' &&
      this.toUpperCase() === str.toUpperCase());
  }

  

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){

    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

const guildId = '791896838881017936';


client.once('ready', async () => {
    client.user.setPresence({
        status: 'online',
        activity: {
            name: 'Life is not a race, its a journey. Let\'s ride this jindgai ko gadi together',
            type: 'PLAYING',
            
        }
    })

    const commands = await client.api
    .applications(client.user.id)
    .guilds(guildId)
    .commands.get()
    
    console.log(commands);

    



    
});


client.on('guildMemberAdd', (member)=>{
    console.log('chriyo');
    console.log(client.guilds.cache);
    
    //console.log(client.guilds.cache.get())    

});



client.distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });

client.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
	))
	.on("addSong", (message, queue, song) => message.channel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    ))

client.on('message', message =>{



    if(message.content.includes(`<@`)){

        var mentions = message.mentions.members.array();
      
    var mentionKafka = false;
    var mentionYuriee= false;

   if(mentions.length>0){
    for(var i=0; i<mentions.length; i++ ){

        if(mentions[i]['user']['id']==kafkaId){
            mentionKafka = true;
        }
     
        if(mentions[i]['user']['id']==yurieeID){
            mentionYuriee = true;
        }

    }
    
   }

        

        if(mentionKafka){        
            message.react('👑'); 
            message.react('👨‍💻');
            message.react('🥇');
            message.react('💖');
            message.react('🔥');
            
            var authorPerson = message.author.id;
            // if(authorPerson!= kafkaId && authorPerson!=yurieeID && authorPerson!=halId){

            //     message.reply('\nThanks for mentioning my master, he will reply you soon. In the meanwhile please let me know how can my master help you?\nDo you have a business plan need an accelerating support and help?\npress 1 for business talk\nAre you going throug existential crisis?\nPlease press 2 for guidence\nAre you dealing with trauma and overthinking?\nPlease 3 for emotional support\n Are you lacking a feel of hope, sense of belonging, peace and gratitude\nplease press 4 for spiritual support\nAre you dealing with mental or physical abuse?\nPlease press 5 for SOS');
            // }

                
         
        }

        if(mentionYuriee){

            message.react('😽');
            if(authorPerson!= kafkaId && authorPerson!=yurieeID && authorPerson!=halId){
                message.reply('\nThanks for mentioning my master kafka\'s wife. please let me know how can your bhauju help you?')
            }
        
            
            }

            

    }

   
   
    
    // if(target.id==kafkaId) {
    
    //     console.log('hello');

    //     message.react('👍');
      
    // }

        var totalWord = message.content;
        var firstWord = totalWord.replace(/ .*/, '');
        var ignoreCaseFirstWord = firstWord.toLowerCase();
        var commandWord = "";
    if(firstWord.startsWith("-")){
         commandWord = firstWord.slice(1,firstWord.length);

        if(commandWord.toLowerCase()=='hal'){
            ignoreCaseFirstWord = prefix;
        } 

    }

  
      
    if(!ignoreCaseFirstWord==prefix || message.author.bot) return;

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



// else if(command==='saurav?'){
//     client.commands.get('saurav').execute(message, args);
// }

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


// else if(command==="shreya?"){
//     client.commands.get('shreya').execute(message, args);
// }


else if(command=="choila?"){
    client.commands.get('choila').execute(message, args);
}

else if(command=="krish?"){
    client.commands.get('krish').execute(message, args);
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

else if(command=="covid"|| command=="corona"){
    client.commands.get('covid').execute(message, args);
}



else if (command==="clear"){
    if(message.author.id==kafkaId || message.author.id==tinyId || message.author.id==heavenId || message.member.hasPermission('ADMINISTRATOR')){
        client.commands.get('clear').execute(message, args);
    }

        else {
            message.channel.send('This command only work for Kafka or admin of server');
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
    if(message.author.id==kafkaId || message.member.hasPermission('ADMINISTRATOR')){
        client.commands.get('mute').execute(message, args);
    }              
        else {
            message.channel.send('This command only work for Kafka or admin of server');
        }
}


else if (command==="unmute"){
    if(message.author.id==kafkaId || message.member.hasPermission('ADMINISTRATOR')){
        client.commands.get('unmute').execute(message, args);
    }              
        else {
            message.channel.send('This command only work for Kafka');
        }
}


        else if(command==="av"){

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


                client.commands.get('flirt').execute(message, args);
         

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

        else if(command=="play"){
            try{
                        
                const voiceChannel = message.member.voice.channel;

                if (!voiceChannel) return message.channel.send('You need to be in a channel to execute this command!');

                client.distube.play(message, args.join(" "));
 
         
           
            }

            catch(e){

                console.log(e);
               // client.commands.get('leave').execute(message,args);
                
            }
            
        }

        if (command == "stop") {

            try{
                client.distube.stop(message);
            message.channel.send(`Stopped the music! by ${message.author}`);
            }

            catch(e){
                client.commands.get('leave').execute(message,args);
                
            }

        }

        else if (command=="loop"){
            try{
                client.distube.setRepeatMode(message, parseInt(args[0]));
            message.channel.send(`song is on loop! looped by ${message.author}`)
            }

            catch(e){
                message.channel.send(`invalid request!! currenlty no music played! req by ${message.author}`);
            }
            
        }

        if (command == "skip"){
            try{
                client.distube.skip(message);
            }

            catch(e){
                message.channel.send(`invalid request!! currenlty no music played! req by ${message.author}`);
            }
           
        }


        if (command == "pause"){
            try{
                client.distube.pause(message);
            }

            catch(e){
                message.channel.send(`invalid request!! currenlty no music played! req by ${message.author}`);
            }

        }





            if (command == "resume"){
                try{
                    client.distube.resume(message);
                }
    
                catch(e){
                    message.channel.send(`invalid request!! currenlty no music played! req by ${message.author}`);
                }
       
        }


        if (command == "seek"){
          
            console.log(Number(args[0])*6000);
            
            try{
                console.log(args[0]);
               // const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
                client.distube.seek(message,Number(args[0])*6000);
            }


            catch(e){
                message.channel.send(`invalid request!! currenlty no music played! req by ${message.author}`);
            }

        }



        if (command == "queue"){
            try{
                let queue = client.distube.getQueue(message);
                message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
                `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
            ).slice(0, 10).join("\n"));
            }

            catch(e){
                message.channel.send(`invalid request!! currenlty no music played! req by ${message.author}`);
            }

        }

            else if(command=="hangman"){    
            client.commands.get('hangman').execute(message,args);
            }


        else if(command=="stub"){
             client.commands.get('stub').execute(message,args);
         }
                
         
        else if(command=="rec"){
           // client.commands.get('rec').execute(message,args);
        }

         else if(command=="fin"){
           // client.commands.get('fin').execute(message,args);
         }   

            
        else if(command=="leave"){
            client.commands.get('leave').execute(message,args);
        }

        else if(command=="say"){
           // client.commands.get('say').execute(message,args);
        }

        else if(command=="birthday"){
                    
        }

   
});



client.login(process.env.DISCORD_TOKEN);




