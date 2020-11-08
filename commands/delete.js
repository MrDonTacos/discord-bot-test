module.exports = {
    name: 'delete',
    description: 'Elimina una lista y todo su contenido en cascada',
    usage: '<NombreLista>', 
    args: true,
	execute(message, args) { 
		if (args.length != 1) {
            return message.channel.send(`El comando no cumple con los parametros necesario, 
            para más información del comando consultar ${prefix}help`);
		}
        
	},
};