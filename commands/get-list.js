const axios = require('axios');
const { prefix } = require('../config.json');
const List = require('../controller/listController.js');

module.exports = {
    name: 'get-list',
    description: 'Obtiene la información de todas las listas o una lista del servidor', 
	execute(message, args) { 
		if (args.length > 0) {
            return message.channel.send(`El comando no cumple con los parametros necesario, 
            para más información del comando consultar ${prefix}help`)
        }
        else {
            const result = List.get().then(response => {
                return response;
            }).catch(error => {
                return message.channel.send(`Surgió un error al obtener las listas`)
            });
        }
        
	},
};