module.exports = {
    name: 'update',
    description: `Actualiza un elemento de la lista mediante 
    su indice y nombre de la lista, los elementos no especificados
    mantendrán su mismo estado anterior`,
    usage: '<Indice> <Nombre> <Titulo?> <Descripcion?> <Duración?>', 
    args: true,
	execute(message, args) { 
		if (args.length < 2) {
            return message.channel.send(`El comando no cumple con los parametros necesario, 
            para más información del comando consultar ${prefix}help`);
		}
        
	},
};