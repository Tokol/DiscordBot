
const Discord = require('discord.js');
const fetch = require('node-fetch');

const bgImage = "https://cdn.pixabay.com/photo/2016/06/14/10/58/guestbook-1456265_960_720.jpg";

module.exports = {
    name: 'impo',
    description: "This command provides imposter award!",
     execute(message, args){
        const target = message.mentions.users.first();
        if(!target){
            message.channel.send("Invalid Command");
        }

        else{

            var img= 'https://textoverimage.moesif.com/image?image_url=https%3A%2F%2Fpreview.redd.it%2Fer8mtzfwfop51.png%3Fwidth%3D1816%26format%3Dpng%26auto%3Dwebp%26s%3D7adf25628e631d805533b59d944dd13cab49714a&text=%20Number%201%20Imposter%20ko%20dalal%3A%20'+target.username+'%20&text_color=ea1616ff&text_size=64&margin=640';
                


            console.log(img);
            message.channel.send("3rd Imposter award!!", {files: [img]});


            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#800000')
                .setTitle('3rd Imposter Award')
                .setDescription('test')
                //.setDescription(`I ${message.author.username} heartly invite every beautiful and free soul for a game.\nI also hearby acknowledge you that game will be cool and fun \nGame Code : ${args[0].toUpperCase()}`)
                .setImage(img)
                   

    //message.channel.send(exampleEmbed);


        }




        //    const embed = new Discord.MessageEmbed()
        //     .setTitle('Game Code')
        //     .setImage(img)
    
            
        //     message.channel.send(embed);


            //target.avatarURL;

           // const memberTarget = message.guild.members.cache.get(target.id);
            //memberTarget.get.
           

            // const embed = new Discord.MessageEmbed()
            // .setTitle(target.username)
            // .setDescription('Ko DP herera react gar')
            // .setImage(url)

            // message.channel.send(embed);

           // message.channel.send("User has been banned");
        
    }
}