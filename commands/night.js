module.exports = {
    name: 'night',
    description: "This command is night greet!",
    execute(message, args){

            var random =   Math.floor(Math.random() * 7) + 1  

                nightText = "";

            switch(random){
                case 1:
                    nightText = "Good Night pyaro pyari haru lai:heart:";
                    break;
       
                    case 2:
                        nightText = "I know it’s not true, but my heart still believes that the moon shines for just me and U Rangers. Good night.";
                       break;
       
       
                       case 3:
                        nightText = "We come with nothing and go with nothing. But one great thing we achieve is a little remembrance in someone´s mind & small place in someone´s heart. Good night!";
                           break;
       
       
                           case 4:
                            nightText = "If u ever feel lonely, look to the sky… Always know that I’m somewhere beneath that sky wishing all the best for you. Good night… sweet dreams!";
                               break;

                               case 5:
                                nightText = "U all are the sweetest thing, and I love U all. Good Night. Sweet Dreams.";
                               break;

                               case 6:
                                nightText = "We are together for a very long time now, and I just wanna let you all know that I love you all more than ever now. Good Night my Rangers.";
                               break;


                               case 7:
                                nightText = "You all are the only persons whom I want to see happy always. So, keep smiling dear and you all know that I love you all more than you guys do. 😉 Good Night!";
                                break;


       
                    default:
                        nightText = "Good Night pyaro pyari haru lai:heart:";
       
            }

            message.channel.send(nightText);


           //return  message.channel
    }
}