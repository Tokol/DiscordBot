
const fetch = require('node-fetch');
const Discord = require('discord.js');
module.exports = {
  name: 'nasa',
  description: "This command view nasa news",
  async execute(message, args) {
    var response;
    var reqType = "";
    var requestData = true;
    var requesturl = "https://api.nasa.gov/mars-photos/api/v1/rovers/Perseverance/latest_photos?api_key=6BdWiVpuMwANxgWRRIlrZrqVZkKpxCihizQNYpAj";

    if (!args[0]) {

      requesturl = "https://api.nasa.gov/mars-photos/api/v1/rovers/Perseverance/latest_photos?api_key=6BdWiVpuMwANxgWRRIlrZrqVZkKpxCihizQNYpAj";

      reqType = "Perseverance";
      requestData = true;

    }



    else if (args[0].toLowerCase() == 'cur') {
      requesturl = "https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/latest_photos?api_key=6BdWiVpuMwANxgWRRIlrZrqVZkKpxCihizQNYpAj";
      reqType = "Curiosity";
      requestData = true;

    }

    else if (args[0].toLowerCase() == 'opp') {
      requesturl = "https://api.nasa.gov/mars-photos/api/v1/rovers/Opportunity/latest_photos?api_key=6BdWiVpuMwANxgWRRIlrZrqVZkKpxCihizQNYpAj";
      reqType = "Opportunity";
      requestData = true;
    }

    else if (args[0].toLowerCase() == "spr") {
      requesturl = "https://api.nasa.gov/mars-photos/api/v1/rovers/Spirit/latest_photos?api_key=6BdWiVpuMwANxgWRRIlrZrqVZkKpxCihizQNYpAj";
      reqType = "Spirit";
      requestData = true;
    }

    else {
      requestData = false;
    }



    const channel = message.guild.channels.cache.find(ch => ch.name === 'nasa');


    if (channel) {


      if (requestData) {


        channel.send(`${message.author} thanks for requesting latest image data from ` + reqType + ` of mars mission.\nBy default it provide image data from latest NASA Mars mission i.e Perseverance rover. 
            other commands are:
            hal nasa (for Perseverance rover)
            hal nasa cur (for curiosity rover)
            hal nasa opp (for Opportunity rover)
            hal nasa spr (for Spirit rover)
            fetching image data ....
            `);


        await fetch(requesturl)
          .then(res => res.json())
          .then(json =>
            response = json
          );

        if (response != null) {
          var result = response['latest_photos'];

          for (var i = 0; i < result.length; i++) {

            var embed = new Discord.MessageEmbed()
              .setColor('#00FF00')
              .setTitle('Image Data from ' + reqType + ' ' + (i + 1) + '/' + result.length)
              .setDescription('Earth Date: ' + result[i]['earth_date'] + '\nCamera: ' + result[i]['camera']['full_name'] + '\n Rover status: ' + result[i]['rover']['status'])
              .setImage(result[i]['img_src'])
              .setTimestamp()
              .setFooter(`requested by ${message.author.username}   data: ` + (i + 1) + '/' + result.length)
            channel.send(embed);



          }


        }
      }

      else {
        message.channel.send(` ${message.author} invalid command!! valid commands are: \nhal nasa (for Perseverance rover)\nhal nasa cur (for curiosity rover)\nhal nasa opp (for Opportunity rover)\nhal nasa spr (for Spirit rover)`);

      }


    }


    else {
      message.channel.send('Please create a channel name nasa');
    }



  }
}

