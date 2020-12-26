module.exports = {
    name: 'clear',
    description: "Clean The message!",
    async execute(message, args){
        if(!args[0])return message.reply("please enter the amount of mesage that you want to clear ");

            if(isNaN(args[0])) return message.reply("please enter a real number");


            if(args[0]>100) return message.reply("you canno't delete more than 100");

            if(args[0]<1) return message.reply("you must delete atlease 1 message");



            await message.channel.message.fetch({limit:args[0]}).then(messages=>{
                message.channel.bulkDelete(messages);
            })




    }
}