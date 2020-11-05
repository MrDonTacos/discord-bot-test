module.exports = {
    name: 'args-info', //Se define el nombre del comando
    description: 'Información sobre los argumentos.', //Se provee una breve descripción del comando
    usage: '<user> <role>', //Se establecen los parametros que puede contener nuestro comando, servirá para que el comando help imprima los parametros de nuestro comando
    args: true, //Se especifica que este comando recibe argumentos
	execute(message, args) { //Parte donde se realiza la lógica y operaciones sobre cada argumento 
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};
