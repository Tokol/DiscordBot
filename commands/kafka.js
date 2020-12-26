module.exports = {
    name: 'kafka',
    description: "this is a kafka command!",
    execute(message, args){
        message.channel.send('hi i am a bot creator');
    }
}