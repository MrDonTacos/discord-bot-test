module.exports = {
    name: 'add',
    description: 'Crea una lista con el nombre asignado',
    usage: '<Nombre>', 
    args: true,
	execute(message, args) { 
		if (args.length != 1) {
            return message.channel.send(`El comando no cumple con los parametros necesario, 
            para más información del comando consultar ${prefix}help`);
		}
        
	},
};