

const Discord = require('discord.js');


module.exports = {
    name: 'book',
    description: "This command shows a must read book!",
     execute(message, args){
      
 var books = [];

 books[0]="1. The Righteous Mind: Why Good People Are Divided by Politics and Religion by Jonathan Haidt"+"\n";
 books[1]="2. Thinking Fast and Slow by Daniel Kahneman"+"\n";
 books[2]="3. Bad Science by Ben Goldacre"+"\n";
 books[3]="4. Meditations by Marcus Aurelius"+"\n";
 books[4]="5. The Design of Everyday Things by Don Norman"+"\n";
 books[5]="6. The Art of War by Sun Tzu"+"\n";
 books[6]="7. Your Mind and how to Use it: A Manual of Practical Psychology by William Walker Atkinson"+"\n";
 books[7]="8. Prisoners of Geography: Ten Maps That Tell You Everything You Need To Know About Global Politics by Tim Marshall"+"\n";
 books[8]="9. The 7 Habits of Highly Effective People by Stephen Covey"+"\n";
 books[9]="10. Why Nations Fail by Daron Acemoglu and James A. Robinson"+"\n";
 books[10]="11. The Next 100 Years: A Forecast for the 21st Century by George Friedman"+"\n";
 


var embed = new Discord.MessageEmbed()
.setTitle('Must Read book')
.setDescription('Must read books sugestion from Kafka AKA HAL 9000\n'+"\n"+books[0]+'\n'+books[1]+'\n'+books[2]+'\n'+books[3]+'\n'+books[4]+'\n'+books[5]+'\n'+books[6]+'\n'+books[7]+'\n'+books[8]+'\n'+books[9]+'\n'+books[10]+'\n');

message.channel.send(embed);

        


}

}
