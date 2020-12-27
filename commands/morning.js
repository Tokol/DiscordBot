module.exports = {
    name: 'morning',
    description: "This command is morning greet!",
    execute(message, args){

            var random =   Math.floor(Math.random() * 9) + 1  

            console.log(random);
       
                morningText = "";
       
            switch(random){
                case 1:
                    morningText = "Good morning pyaro pyari haru lai:heart:";
                    break;
       
                    case 2:
                        morningText = "Draft the plan of your course of action, and you will be unstoppable. Good Morning, Rangers!";
                       break;
       
       
                       case 3:
                        morningText = "The mantra to be successful is, getting up before the sunrise. Good Morning, have a great day!";
                           break;
       
       
                           case 4:
                            morningText = "Each day brings new opportunities, those who start their day early, grab them before others. Good Morning!";
                               break;

                               case 5:
                                morningText = "Your dreams are now real, something you see with open eyes in the full light so wake up because you have a lot to achieve and a lot more to dream. Good morning!";
                               break;

                               case 6:
                                morningText = "Sunrises are beautiful just like you all guys; I wish to start my beautiful day sitting beside you. Good morning Rangers, hope you have a wonderful day!";
                               break;



                               case 7:
                                morningText = "Good morning rangers, hope when you open your eyes you read this, I wish your day goes as planned and more than amazing! Wake up rangers!";
                                break;



                                case 8:
                                    morningText = "Good morning Rangers, to wake up with you guys is the best part of the morning, I love you rangers!";
                                    break;


                                    case 9:
                                        morningText = "A bad day will always have a good morning, hope all your worries are gone and everything you wish could find a place. Good morning!";
                                    break;



                                   


       
                    default:
                        morningText = "Good morning pyaro pyari haru lai:heart:";
       
            }

            message.channel.send(morningText);


           //return  message.channel
    }
}