module.exports = {
    name: 'stop',
    description: 'Stop une musique choisis.',
    async execute(message, args) {
      if (!message.guild) return;
      message.member.voice.channel.leave();
    } 
  };