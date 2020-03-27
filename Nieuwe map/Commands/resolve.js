const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        try {

    var text = {
        "embed": {
            "title": "Bug's-Resolved",
            "description": "Files reloaded",
            "footer": {
                "text": "Skyfarers ● Admin-system"
            },
        }};
    message.channel.send(text);

    } catch (error) {
        message.channel.send("Error: This command is out of service");
    }

}
module.exports.help = {
name: "reload"
}