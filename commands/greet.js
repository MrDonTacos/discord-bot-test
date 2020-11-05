module.exports = {
    name: "greet", //Se define el nombre del comando, este nombre será de ayuda para el comando help
    description: "Greet someone", //Se describe la funcionalidad del comando, esta descripción describirá el comando en el comando help
    execute(message, args) {
        message.channel.send("I'm greeting " + message.author.username) //Dentro del execute se define la lógica de lo que se quiere realizar con el comando
    }
}
