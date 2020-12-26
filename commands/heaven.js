module.exports = {
    name: 'heaven',
    description: "this is a heaven command!",
    execute(message, args){
        message.channel.send('I think I just died and went to Heaven');
    }
}