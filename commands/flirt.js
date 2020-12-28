module.exports = {
    name: 'flirt',
    description: "This command flirt a member!",
    execute(message, args){




        const target = message.mentions.users.first();
        if(target){



            var random =   Math.floor(Math.random() * 13) + 1  

       
       
       
       
            switch(random){
                case 1:
                    flirtText = "I'm no photographer, but I can picture us together";
                    break;
       
                    case 2:
                       flirtText = "Did your license get suspended for driving all these guys crazy?";
                       break;
       
       
                       case 3:
                           flirtText = "I need a map coz I lost in your eyes";
                           break;
       
       
                           case 4:
                               flirtText = "Are you French? Because Eiffel for you.";
                               break;

                               case 5:
                               flirtText = "If I could rearrange the alphabet, I’d put ‘U’ and ‘I’ together.";
                               break;

                               case 6:
                               flirtText = "I must be in a museum, because you truly are a work of art.";
                               break;



                               case 7:
                                flirtText = "Was wondering if you had an extra heart. Because mine was just stolen.";
                                break;



                                case 8:
                                    flirtText = "My love for you is like diarrhea, I just can't hold it in.";
                                    break;


                                    case 9:
                                    flirtText = "Are you a bank loan? Because you got my interest.";
                                    break;



                                    case 10:
                                    flirtText = "Life without you is like a broken pencil…pointless.";
                                    break;

                                    case 11: 
                                    flirtText = "Did the sun come out or did you just smile at me?";
                                    break;

                            
                                        case 12:
                                            flirtText = "You’re so beautiful that you made me forget my pickup line.";
                                            break;


                                            case 12:
                                                flirtText = "We’re not socks, but I think we’d make a great pair.";
                                                break;

                                                case 13:
                                                    flirtText = "Did you just come out of the oven? Because you’re hot.";
                                                    break;



       
                    default:
                        flirtText = "I need a map coz I lost in your eyes";
       
            }






            message.channel.send("Hey! "+target.username+" "+flirtText);

//            const memberTarget = message.guild.members.cache.get(target.id);

           //return  message.channel.
        }else{
            message.channel.send(`You coudn't flirt yourself!`);
        }
    }
}