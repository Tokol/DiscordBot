
const fs = require("fs");
module.exports = {
    name: 'fin',
    description: "this is a record play command!",
    async execute(message, args){
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send('You need to be in a channel to execute this command!');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('You dont have the correct permissins');
        if (!permissions.has('SPEAK')) return message.channel.send('You dont have the correct permissins');

        if(!fs.existsSync(`./recorded-${message.author.id}.pcm`)) return message.channel.send("your audi is not recorded");
        const  connection = await voiceChannel.join();

        const stream = fs.createReadStream(`./recorded-${message.author.id}.pcm`);


        message.channel.send({
            files: [{
              attachment: `./recorded-${message.author.id}.pcm`,
              name: `latest recorded file.pcm`
            }]
          });


        const dispatcher = connection.play(stream, {
            type: "converted"
        });


        dispatcher.on("finish", () => {
           // message.member.voice.channel.leave();
            return message.channel.send("finished playing audio");
        })
    

    }

    
}


