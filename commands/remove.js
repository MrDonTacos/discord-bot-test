module.exports = {
    name: 'remove',
    description: 'Quita un elemento de la lista mediante su indice y nombre de la lista',
    usage: '<Indice> <ListName>', 
    args: true,
	execute(message, args) { 
		if (args.length != 2) {
            return message.channel.send(`El comando no cumple con los parametros necesario, 
            para más información del comando consultar ${prefix}help`);
		}
        
	},
};