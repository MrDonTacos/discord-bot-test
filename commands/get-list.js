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
            let text = "Listas creadas para este servidor: \n";
            const result = List.getAll().then(response => {
                response.forEach(element => {
                    text += element.fields.Name + "\n"
                });
                return message.channel.send(text);
            }).catch(error => {
                return message.channel.send(`Surgió un error al obtener las listas, ${error}`);
            });
            console.log(result);
        }
        
	},
};