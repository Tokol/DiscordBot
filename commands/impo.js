
const fetch = require('node-fetch');
const { Discord, Client, MessageAttachment } = require('discord.js');

//const bgImage = "https://cdn.pixabay.com/photo/2016/06/14/10/58/guestbook-1456265_960_720.jpg";
const FormData = require('form-data');
//const imgflip =  require('imgflip');
const { Imgflip } =  require ('imgflip.com');
const kafkaId = 319740211255050242;
module.exports = {
    name: 'impo',
    description: "This command provides imposter award!",
    async  execute(message, args){
        const target = message.mentions.users.first();
        if(!target){
            message.channel.send("Invalid Command");
        }


        
        else{
          var impostername = target.username;    
        
          
var imgflip = new Imgflip();

        var imageShow = "";

imgflip.api
            .captionImage({
              username: 'GorakhRajJoshi',
              password: 'asd',
              template_id: 289894455,
             boxes:[
                 
                {
                    "text": impostername,
                    "x": 600,
                    "y": 775,
                    "width": 500,
                    "height": 100,
                    "color": "#FF0000",
                    "outline_color": "#ffffff"
                },


             ]
              // ...
            })
            .then(response => {
              //
              
              imageShow = response['data']['url']


              const attachment = new MessageAttachment(imageShow);
              message.channel.send(attachment);

            });
            // console.log(formdata);


           // todo[boxes];
           // console.log(todo);

         

        // formdata.submit(requestUrl, function(err, res) {
        //     if (err) throw err;
        //     console.log(res.statusMessage);
        //   });



        /**
         * 
         * 
            
         * 
         */


        
    }
}

}