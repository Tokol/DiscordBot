
    const Discord = require('discord.js');
    module.exports = {
        name: 'death',
        description: "this is a death command",
        execute(message, args){
    
            const embed = new Discord.MessageEmbed()
            .setTitle('What happen after we die?')
            .setDescription('What if you died and the afterlife was a waiting room, where you would wait until the last living person in the world forgot you? Only then you move on.\nOr what if you died and God was a massive giant, who didn\'t even know you existed, like how we are to ants?\nOr what if you died then you met every possible version of you, all the decisions you could have taken and the people you could have become?\nOr what if you died and you had to do everything you did while alive but in sets, all at once, the sum of all the times you did those things. You shower for 10 days, you masturbate for 5 days, you sleep for 20 years, you get the idea.\nAll of these are thought experiments from David Eagleman\'s book, Sum. The book has 40 possibilities of the afterlife. It\'s a really smart and thoughtful book. Eagleman is a scientist but writes fiction that explores possibilities. Check it out if you\'re interested in speculative fiction and the idea of the afterlife. As for what I think, nothing happens. At least nothing you can know consciously. Do you remember what it was like before you were born? That\'s exactly what being dead is like.')
            .addField('Join chautari for more discussion like this', `https://discord.gg/c7vFf2cGF2`)
            .setImage('https://manikcreations.com/wp-content/uploads/2015/12/IMG_2277-620x986.jpg')    
            message.channel.send(embed);
    
    
            //https://discord.gg/YPtyFe3H7R
           // message.channel.send('Hi my name is Lollipop. Come say hi to me in Kuirey ko kafe');
        }
    }
    
    


/** */