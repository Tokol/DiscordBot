module.exports = {
    name: 'fav',
    description: "this is a fav command!",
    execute(message, args){
        message.channel.send('fav food - momo \n fav bro - napper \n fav sis - suku and lakpa');
    }
}