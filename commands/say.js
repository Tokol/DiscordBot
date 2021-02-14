const say = require('say')
const FS = require('fs');


module.exports = {
    name: 'say',
    description: "this is a speak command!",
    async  execute(message, args){
     
        if(!args[0]){

            message.channel.send("Please add a message to speak");
        }

        else{




            const timestamp = new Date().getTime();
            const soundPath = `${__dirname}/files/halvoice.wav`;
        

            var  argsTotal="";
                    for ( i=0; i<args.length; i++){
                        argsTotal = argsTotal+" "+args[i];
                    }
        
                    
        
                        say.export(argsTotal, 'Victoria', 1, soundPath, (err) => {
                            if (err) {
                              return console.error(err)
                            }
        
                            else{
                                
                                const voiceChannel = message.member.voice.channel;
                                voiceChannel.join().then((connection) => {

                                   

                                    connection.play(soundPath).on('end', () => {
                                        console.log('finished');
                                        connection.disconnect();
        
                                        FS.unlinkSync(soundPath);
                                    }).on('error', (err) => {
                                        console.error(err);
                                        connection.disconnect();
                                        FS.unlinkSync(soundPath);
                                    });
                                }).catch((err) => {
                                    console.error(err);
                                });
                            }
                          
        
                          })


        }
           
      
        
        
                // message.channel.send("A text to speech message from a bot.", {
                //     tts: true
                //    })


            

       
    }
}
