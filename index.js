const Discord = require('discord.js');
const config = require('./config.json')
require('custom-env').env(true)
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    console.log(message.content);
    if(message.content === config.prefix + 'ping')
        message.channel.send("Pong!")
});

client.login(process.env.PRIVATE_TOKEN);