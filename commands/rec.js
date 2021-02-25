const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'rec',
    description: "this is a record command!",
    async execute(message, args){
        const voiceChannel = message.member.voice.channel;
                if (!voiceChannel) return message.channel.send('You need to be in a channel to execute this command!');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('You dont have the correct permissins');
        if (!permissions.has('SPEAK')) return message.channel.send('You dont have the correct permissins');

        const  connection = await voiceChannel.join();

        const receiver = connection.receiver.createStream(message.member, {
            mode: "pcm",
            end: "manual"
        });
        const writer = receiver.pipe(fs.createWriteStream(`./recorded-${message.author.id}.pcm`));        
        writer.on("finish", () => {
            message.channel.send("Finished writing audio");
        });
    }
}