const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        try {

    var text = {
        "embed": {
            "color": 12976133,
            "description": "**Commands**\n\n*!Test* - 'Test'\n*!Rules* - 'Soon'",
            "author": {
                "name": "Help"
            },
            "footer": {
                "text": "By: ImoestoeStudios"
            }
        }
    }
    message.author.send(text);

    message.channel.send("This command has shown in your DM");

    } catch (error) {
        message.channel.send("Error: This command is out of service");
    }

}
module.exports.help = {
name: "help"
}