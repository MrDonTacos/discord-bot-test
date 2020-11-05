module.exports = {
    name: "greet",
    description: "Greet someone",
    execute(message, args) {
        message.channel.send("I'm greeting " + message.author.username)
    }
}