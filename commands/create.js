const axios = require('axios');
const { prefix } = require('../config.json');
const List = require('../controller/listController.js');

module.exports = {
    name: 'create',
    description: 'Crea una lista con el nombre asignado',
    usage: '<"Nombre"> <"Descripcion">',
    ejem: `"Lista de películas para navidad" 
    "Lista de películas temáticas para navidad"`, 
    args: true,
	execute(message, args) { 
    console.log("Entrando");
		if (args.length > 2 || args.length < 1) {
            return message.channel.send(`El comando no cumple con los parametros necesario, 
            para más información del comando consultar ${prefix}help`);
        }
        else
        {
          const body = {
            "Name": args[0],
            "Description": args[1] ? args[1] : ' ',
            "ServerID": message.guild.id
          }
          try{
            let success = List.create  (body).then(response =>{
              return message.channel.send(`Lista ${response.data.fields.Name} creada con exito`)
            }).catch(error =>{
              message.channel.send(`Error al crear la lista ${args[0]}`)
            })
          }catch(error)
          {
            console.log(error)
          }
        }
        
	},
};