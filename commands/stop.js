module.exports = {
    name: "stop",
    description: "Stoping the cars",
    execute(message, args) {
        message.channel.send("I'm stoping the cars")
        console.log(args)
    }
}