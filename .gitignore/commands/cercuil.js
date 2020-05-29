module.exports = {
    name: '⚰️',
    description: 'Play requested sound.',
    async execute(message, args) {      

      if (!message.guild) return;
  
      if (message.member.voice.channel) {
        const ytdl = require('ytdl-core');
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('test.mp3', {
            volume: 1,
        })
  
        dispatcher.on('start', () => {
          console.log('tatatat tututu ttutuut')
        })
  
        dispatcher.on('error', () => {
          message.reply("Je n'ai pas réussi à lire cette vidéo !");
          dispatcher.destroy();
          message.member.voice.channel.leave();
        })
  
        dispatcher.on('finish', () => {
          dispatcher.destroy();
          message.member.voice.channel.leave();
        })
    
      } 

      else {
        message.reply(`tu n'es pas dans un channel`);
      }
    }
  };