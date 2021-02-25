

const fetch = require('node-fetch');
const { Imgflip } =  require ('imgflip.com');

const bgImage = "https://cdn.pixabay.com/photo/2016/06/14/10/58/guestbook-1456265_960_720.jpg";
const Discord = require('discord.js');
module.exports = {

    name: 'stub',
    description: "This command view game code for stub!",
   async  execute(message, args){
    
        if(!args[0]){
            message.channel.send("Invalid Command");
        }

        else{

               
    
            var imgflip = new Imgflip();
            
                    var imageShow = "";
            
            imgflip.api
                        .captionImage({
                          username: 'GorakhRajJoshi',
                          password: 'asd',
                          template_id: 301330508,
                          max_font_size:60,
                         boxes:[

                            {
                                "text": args[0].toUpperCase(),
                                "x": 30,
                                "y": 150,
                                "width": 400,
                                "height": 800,
                                "color": "#FF0000",
                                "outline_color": "#ffffff"
                            },

                         ]
                          // ...
                        })
                        .then(response => {
                          //
                          
                          imageShow = response['data']['url']
            
                          const embed = new Discord.MessageEmbed()
                          
                          .setColor('#00FF00')
                          .setTitle('Game Invitation')
                          .setDescription(`I ${message.author.username} heartly invite every beautiful and free soul for a game.\nI also hearby acknowledge you that game will be cool and fun \nGame Code : ${args[0].toUpperCase()}`)
                          .setImage(imageShow)
                          .setTimestamp()
                          .setFooter(`${'@stumble guys'}`)        
  
                              message.channel.send(embed);


    
            
                        });
                    


                     

//             var img= 'https://textoverimage.moesif.com/image?image_url=https://i.imgur.com/w2UGYNi.jpg&text='+args[0].toUpperCase()+'&text_color=1a191eff&text_size=64&y_align=middle&x_align=center';
                



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