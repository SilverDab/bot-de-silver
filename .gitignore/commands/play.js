module.exports = {
    name: 'play',
    description: 'Play une musique choisis.',
    async execute(message, args) {
      if (!message.guild) return;

      if (message.member.voice.channel) {
        const ytdl = require('ytdl-core');
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play(ytdl(args[0]), {
          volume: 0.5,
        });
  
        dispatcher.on('start', () => {
            
        })
  
        dispatcher.on('error', () => {
          message.reply("Je n'ai pas réussi à lire cette vidéo !");
          dispatcher.destroy();
          message.member.voice.channel.leave();
          message.channel.bulkDelete(1)
        })
  
        dispatcher.on('finish', () => {
          dispatcher.destroy();
          message.member.voice.channel.leave();
        })
      } 
      else {
        message.reply('Tu dois rejoindre un channel vocal !');
      }
    }
  };