const fs = require('fs')
const Discord = require('discord.js');
const config = require('./config.json')

require('custom-env').env(true)

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    const prefix = config.prefix;
    if(message.content.startsWith(prefix))
    {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        console.log("Args: " + args + "\n")
        const commandName = args.shift().toLowerCase();
        console.log("commandName: " + commandName + "\n")

        if (!client.commands.has(commandName)) return;

        const command = client.commands.get(commandName);
        console.log("Command: " +command + "\n")

        if (command.args && !args.length) {
            let reply = `No se pasado ningún argumento, ${message.author}!`;

            if(command.usage) {
			    reply += `\nEl uso apropiado del comando es: \`${prefix}${command.name} ${command.usage}\``;
		    }

    		return message.channel.send(reply);
        }


        try {
        	command.execute(message, args);
        } catch (error) {
        	console.error(error);
        	message.reply('Hubo un error al ejecutar el comando!');
        }
    }   
});

client.login(process.env.PRIVATE_TOKEN);