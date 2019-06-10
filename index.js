const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NTg3MjQxMDkxMDU3ODQ0MjI0.XPzwHQ.HCprPCNLyqtiDN_WuYOKf3PxXSQ'


var prefix = '!'

client.on('ready', () => {
  console.log(`[BOT] ${client.user.tag} TERBİYESİZLİK YAPMAYIN!`);
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('Pingin Bu!' + client.ping + 'ms');
  }
  
    if (message.content === 'sa') {
    message.channel.send('as');
  }
  
  if (message.content ===  'asiletim') {  
	message.channel.send(message.author.avatarURL);
  }
  if (message.content === 'amk') {
    message.channel.send('terbiyesizlik yapma !');
  }
});
client.login(process.env.NTg3MjQxMDkxMDU3ODQ0MjI0.XPzwHQ.HCprPCNLyqtiDN_WuYOKf3PxXSQ)
