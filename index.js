const Discord = require('discord.js');

const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => { 
    console.log('Ready!')
});

client.on('message', (message) => {
     if (message.content === `${prefix}p`) {
       message.channel.send('Tu vient de prendre ton service !');
     }
     if (message.content === `${prefix}f`) {
        message.channel.send('Tu vient de prendre ta fin de service !');
     }
});

client.login(token);