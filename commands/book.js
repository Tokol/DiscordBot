

const Discord = require('discord.js');


module.exports = {
    name: 'book',
    description: "This command shows a must read book!",
     execute(message, args){
      
 var books = [];

 books[0]="The Righteous Mind: Why Good People Are Divided by Politics and Religion by Jonathan Haidt";
 books[1]="Thinking Fast and Slow by Politics and Religion by Daniel Kahneman";
 books[2]="Bad Science by Ben Goldacre";
 books[3]="Meditations by Marcus Aurelius";
 books[4]="The Design of Everyday Things by Don Norman";
 books[5]="The Art of War by Sun Tzu";
 books[6]="Your Mind and how to Use it: A Manual of Practical Psychology by William Walker Atkinson";
 books[7]="Prisoners of Geography: Ten Maps That Tell You Everything You Need To Know About Global Politics by Tim Marshall";
 books[8]="The 7 Habits of Highly Effective People by Stephen Covey";
 books[9]="Why Nations Fail by Daron Acemoglu and James A. Robinson";
 books[10]="The Next 100 Years: A Forecast for the 21st Century by George Friedman";
 

 var displayMessage = "";
 for (i=0; i<books.length; i++){
    displayMessage = books[i]+"\n";
 }


var embed = new Discord.MessageEmbed()
.setTitle('Must Read book')
.setDescription('Must read books sugestion from Kafka AKA HAL 9000\n'+displayMessage);

message.channel.send(embed);

        


}

}
